# Guidelines for contributing to the JSON Schema Community

We invite you to join us working on JSON Schema.

The fastest way to get involved and become active in the community is to join the `#contribute` channel in our Slack server at https://json-schema.org/slack.

If you have suggestions on how to improve our community, please do check out our [Community Discussions](https://github.com/json-schema-org/community/discussions), and start a new discussion.

### Types of contributions

JSON Schema is a community that lives on its contributors. As we grow, we need more people to help others. You can contribute in many ways, either in the specification development or in the wider ecosystem.

Here are some areas where you can contribute:
 * 🌱 [Specification development](https://github.com/json-schema-org/json-schema-spec)
 * 🐞 Reporting Bugs
 * 💡 Issues and feature requests
 * 🧐 Reviewing PRs
 * ❓ Answer questions
 * 🙏 Join discussions and provide feedback
 * 🛠️ [Add new JSON Schema tooling](https://github.com/json-schema-org/website/blob/main/CONTRIBUTING.md#%EF%B8%8F-add-a-new-implementation)
 * ✍️ [Publish a blog post](https://github.com/json-schema-org/website/blob/main/CONTRIBUTING.md#%EF%B8%8F-publish-a-blog-post)
 * 📈 [Publish a case study](https://github.com/json-schema-org/website/blob/main/CONTRIBUTING.md#-publish-a-case-study)
 * 📋 [Improving the Documentation](https://github.com/json-schema-org/website/blob/main/CONTRIBUTING.md#-improving-the-documentation)
 * 🏗 [Website development](https://github.com/json-schema-org/website/blob/main/CONTRIBUTING.md#-improving-the-website)
 * 🎨 [Improving the Design](https://github.com/json-schema-org/website/blob/main/CONTRIBUTING.md#-improving-the-design)
 * 😍 [Collaborating with Community Management tasks](#community-management-tasks)
 * 🚀 [Adding a new Adopter](https://github.com/json-schema-org/community/blob/main/ADOPTERS.md)

#### Community management tasks

To get involved in the Community management tasks, please join the [`#community-mgmt` slack channel](https://json-schema.slack.com/archives/C0209BTU2UQ).

### Key "Architectural" decisions

In most repositories, we would like to utilise [Architectural Decision Records (ADRs)](https://adr.github.io/) to help us work effectively.

[We agreed](https://github.com/json-schema-org/community/blob/main/docs/adr/2021-05-17-use-markdown-architectural-decision-records.md) to do this and documented this decision as an ADR: ([Community PR 21](https://github.com/json-schema-org/community/pull/21)).

ADRs are a lightweight way to record and track significant or noteworthy decisions and changes made in a project, including the considerations and people that lead to the decision.

When a new Issue or Pull Request is created, submitters and maintainers should consider if the proposal or proposed change is significant or noteworthy. The submitter may assert this, however deciding if something is significant or noteworthy shall be at the discretion of the maintainer/s at hand. One maintainers preference to consider the change significant or noteworthy is sufficient to outweigh preference against, airing on the side of caution.

In the situation where an ADR may seem not to have an associated change at the same time (within the same Pull Request), we should consider if any documentation should be updated as a result.

In some situaitions, it may be appropriate to produce an ADR retrospectivly, in order to document recent decisions made before the use of ADRs was established. This will be at the discretion of the maintainers.

### Issues

When creating an Issue, the submitter should assert if they believe the resolution of the Issue is likely to result in a significant or noteworthy change. This can only be expected for repositories that use ADRs and have appropriate issue templates in place.

A maintainer may add a label `adr-required` to the issue.

### Pull Requests

When creating a Pull Request, the submitter should assert if they believe merging the PR will need an ADR or not. If the submitter is not a maintainer, a maintainer will confirm if one is required before merging by adding the appropriate label, either `adr-required` or `adr-not-required`.

If a Pull Request has an issue associated with it (through the associated issue GitHub feature), it should inherit present `adr-required` labels.

Once an ADR is part of a pull request which is labelled with `adr-required`, the label `adr-included` can be added.

(It would be great if some parts of this could be automated. Specification and full workflow required.)


The process is designed to be lightweight, and a template is provided for ease of use.

### Triage

Please check the [triage process](https://github.com/json-schema-org/.github/blob/main/TRIAGE.md) to learn how we review and label incoming issues . 

### Feedback

Feedback on this process can be made informally through our [Slack server](https://json-schema.org/slack) and formally using our [Community Discussions](https://github.com/json-schema-org/community/discussions).
