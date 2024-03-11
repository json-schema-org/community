# Supporting information for the governance process

For the governance process of the JSON Schema Project, see the primary [GOVERNANCE.MD](https://github.com/json-schema-org/community/blob/main/GOVERNANCE.md) document.

This document provides supporting resources in acknowledgement that parsing legalistic governance process documents can sometimes take considerable effort, and humans are error prone.

## Workflow for voting

The governance document specifies two ways to make decisions, decision making via consensus and decision making via voting.

This section details the workflow of the voting process.
(The voting process may be different to the voting process found as part of the quick consensus process.)

The following is a diagram generated from a Finite State Machine (FSM) created in Stately.ai.
One output is Mermaid, which is a diagram format rendered by GitHub!
It is not as good as viewing the Finite State Machine on Stately, which I would recommend, but it does give you an idea of what to expect.

When you [view this FSM on Stately](https://stately.ai/registry/editor/embed/c53f8d7e-78fa-420e-bec7-59b8ce2471dd?machineId=140d0a50-b21c-462e-99d5-f13231127cb2), you can "run the simulation" (bottom right button) and step through the process, selecting the next action at each state.

While this isn't a traditional flowchart, I feel the ability to interact with and step through the process outweighs any potential familiarity with flowchart diagrammatic representation.

```mermaid
%% Generated with Stately Studio
stateDiagram-v2
  state "votingMachine" as votingMachine {
    [*] --> votingMachine.Idle
    votingMachine.Idle --> votingMachine.Awaiting_public_vote_setup : Call TSC Vote Public \ndo / Call for TSC vote
    votingMachine.Idle --> votingMachine.Awaiting_approval_for_private_vote : Request private vote \ndo / Contact TSC Chairs
    votingMachine.Awaiting_approval_for_private_vote --> votingMachine.Awaiting_additional_comment_for_counting_votes : Create Issue in private repo\nif [TSC Chair approved]
    votingMachine.Voting_open --> votingMachine.Awaiting_extension_approval : request_extension \ndo / requestExtension
    votingMachine.Voting_open --> votingMachine.VotingClosed : xstate.after(604800000)#votingMachine.Voting open \ndo / calculateQuorum
    votingMachine.Awaiting_extension_approval --> votingMachine.Voting_open : approve_extension \ndo / extendVotingPeriod
    votingMachine.Awaiting_approval_for_private_vote --> votingMachine.Idle : Not approved by chairs
    votingMachine.Awaiting_extension_approval --> votingMachine.Voting_open : Extension not approved
    votingMachine.Awaiting_public_vote_setup --> votingMachine.Awaiting_additional_comment_for_counting_votes : Create Issue in public TSC repo
    votingMachine.Voting_open --> votingMachine.Voting_open : Cast Vote
    votingMachine.Awaiting_additional_comment_for_counting_votes --> votingMachine.Voting_open : Create specific comment for voting on
    state "Idle\n\nThe system is idle, awaiting a call for a public TSC vote or a request for a private vote." as votingMachine.Idle
    state "Awaiting public vote setup" as votingMachine.Awaiting_public_vote_setup
    state "Awaiting approval for private vote\n\nA TSC member requests a private vote by contacting the TSC Chairs. The issue is created in the TSC-private repository." as votingMachine.Awaiting_approval_for_private_vote
    state "Voting open\n\nVoting is open and members can cast their votes using GitHub Reactions on the specified comment." as votingMachine.Voting_open
    state "Awaiting extension approval\n\nA TSC member has requested a 7-day extension to the voting period.\n\nThis will not be unreasonably withheld." as votingMachine.Awaiting_extension_approval
    state "VotingClosed\n\nVoting has closed. The votes are tallied, and the result is determined based on whether quorum was reached." as votingMachine.VotingClosed
    state "Awaiting additional comment for counting votes" as votingMachine.Awaiting_additional_comment_for_counting_votes
  }
```
