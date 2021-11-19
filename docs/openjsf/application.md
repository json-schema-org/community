# JSON Schema

## Applicant

> Who is the main point of contact during the application process?

Ben Hutton
@relequestual (twitter/github)
ben.hutton@postman.com
relequestual@gmail.com
ben@jsonschema.dev

JSON Schema project lead and publisher of the latest version of JSON Schema.

## Description

> A rough description of the project in less than 100 words.

JSON Schema is a vocabulary that allows you to annotate and validate JSON documents.
Written in JSON, a defined set of keywords allow you to express constraints in order to perform validation.
With the most popular implementation boasting over 50 million weekly downloads (npm), and out-of-the-box support in VSCode, JSON Schema continues to be the defacto specification to validate JSON.

## Reason for Applying

> A short description of the reasons why your project is applying to join the foundation, and your expectations from the foundation.
> Please keep your answer to less than 100 words.

Having recently been employed to work full time on JSON Schema, it feels reasonable to provide an assurance to the community that JSON Schema is not owned by the company I now work for. Having long debated the merits of standards orgs, and with a view to write software too, the OpenJS seems like a good home for such a critical project.

Our expectations include
- enable and support our efforts to expand into providing software to our community
- Facilitate collaboration and promote adoption. We struggle to get introductions to or interface with high profile users (such as VSCode)

## Statement of alignment with OpenJS Foundation charter and mission

> Please refer to [the Cross Project Council's Charter](https://github.com/openjs-foundation/cross-project-council/blob/HEAD/CPC-CHARTER.md).
> Please keep your answer to less than 250 words.

"We believe that it is essential to provide a neutral home for critical projects, with common principles of technical governance and accountability." - part of the OpenJSF mission statement.

We, the JSON Schema collaborators, also believe this.

We feel the approach laid out in the CPC charter is reasonable.

We identify with the need for collaboration between JavaScript, web solutions, and related technologies.


## Impact and users of the project
> What is the ecosystem impact of the project?

JSON Schema has far reaching impact in the JS ecosystem. It's used by libraries such as eslint and webpack.
VSCode (and other IDEs) use JSON Schema to validate configuration files.
GitHub reports roughly 9k dependent packages and over 9 million dependent repositories for the most popular implementation of JSON Schema (AJV).

> Who are the biggest users of the project? (_if they are not JavaScript space, then will it ever expand to JavaScript space_)

Libraries: eslint and webpack.
Specifications: OpenAPI, AsyncAPI.
Editors: Visual Studio Code, Eclipse IDE, Jetbrains IDEs.
Organisations: Microsoft, Google, Amazon, Mozilla, SAP, IBM, HM Government, NIH, NASA, The Deutsche Bahn.

Additionally, as of OpenAPI 3.1, all these organizations: https://www.openapis.org/membership/members

> What is the potential long term impact and adoption?

We are at a critical juncture of JSON Schema evolution.
The extension mechanism, JSON Schema Vocabularies, allows for the standardised extension of JSON Schema to cater to non-validation use cases.

Use cases such as code generation, form generation, database generation (and validation), have evolved, but are non-standard. We're already working with existing open source projects and major organisations to facilitate standardising these use cases.

- How does it differ from other projects?

JSON Schema is a domain-specific declarative language for validating and annotating JSON data.

It cannot be compared to OpenAPI. OpenAPI 3.1 now defers the schema definitions to the most recent release of JSON Schema[1]. Nor can it be compared to JSON-LD, which is designed for linked data. Nor can it be compared to schema.org which provides data semantics.

JSON Type Definition (RFC 8927) is comparable but not an alternative, as it is designed only for code generation.
JSON Schema has many more implementations and languages supported, and has vastly more use in the ecosystem.

Protocol Buffers and Avro do not just specify a structure, but define the "over the wire" format and serialisation method. JSON Schema is designed for validation of JSON data rather than data definitions, enabling the definition of more complex validation constraints than would otherwise be possible.

In comparison to Joi, a popular and well used Javascript validation library, JSON Schema offers a language agnostic and portable validation mechanism.

In summary, JSON Schema is language agnostic, declarative constraints based, interoperable, validation and annotation for JSON.

Beyond validation and annotation, we are actively supporting special interest groups to define new vocabularies and dialects to add additional semantics and mechanisms to JSON Schema in order to support other use cases, such as UI generation, code generation, and databases.

## Desired Initial Project Phase

> Please refer to [Section III, Stages - Definitions & Expectations](https://github.com/openjs-foundation/cross-project-council/blob/HEAD/PROJECT_PROGRESSION.md#iii-stages---definitions--expectations) of PROJECT_PROGRESSION.md.

At Large, although with a view to move to Impact.

## Project Website

https://json-schema.org

## Social Media Accounts

Twitter: @jsonschema

## Official Communication Channels

https://json-schema.org/slack (json-schema)
https://groups.google.com/g/json-schema (closing down soon)

## Security Policy

We do not currently produce code, although our specifications have a security considerations section.

## Governance Structure

> Is there a leadership team?

Not formally. We recognise "Those who have admin rights to the GitHub org" as admins.
We recognise those who make significant contributions, but do not list them anywhere.

> - Who are the members of the leadership team?
> - How are members of the leadership team nominated?

N/A

> How are individuals outside of leadership given commit access?

If any of the existing individuals recognised as contributors, recognises someone else who is making significant contributions, they may put forward someone be given commit access. There is no documented process.

(Applicant note: I find those who show up and do the work often end up getting put forward. We operate almost entierly in the open apart from two private channels, one for admins and one for collaborators.)

> Is the project open/willing to move to open governance, if not already in place?

We are mostly open. We would seek to be more open where we are currently not, where appropriate. (For things such as CoC reports, fully open would not be appropriate.)

> Is the project willing to adopt the OpenJS Foundation Code of Conduct (CoC)?

We recently established our own CoC based on the Contributor Covenant Code of Conduct and the IETF BCP 54 "IETF Guidelines for Conduct). We outlined our reasoning here: https://github.com/json-schema-org/community/blob/main/docs/adr/2021-08-26-code-of-conduct.md

We would amend our enforcement section to detail escalation to the OpenJSF CoCP as per the OpenJSF CoC.

Please advise if any other changes would be required.

> Please share links to all existing documentation e.g. GOVERNANCE.md / CONTRIBUTING.md

Org wide CoC https://github.com/json-schema-org/.github

Spec (primary repo) Contributing guide https://github.com/json-schema-org/json-schema-spec/blob/draft-next/CONTRIBUTING.md - Needs updating to reflect recent changes.

As part of our open governance, we are forming our governance in the open: https://github.com/json-schema-org/community

## List of all repos that are part of the project

For each repository, please provide:

> - link to repo,
> - license information,
> - who owns the Intellectual Property (IP),
> - link to issue tracker,
> - link to code of conduct (CoC),
> - optionally, the full list of vendored dependencies contained in the source tree, including license information.
> - A full audit of all vendored dependencies will be required before your project can officially join the foundation, but this can be done later with foundation support.

We may need some assistance with this.
Although, we only have 13 repos in total.

## Existing Financial Sponsorship

> Does your project currently receive funds? Who do they come from and what are the funds used for?

Yes, we have an OpenCollective. https://opencollective.com/json-schema

Initially these funds were mainly used to support me (applicant) allowing me to spend (and justify) more time outside of primary employment to the project.

Once I joined Postman full time to work on JSON Schema, I have stopped making claims.

Besides paying a minimal amount for Cloudflare Workers, we have no other ongoing costs.

We are planning to ask other OpenJSF projects how they spend their money and why.

## Infrastructure Needs or Requests

I don't believe we have any current infra needs.

We do and will need assistance in terms of
- Promotion and marketing, potentially including copy
- Introduction to other projects and organisations for collaboration
- Legal support in terms of licence issues


## Questions?

> What questions do you have? What questions might arise during your application?

I have already had several calls with various people at the OpenJSF, and do not have any outstanding questions.

[1]
https://www.openapis.org/blog/2021/02/18/openapi-specification-3-1-released
https://nordicapis.com/whats-new-in-openapi-3-1-0/