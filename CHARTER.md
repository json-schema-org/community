# JSON Schema Org Charter
<!-- This document is managed in the json-schema-org/.github GitHub repository. Please do NOT modify this file in another repository as changes may be overridden. -->

<!-- While this document is being written, you can find the discussion to help determine what should be found here at https://github.com/json-schema-org/community/discussions/286 - This comment should be removed before merging -->

## Section 0: Guiding Principles
<!-- https://github.com/json-schema-org/community/discussions/286#discussioncomment-4391241 -->

The JSON Schema project is part of the OpenJS Foundation which operates transparently, openly, collaboratively, and ethically. We strive to be open and transparent as much as is possible, and wish to enable anyone to interact and engage with any area of our work.

Having no structure in place usually leads to one that is informal and undocumented, making it difficult to meet our own expectations of how we wish to operate. As such, we define the following charter which includes aspects of the governance model to which we subscribe and by which we operate.

## Section 1: Scope
<!-- https://github.com/json-schema-org/community/discussions/286#discussioncomment-4391250 -->

JSON Schema aims to enable the confident and reliable use of the JSON data format. It does this primarily by providing specification documents which define a declarative language that allows annotation and validation of JSON documents.
While JSON Schema's primary target is constraint-based data validation, it continues to be used across the whole stack, in different stages of a given project, and for purposes beyond its original design. We aim to enable these additional and emergent use cases.

### 1.1: In-scope (optional)

https://github.com/json-schema-org/community/discussions/286#discussioncomment-4391253

_directions: list or bullet out problem spaces, use cases, repositories_
_or other projects which are included with the work but may not be readily_
_apparent. This may help differentiate the project from other solutions in the_
_space. If you are not using this section, please indicate your intent with the_
_phrase, 'Section Intentionally Left Blank'._

ex. [K8s SIG Architecture Charter](https://github.com/kubernetes/community/blob/HEAD/sig-architecture/charter.md#in-scope)

### 1.2: Out-of-Scope (optional)
<!-- https://github.com/json-schema-org/community/discussions/286#discussioncomment-4391262 -->

Section Intentionally Left Blank

## Section 2: Relationship with OpenJS Foundation CPC.
<!-- https://github.com/json-schema-org/community/discussions/286#discussioncomment-4391266 -->

Most large, complex open source communities have both a business and a technical governance model. Technical leadership for the projects within the OpenJS Foundation is delegated to the projects through their project charters by the OpenJS Cross Project Council (CPC). In the case of the JSON Schema project, it is delegated to the JSON Schema Technical Steering Committee ("TSC").

### 2.1 Other Formal Project Relationships (optional)
<!-- https://github.com/json-schema-org/community/discussions/286#discussioncomment-4391271 -->

Section Intentionally Left Blank

## Section 3: JSON Schema Org Governing Body (TSC)
<!-- https://github.com/json-schema-org/community/discussions/286#discussioncomment-4391284 -->

The TSC is initially established from the observed major contributors who are currently active and in good standing.

There is no maximum TSC membership size. The TSC must have a minimum of four members.

Changes to TSC membership should be posted in the agenda, and may be suggested as any other agenda item.

TSC memberships are not time-limited.

While the project is not looking to obtain "Impact" project status within the OpenJS Foundation, there is no requirement set out to limit the number of TSC members by employer. It is in some cases considered difficult or even unhelpful for the project to limit the number or percentage of TSC members by employer (Especially when an employer has employed individuals already active in the community to work exclusively on the open source project). While at this time there is no limits on TSC membership by employer, the TSC will strive to keep to at least less than 50%, ideally 33% (One third, one in three). The TSC will re-evaluate this specific clause at least every six months, and aim to revise it within one year to meet the "no more than 1/3 employer member affiliation" mandate.

TSC members are expected to regularly participate in TSC activities.

The TSC will meet regularly using virtual conferencing tools. The meeting will be directed by the TSC Chairperson(s). Responsibility for directing individual meetings may be delegated by a TSC Chairperson to any other TSC member. Minutes or an appropriate recording will be taken and made available to the community through accessible public postings.

The TSC may, at its discretion, invite any number of non-voting observers to participate in the public portion of TSC discussions and meetings.

A TSC member may be removed by vote from the TSC if, during a 3-month period, all of the following are true:

- They attend fewer than 25% of the regularly scheduled meetings
- They do not participate in any TSC votes
- They do not provide any form of excuse or no excuse is known for their absence

## Section 4: Roles & Responsibilities
<!-- https://github.com/json-schema-org/community/discussions/286#discussioncomment-4391286 -->

The JSON Schema project is jointly governed by a Technical Steering Committee (TSC) which is responsible for high-level guidance of the project.

The TSC has final authority over this project including:

- Technical direction
- Project governance and process (including this policy)
- Contribution policy
- GitHub repository hosting and administration
- Establishment of and delegation to working groups or teams
- Mediating technical conflicts

### Section 4.1 Project Operations & Management (optional)
<!-- https://github.com/json-schema-org/community/discussions/286#discussioncomment-4391290 -->

The TSC and entire technical community will follow any processes as may be specified by the OpenJS Foundation Board relating to the intake and license compliance review of contributions, including the OpenJS Foundation IP Policy.

### Section 4.2: Decision-making and Voting
<!-- https://github.com/json-schema-org/community/discussions/286#discussioncomment-4391296 -->
Note: See comments found in raw view...
<!--
  There are some changes required for this section.
  See https://github.com/json-schema-org/community/discussions/286#discussioncomment-4886839
 -->

The TSC follows a formal consensus seeking decision making model.

When a TSC member looks for a decision to be made, they must start by assessing if they feel it warrants potentially being a non-public discussion and decision. The TSC member must reach out to the TSC chairs to request a non-public discussion and decision. A discussion and decision will be non-public at the discretion of the TSC chairs. It is expected that decision discussions and voting will only be non-public in rare circumstances.

A decision discussion may be raised by creating an Issue in the community repo.
--? OK with this being in the community repo or should we have a new TSC repo?--
The Issue should include introductory information about the decision that needs to be made. It should follow the provided template, and must have the label tsc-decision.

The TSC member who raised the call for a decision should indicate if they request the short consensus process. If they do, a vote is called to see if the other members agree. If the vote is unanimous, the short consensus model is started, otherwise, the standard consensus process is started.

The short consensus process is designed for small trivial issues where the resolution feels likely obvious, and the member who proposes the agenda item has at least one clear resolution to present. The agenda item owner should present the possible solution they are advocating for, and ask for a test for agreement. If consensus is not clearly reached, the short consensus process is ended and the standard consensus process is started.

The standard consensus process is designed for all non-trivial decisions.
The standard consensus process should progress through the following seven stages.

1. Introduction and clarify the issue
2. Open the discussion - Share needs and perspectives on the issue
3. Explore ideas in a broad discussion
4. Form a proposal
5. Amend the proposal
6. Test for agreement
7. Determine resolution

All decisions that go through the standard consensus process must also have an associated GitHub Issue, which allows those unable to attend meetings to participate.
The Issue may spread into a GitHub Discussion for considering and discussing multiple proposals, allowing for threaded replies. The Discussion and Issue must be clearly linked.
The opening comment of the Issue should be kept up to date as to the status of a decision.

The "Test for agreement" step is not voting, and is in stead asking for "signals", which enable the consensus process to continue.
Voting should be considered a last resort if the consensus process has failed for a particular issue, to enable the project to move forward.

Any call for public TSC votes will be made by creating an Issue in the community repo with the tsc-vote label assigned. The Issue should use the provided template.
--? Should public votes go in the community repo or a new TSC repo?--

Once an Issue gains the label tsc-vote, all members of the TSC will be notified via a specific Slack channel (and by any additional method the TSC deems helpful). The votes will be collected by way of using GitHub Reactions on a specific comment, which must not be the first comment. The first comment must link to the voting comment in the same Issue.
Voting will by default close after 7 days. Any member of the TSC may request a 7 day extension for any reason, moving the closing date back by 7 days. Any member of the TSC may request additional extensions, approved at the discretion of any TSC chair.

For a vote to carry, a quorum of 75% is required by default.

If a TSC member wants to call for a vote that they wish to be non-public, they must do so by contacting the TSC Chairs directly.
At the discretion of the TSC Chairs, a vote may made non-public, and will then be handled by creating a Discussion in the orgs TSC Team page (?-- Or should this be an Issue in a private repo? That might be preferable as they can then be closed--). The topic and nature of non-public votes may remain non-public, including the results.(It is expected that vast majority of votes will be public. Non-public voting should only be used in exceptional circumstances.)

Either initially, or at any point during the process, any TSC member may suggest the issue being discussed is "significant or noteworthy." If there are no objections, the resolution actions for the issue must include the creation of an Any Decision Record (Previously named Architectural Decision Record). The Any Decision Record (ADR) should include as much information as is thought to be useful, following the provided template. The Pull Request for the ADR must be approved by all those who were involved in the decision making process, which must also be documented in the ADR as the "deciders."

(The short consensus process does not require a Decision Record, but the decision should be minuted.)

### Section 4.3: Other Project Roles (optional)

_directions: describe other roles within the project, such as chairperson,_
_tech lead, collaborator, contributor, maintainer, etc. and any responsibilities or_
_rights such role confers. You can also include this information by_
_reference to your governance.md document._
_If you are not using this section, please indicate your intent with the_
_phrase, 'Section Intentionally Left Blank'._

ex. [Node.js TSC Charter](https://github.com/nodejs/TSC/blob/HEAD/TSC-Charter.md#section-8-project-roles)

## Section 5: Definitions (optional)
<!-- https://github.com/json-schema-org/community/discussions/286#discussioncomment-4391301 -->

The JSON Schema project: The project which is housed by the OpenJS Foundation which operates as The JSON Schema Org.

The JSON Schema Org: The people, policies, processes, activities, and artifacts, found within the GitHub json-schema-org.

---

This work is a derivative of the [WebdriverIO Project Governance Model](https://github.com/webdriverio/webdriverio/blob/main/GOVERNANCE.md).

Inspired by https://seedsforchange.org.uk/consensus
Informed by https://www.ic.org/busting-the-myth-that-consensus-with-unanimity-is-good-for-communities/

This work is licensed under a [Creative Commons Attribution-ShareAlike 2.0 UK: England & Wales License](https://creativecommons.org/licenses/by-sa/2.0/uk/).