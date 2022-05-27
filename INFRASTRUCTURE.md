# Our Infrastructure

First, let's address some details of this document.

<details>
  <summary>What, why, who...</summary>

  ## What?

  This document outlines the various systems that JSON Schema the organisation uses and maintains.
  This does not include social media profiles.

  ## Why?

  It's part of the required tasks to be completed by the OpenJS Foundation, forming an item of the [onboarding checklist](https://github.com/openjs-foundation/cross-project-council/blob/main/PROJECT_PROGRESSION.md#onboaghrding-checklist).
  It's also probably good practice.

  This enables members of the JSON Schema team, and the OpenJS Foundation, to have oversight and management of such infrastructure should it be required.

  ## Who?

  This was mainly a list created by Ben Hutton (@relequestual).
  Others are free to amend and update this (via Pull Requests) as is required.

</details>

JSON Schema mostly operates on GitHub and Slack.

Our GitHub organisation is located at https://github.com/orgs/json-schema-org.

Our Slack server is located at https://json-schema.slack.com.
(Anyone can join using https://json-schema.org/slack.)

The JSON Schema organisation maintains ONE domain name: json-schema.org.

The domain name is registered and paid for by the OpenJS Foundation.

The domain name defers its name servers to CloudFlare.
The DNS mostly points to GitHub.

The website is split into several applications for historical reasons.

The main website is run through GitHub Pages. The source code is located at https://github.com/json-schema-org/json-schema-org.github.io.

The human friendly documentation for the specification, dubbed "Understanding JSON Schema", is located at https://json-schema.org/understanding-json-schema.
The source for this project is located at https://github.com/json-schema-org/understanding-json-schema.

Both of these sites are deployed by GitHub onto GitHub Pages.

The JSON Schema blog is located at https://json-schema.org/blog.
The source code is located at https://github.com/json-schema-org/blog.

The blog is deployed on CloudFlare Pages.
The blog URL is redirected using CloudFlare workers.

The CloudFlare pages name is `json-schema-blog`.
The redirection worker is called `blogredirect`.

(It may now be possible to do the redirect using URL rewriting, but it was broken at the time, and their community support suggested using Workers.)

The main site and the understanding site get deploy previews via Netlify.
Unfortunately, CloudFlare pages does not offer deployment previews on Pull Requests where the Pull Request comes from a fork of the project (while netlify does, and for free).

The Slack server has a number of bots which feed data into specific channels.

The bot which feeds tweets containing JSON Schema from Twitter to the #twitter-mentions channel was created by [Mike Ralphson](https://twitter.com/PermittedSoc). We have no access to it, and it currently (as of 2022-05-26) needs to be replaced as it's acting up.

The bot for #stack-overflow runs from If This Then That under @relequestual 's account. It should probably be migrated to Zapier.

The #github channel bot uses the official Github Slack app, and runs all Github events from all of our repositories, apart from GitHub Discussions.

The #ghd-community channel bot uses Zapier to process webhooks for our Community repo's GitHub Discussions, and relay to Slack.
The Zapier account is owned and paid for by Postman. If this ever might become a problem, we should move to our own licence.
At the time, there was no official app integration.


If you believe something is missing from this documentation, please file an issue.