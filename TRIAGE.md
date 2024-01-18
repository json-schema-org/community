## Introduction

This document will outline the process of triaging GitHub issues. **Triage** is the process of reviewing and labeling incoming issues, identifying any which are critical, and escalating the critical ones.

The core maintainers of each project are responsible for categorizing all incoming issues and delegating any critical or important issue to other maintainers. Currently one maintainer each week is responsible. Besides that part, triage provides an important way to contribute to an open source project.

Triage helps ensure issues resolve quickly by:

- Ensuring the issue's intent and purpose is conveyed precisely. This is necessary because it can be difficult for an issue to explain how an end user experiences a problem and what actions they took.
- Giving a contributor the information they need before they commit to resolving an issue.
- Lowering the issue count by preventing duplicate issues.
- Streamlining the development process by preventing duplicate discussions.

If you don't have the knowledge or time to code, consider helping with triage. The community will thank you for saving them time by spending some of yours.

## GitHub Labels

Labels are assigned based on [Sensible Github Labels](https://github.com/Relequestual/sensible-github-labels).

Type labels help categorize issues based on their scope:
| Label                    | Description                                                               |
| ------------------------ | ------------------------------------------------------------------------- |
| `🐛 Bug`                 | Indicates that the issue is a bug or a software defect.                   |
| `✨ Enhancement`         | Indicates that the issue suggests an improvement or new feature.          |
| `📝 Documentation`       | Indicates improvements or additions to documentation.                     |
| `🎯 Roadmap`             | Indicates epics and tasks related to roadmap items.                       |
| `🏗️ Programs`            | Indicates epics and tasks related to Community programs.                  |
| `👥 Team`                | Indicates issues for team collaboration.                                  |
| `🗃️ Adr-required`        | Indicates issues requiring Architectural Decision Record                  |
| `💬 Question`            | A query or seeking clarification. Probably doesn't need the attention of everyone, just a few to help bring clarification or explain intent.|

Priority labels:
| Label                    | Description                                                               |
| ------------------------ | ------------------------------------------------------------------------- |
| `Priority: Critical`     | This should be dealt with ASAP. Not fixing this issue would be a serious error.|
| `Priority: High`         | After critical issues are fixed, these should be dealt with before any further issues.|
| `Priority: Medium`       | This issue may be useful, and needs some attention.|
| `Priority: Low`          | This issue can probably be picked up by anyone looking to contribute to the project, as an entry fix.|

Status labels:
| Label                    | Description                                                               |
| ------------------------ | ------------------------------------------------------------------------- |
| `Status: Available`      | No one has claimed responsibility for resolving this issue. Generally this will be applied to bugs and enhancement issues, but may be applied to others.|
| `Status: Accepted`       | It's clear what the subject of the issue is about, and what the resolution should be.|
| `Status: Blocked`        | There is another issue that needs to be resolved first, or a specific person is required to comment or reply to progress. There may also be some external blocker.|
| `Status: Completed`      | Nothing further to be done with this issue. Awaiting to be closed by the requestor out of politeness, or can be closed by a project member.|
| `Status: In Progress`    | This issue is being worked on, and has someone assigned.|
| `Status: On Hold`        | Similar to blocked, but is assigned to someone. May also be assigned to someone because of their experience, but it's recognised they are unable to process the issue at this time.|
| `Status: Review Needed`  | The issue has a PR attached to it which needs to be reviewed. Should receive review by others in the community, and at least one member / comitter. Specifics on when merging PRs is allowed is still up for debate.|
| `Status: Revision Needed`| At least two people have seen issues in the PR that makes them uneasy. Submitter of PR needs to revise the PR related to the issue.|
| `Status: Abandoned`      | It's believed that this issue is no longer important to the requestor and no one else has shown an interest in it.|

Other labels:
| Label                    | Description                                                               |
| ------------------------ | ------------------------------------------------------------------------- |
| `good first issue`       | Indicates that the issue is suitable for newcomers to contribute to the project.|
| `duplicate`              | Indicates that is duplicated.                                             |
| `info-required`          | Indicates that the issue lacks sufficient information to be able to act on it right now and requires additional details from the reporter. The maintainer for the area must remove the tag when more info is provided, or close it if it is too old.|

## Triage process

At the end of reading an issue, you should do one of the following:

1. Make sure to search in previous issue to ensure this is not a duplicated issue. If that is the case, mark it as `duplicate` and close it referencing the original issue. If the issue is clear, ensure it has the correct `type` assigned and the status `status: Available`. Also consider if it is a `good first issue`.  

2. Asses the issue priority to determine what functionality is affected and how broken it is and use the priority labels.

3. If the submitter or the reviewer believe the resolution of the Issue is likely to result in a significant or noteworthy change it will be labeled as `adr-required`.

4. Move the issue to the correct repo if required.

5. If it's not clear what the problem or issue is, add a note for the requestor (or occasionally some other user on the thread), and mark it as `info-required`. If a `info-required` issue persists for longer than 2 weeks or so (past a second followup), it's reasonable to `close` the issue using `Status: Abandoned` and encourage the requester to reopen if they have more details.

6. If the request is infeasable, or complete,use `status: Completed` follow up directly in the issue with the information, and `close` the issue.

### References

This process has been inspired by some great processes defined by Open Source projects like:
- [Knative triage process](https://github.com/knative/serving/blob/main/support/TRIAGE.md).
- [Grafana triage process](https://github.com/grafana/faro-web-sdk/blob/main/ISSUE_TRIAGE.md).
- [Wordpress triage process](https://github.com/wordpress-mobile/WordPress-iOS/blob/trunk/docs/issue-triage.md).
- [Sensible Github Labels](https://github.com/Relequestual/sensible-github-labels).