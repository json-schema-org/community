# Github Action for adding labeled requests/issues to the agenda of the upcoming OCWM

A GitHub Action that search for PRs and issues with an specific label and adds them as agenda items for the upcoming OCWM.

## Prerequisites

The action requires a github auth token to call github API

> Settings > third party accesss >  Personal Access Token > Settings >
> (under) Personal access token (classic) > (select) <'Allow access via
> personal access tokens (classic)'>

The security scopes required in this token are:
<br>
<img width="626" alt="Screenshot 2023-04-04 at 14 38 23" src="https://user-images.githubusercontent.com/40007659/229800559-fd722029-86bf-4ee3-aafe-44386a747f3f.png">

## Setup

Go to Secret and `variables > Actions` and set repository secrets to:
* `AUTH_TOKEN` : `<YOUR_TOKEN>`

Go to Repository variables `variables > Actions` and configure the required repository variables:
* `ORGANISATION` : `<NAME_OF_ORGANISATION>`
* `REPOSITORIES` : `<NAME_OF_REPOSITORY>,<NAME_OF_REPOSITORY>`
* `LABELS`:  `<THE_LABEL_GIVEN_TO_PR_AND_ISSUES>`, `<THE_LABEL_GIVEN_TO_OCWM_ISSUE>`

## Example Workflow Job

```yaml
name: Add labeled PRs to OCWM agenda
on:
  workflow_dispatch:
jobs:
  automated-artifact-buidl:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: ./operations/actions/automated-artifacts-build
      with: 
        AUTH_TOKEN: ${{secrets.AUTH_TOKEN}}
        ORGANISATION: ${{vars.ORGANISATION}}
        REPOSITORIES: ${{vars.REPOSITORIES}}
        LABELS: ${{vars.LABELS}}
```

## Run

This github actions has to be run manually with no input parameters.
