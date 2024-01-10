# Our Infrastructure

First, let's address some details of this document.

## What?

This document outlines the various systems that JSON Schema the organisation uses and maintains.
This does not include social media profiles.

## Why?

It's part of the required tasks to be completed by the OpenJS Foundation, forming an item of the [onboarding checklist](https://github.com/openjs-foundation/cross-project-council/blob/main/PROJECT_PROGRESSION.md#onboarding-checklist).
It's also probably good practice.

This enables members of the JSON Schema team, and the OpenJS Foundation, to have oversight and management of such infrastructure should it be required.

## Who?

This was mainly a list created by Ben Hutton (@relequestual).
Others are free to amend and update this (via Pull Requests) as is required.

## Code and Communication
JSON Schema mostly operates on GitHub and Slack.

* Our GitHub organisation is located at https://github.com/orgs/json-schema-org.
* Our Slack server is located at https://json-schema.slack.com.
(Anyone can join using https://json-schema.org/slack.)

## Domain and hosting
The JSON Schema organisation maintains ONE domain name: json-schema.org.

The domain name is registered and paid for by the OpenJS Foundation.

The domain name defers its name servers to CloudFlare.
The DNS mostly points to GitHub.

## Website
The website is split into several applications for historical reasons.

The main website is run through Cloudflare Pages. The source code is located at https://github.com/json-schema-org/website.


A key set of resources hosted by the site are the JSON Schema meta-schemas, which are used to indicate which schemas are themselves valid for each version of the specification.
These resources are potentially heavily used or referred to by consumers of JSON Schema.
Links to these resources can be found at https://json-schema.org/specification.html for the latest version of JSON Schema, and at https://json-schema.org/specification-links.html for older versions.
The working location for these resources is in the specification repository at https://github.com/json-schema-org/json-schema-spec/, and they are then included into the aforementioned website repository for publishing using `git submodule`.

## Bots
The Slack server has a number of bots which feed data into specific channels.

The bot which feeds tweets containing JSON Schema from Twitter to the #twitter-mentions is now inactive after the changes in the Twitter API. The bot was created by [Mike Ralphson](https://twitter.com/PermittedSoc). We have no access to it.

The bot for #stack-overflow runs from If This Then That under @relequestual 's account. It should probably be migrated to Zapier.

The bot for #reddit-mentions runs from Zapier under @benjagm 's account. 

The #github channel bot uses the official Github Slack app, and runs all Github events from all of our repositories, apart from GitHub Discussions.

The #ghd-community channel bot uses Zapier to process webhooks for our Community repo's GitHub Discussions, and relay to Slack.
The Zapier account is owned and paid for by Postman. If this ever might become a problem, we should move to our own licence.
At the time, there was no official app integration.

## Metrics

The website metrics previously available in Google Analytics are now in Plausible.

For the Community metrics we are using Common Room and Orbit.

## Email

We are using mailfence to manage the email accounts associated to json-schema.org.


If you believe something is missing from this documentation, [please file an issue](https://github.com/json-schema-org/community/issues/new?assignees=&labels=&template=action_item.md).
