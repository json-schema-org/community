# Expectations of community are clearly explained by a code of conduct

* Status: accepted
* Deciders: @relequestual, @Julian, @jdesrosiers, @karenetheridge
* Date: 2021-08-26

## Context and Problem Statement

To the best of my knowledge, JSON Schema has never formally had a Code of Conduct (CoC).

I personally recall a few instances where a CoC may have been useful.

We want to make people feel welcome, and so should have a formal CoC.

## Decision Drivers

* We have had a few instances where it would have been useful to have a CoC
* Assuming we continue to join the OpenJS Foundation, they would expect us to have a CoC
* Not having a CoC may make our community less welcoming

## Considered Options

* Contributor Covenant
* IETF BCP 54
* Roll our own
* Combination of Contributor Covenant and IETF BCP 54

## Decision Outcome

We decided to use the Contributor Covenant in conjunction with IETF BCP 54.

BCP 54 defines some specifics on how we should interact with each other which the Contributor Covenant does not.

For example: "We dispute ideas by using reasoned argument rather than through intimidation or personal attack."

Further, should we choose to pursue publication throught the IETF, we would remain compatible in a sense.

## Pros and Cons of the Options <!-- optional -->

### Contributor Covenant

The Contributor Covenant is well established and regarded as a de-facto Code of Conduct option for open source projects.

* Good, because it is well known and recognised as a good and useful Code of Conduct base
* Good, because the familiarty of it from other communities will make people feel more comfortable
* Good, because we do not have unqiue needs as a community
* Good, because we can discuss situations or get help from other projects/orgs (Such as OpenJSF) that use the same Code of Conduct
* Good, because it can be modified / added to, and used as just a base

### BCP 54 / RFC 7154

BCP 54 is an Internet Best Current Practice memo document, used by all new IETF based RFCs and publications.
It outlines behavioural and conduct expectations for individual contributors, including the expectation to actually contribute.

* Good, because we want to operate using general consensus by understanding others
* Good, because it considers the type of work we are producing
* Bad, because it doesn't reflect our organisational situation (We aren't working under an IETF Chair for example)
* Bad, because consequences don't reflect our projects operations

### Roll our own

* Good, because it would be exactly what we think we want
* Bad, because it would likely not be what we actually need
* Bad, because none of our core contributors have experience writing a Code of Conduct

### Combination of Contributor Covenant and IETF BCP 54

* Good, because we can pick the parts from BCP 54 that are applicable to our organization
* Good, because we have clear enforcement for conduct which covers the whole Code of Conduct

## Links

* Discussion: [We should adopt a Code of Conduct. Let's start with Contributor Covenant #2](https://github.com/json-schema-org/community/discussions/2)
* Issue: [Adopt a Code of Conduct for JSON Schema #26](https://github.com/json-schema-org/community/issues/26)
* Pull Request [Add ADR for Code of Conduct](https://github.com/json-schema-org/community/pull/41)
* https://www.contributor-covenant.org
* [BCP54 / RFC7154](https://www.rfc-editor.org/rfc/rfc7154)
