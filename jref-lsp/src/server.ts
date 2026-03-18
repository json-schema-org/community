
import {
	createConnection,
	TextDocuments,
	DiagnosticSeverity,
	ProposedFeatures,
	DidChangeConfigurationNotification,
	CompletionItemKind,
	TextDocumentSyncKind,
    Range
} from 'vscode-languageserver/node.js';

import type {
    Diagnostic,
    InitializeParams,
    CompletionItem,
    TextDocumentPositionParams,
    InitializeResult,
    Location
} from 'vscode-languageserver/node.js';

import {
	TextDocument
} from 'vscode-languageserver-textdocument';

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

connection.onInitialize((params: InitializeParams) => {
	const capabilities = params.capabilities;

	// Does the client support the `workspace/configuration` request?
	// If not, we fall back using global settings.
	hasConfigurationCapability = !!(
		capabilities.workspace && !!capabilities.workspace.configuration
	);
	hasWorkspaceFolderCapability = !!(
		capabilities.workspace && !!capabilities.workspace.workspaceFolders
	);
	hasDiagnosticRelatedInformationCapability = !!(
		capabilities.textDocument &&
		capabilities.textDocument.publishDiagnostics &&
		capabilities.textDocument.publishDiagnostics.relatedInformation
	);

	const result: InitializeResult = {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
			// Tell the client that this server supports code completion.
			completionProvider: {
				resolveProvider: true
			},
            definitionProvider: true
		}
	};
	if (hasWorkspaceFolderCapability) {
		result.capabilities.workspace = {
			workspaceFolders: {
				supported: true
			}
		};
	}
	return result;
});

connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(() => {
			connection.console.log('Workspace folder change event received.');
		});
	}
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent((change: { document: TextDocument }) => {
	validateTextDocument(change.document);
});

async function validateTextDocument(textDocument: TextDocument): Promise<void> {
	// The validator creates diagnostics for all uppercase words length 2 and more
	const text = textDocument.getText();
	const diagnostics: Diagnostic[] = [];

    try {
        const json = JSON.parse(text);
        // Basic JRef validation logic would go here
        // For now, let's just check if it's a valid JSON
        
        // Example JRef check: If it contains a $ref, it should be a string
        findRefs(json, textDocument, diagnostics);

    } catch (e: any) {
        // Report JSON syntax errors
        const message = e.message || 'Invalid JSON';
        // Simple error parsing to get line/col if possible
        // For a real implementation, a proper JSON parser (like jsonc-parser) would be better
        diagnostics.push({
            severity: DiagnosticSeverity.Error,
            range: {
                start: textDocument.positionAt(0),
                end: textDocument.positionAt(text.length)
            },
            message: `JSON Parse Error: ${message}`,
            source: 'jref-lsp'
        });
    }

	// Send the computed diagnostics to VSCode.
	connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

function findRefs(obj: any, document: TextDocument, diagnostics: Diagnostic[]) {
    if (typeof obj !== 'object' || obj === null) return;

    if ('$ref' in obj) {
        if (typeof obj.$ref !== 'string') {
            const text = document.getText();
            const index = text.indexOf('"$ref"');
            diagnostics.push({
                severity: DiagnosticSeverity.Error,
                range: {
                    start: document.positionAt(index),
                    end: document.positionAt(index + 6)
                },
                message: '$ref must be a string',
                source: 'jref-lsp'
            });
        }
        
        // JRef objects can have $metadata, but other keys are typically not allowed unless defined in metadata
        // For the qualification, let's just flag non-$ref/non-$metadata keys in a JRef object
        for (const key in obj) {
            if (key !== '$ref' && key !== '$metadata') {
                const text = document.getText();
                const index = text.indexOf(`"${key}"`);
                diagnostics.push({
                    severity: DiagnosticSeverity.Warning,
                    range: {
                        start: document.positionAt(index),
                        end: document.positionAt(index + key.length + 2)
                    },
                    message: `Property "${key}" is not expected in a JRef object`,
                    source: 'jref-lsp'
                });
            }
        }
    } else {
        for (const key in obj) {
            findRefs(obj[key], document, diagnostics);
        }
    }
}

connection.onDefinition((params: TextDocumentPositionParams): Location | Location[] | null => {
    const document = documents.get(params.textDocument.uri);
    if (!document) return null;

    const text = document.getText();
    const offset = document.offsetAt(params.position);
    
    // Use a slightly more robust regex or a proper parser
    // For the qualification task, we need to find if the cursor is on a $ref value
    const regex = /"\$ref"\s*:\s*"([^"]+)"/g;
    let match;
    while ((match = regex.exec(text)) !== null) {
        const refValue = match[1];
        if (!refValue) continue;

        const valueStart = match.index + match[0].indexOf(refValue);
        const valueEnd = valueStart + refValue.length;
        
        if (offset >= valueStart && offset <= valueEnd) {
            // connection.console.log(`Resolving ref: ${refValue}`);
            
            // For the qualification, we return a Location if it's a valid relative path
            // This is a simplified implementation
            try {
                const targetUri = new URL(refValue, params.textDocument.uri).toString();
                return {
                    uri: targetUri,
                    range: Range.create(0, 0, 0, 0)
                };
            } catch (e) {
                return null;
            }
        }
    }

    return null;
});

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();
