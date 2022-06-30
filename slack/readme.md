This folder relates to Slack things.

The things:

`greeting`: A text file containing the greeting sent to users who join our Slack server.

`other channels`: A text file containing info on some of our Slack server's channels.

`greeting.slackworkflow`: A workflow exported from Slack for the greeting message. It can be imported should we somehow loose it. Given the format and specific token requirements, it doesn't make sense to maintain the greeting message in this file. Consider it a reference and backup. Maintain in the `greeting` text file and manually update Slack on change.

We could later manage this by creating our own Slack bot, but using Workflows will do for now.

We needed to migrate from Greetbot because they are [shutting down](https://medium.com/greetbot-blog/after-5-million-hellos-its-time-to-say-goodbye-8b82e40b5701).