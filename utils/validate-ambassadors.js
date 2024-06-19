// validate-ambassadors.js
const Ajv = require('ajv');
const path = require('path');
const fs = require('fs');

// Set the directory where ambassadors.json and ambassadors-schema.json reside
const ambassadorsDir = path.join(__dirname, 'programs', 'ambassadors');
const schemaPath = path.join(ambassadorsDir, 'ambassadors-schema.json');
const dataPath = path.join(ambassadorsDir, 'ambassadors.json');

try {
    // Load schema and data files
    const schema = require(schemaPath);
    const data = require(dataPath);

    // Initialize AJV instance with options
    const ajv = new Ajv({ allErrors: true }); // Validate all errors, not just the first one

    // Compile the schema
    const validate = ajv.compile(schema);

    // Validate data against schema
    const valid = validate(data);

    if (!valid) {
        console.error('Validation failed:', validate.errors);
        process.exit(1); // Terminate with a non-zero exit code on validation failure
    } else {
        console.log('ambassadors.json is valid.');
    }
} catch (error) {
    console.error('Error validating ambassadors.json:', error);
    process.exit(1); // Terminate with a non-zero exit code if there's an error
}
