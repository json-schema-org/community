This folder contains files used for Slack.

Contents:

`greeting`:A text file containing the welcome message sent to users who join our Slack server.

`other channels`: A text file providing information about some of our Slack server's channels.

`greeting.slackworkflow`: A Slack workflow export of the greeting message. It can be re-imported if it's ever lost.Due to specific token and formatting requirements, it's not recommended to maintain the greeting message directly in this file.Consider this file a reference and backup. Use the greeting text file as the source of truth and manually update Slack whenever changes are made.

In the future, we may consider building our own Slack bot, but using Slack Workflows is sufficient for now.

We migrated from Greetbot because the service has been [shutting down](https://medium.com/greetbot-blog/after-5-million-hellos-its-time-to-say-goodbye-8b82e40b5701).