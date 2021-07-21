# Use Markdown Architectural Decision Records

* Status: accepted
* Deciders: @relequestual @gregsdennis, @Julian, @jdesrosiers, @karenetheridge
* Date:  2021-06-17

## Context and Problem Statement

We want to record architectural decisions made in this project.
Which format and structure should these records follow?

## Considered Options

* [MADR](https://adr.github.io/madr/) 2.1.2 – The Markdown Architectural Decision Records
* [Michael Nygard's template](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions) – The first incarnation of the term "ADR"
* [Sustainable Architectural Decisions](https://www.infoq.com/articles/sustainable-architectural-design-decisions) – The Y-Statements
* Log4Brains <https://github.com/thomvaill/log4brains>
* Other templates listed at <https://github.com/joelparkerhenderson/architecture_decision_record>
* Formless – No conventions for file format and structure

## Decision Outcome

Chosen option: "MADR 2.1.2", because

* Implicit assumptions should be made explicit.
  Design documentation is important to enable people understanding the decisions later on.
  See also [A rational design process: How and why to fake it](https://doi.org/10.1109/TSE.1986.6312940).
* The MADR format is lean and fits our development style.
* The MADR structure is comprehensible and facilitates usage & maintenance.
* Version 2.1.2 is the latest one available when starting to document ADRs.

We agreed to not require the use of any specific tooling.
Using MADR can be done manually by manually copying the template and manually updating the index.md file. Doing both of these manually is arguably easier, and there are not many well maintained tools.

## Links

* Proposal: [GitHub Discussion - We should adopt Architecture Decision Records #15 ](https://github.com/json-schema-org/community/discussions/15)
* Issue: [Set up Architecture Decision Records #20](https://github.com/json-schema-org/community/issues/20)
