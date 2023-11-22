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

Area labels help categorize issues based on their scope:
| Label                    | Description                                                               |
| ------------------------ | ------------------------------------------------------------------------- |
| `bug`                    | Indicates that the issue is a bug or a software defect.                   |
| `enhancement`            | Indicates that the issue suggests an improvement or new feature.          |
| `documentation`          | Indicates improvements or additions to documentation.                     |
| `roadmap`                | Indicates epics and tasks related to roadmap items.                       |
| `programs`               | Indicates epics and tasks related to Community programs.                  |
| `team`                   | Indicates issues for team collaboration.                                  |
| `adr-required`           | Indicates issues requiring Architectural Decision Record                  |

Severity labels:
| Label                    | Description                                                               |
| ------------------------ | ------------------------------------------------------------------------- |
| `High priority`          | High priority flow or feature is broken/non-functional, crash.            |
| `Critical priority`      | Indicates Critical impact on data or site: data loss (posts, pages, comments), unexpected publishing, security issue.|



Other labels:
| Label                    | Description                                                               |
| ------------------------ | ------------------------------------------------------------------------- |
| `good first issue`       | Indicates that the issue is suitable for newcomers to contribute to the project.|
| `question`               | Indicates that the issue lacks sufficient information to be able to act on it right now and requires additional details from the reporter. The maintainer for the area must remove the tag when more info is provided, or close it if it is too old.|
| `duplicate`              | Indicates that is duplicated.                                             |

## Triage process

At the end of reading an issue, you should do one of the following:

1. Make sure to search in previous issue to ensure this is not a duplicated issue. If that is the case, mark it as `duplicate` and close it referencing the original issue. If the issue is clear, ensure it has the correct `area` assigned. Also consider if it is a `good first issue`.  

2. Asses the issue severity to determine what functionality is affected and how broken it is and use the severity labels just for High and Critical cases.

3. If the submitter or the reviewer believe the resolution of the Issue is likely to result in a significant or noteworthy change it will be labeled as `adr-required`.

4. Move the issue to the correct repo if required.

5. If it's not clear what the problem or issue is, add a note for the requestor (or occasionally some other user on the thread), and mark it as `question`. If a `question` issue persists for longer than a week or so (past a second followup), it's reasonable to `close` the issue and encourage the requester to reopen if they have more details.

6. If the request is infeasable, or complete, follow up directly in the issue with the information, and `close` the issue.

### References

This process has been inspired by some great processes defined by Open Source projects like:
- [Knative triage process](https://github.com/knative/serving/blob/main/support/TRIAGE.md).
- [Grafana triage process](https://github.com/grafana/faro-web-sdk/blob/main/ISSUE_TRIAGE.md).
- [Wordpress triage process](https://github.com/wordpress-mobile/WordPress-iOS/blob/trunk/docs/issue-triage.md).