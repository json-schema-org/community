# Scope of this document

This document is intenteded to describe the process to follow in case of breaking changes other than changes in the Specification. Changes in the Specification are handled by the Specification development process.

# The process for breaking changes

Once the decision to proceed with the breaking change has been made through an ADR, below is a recommend set of actions:

1. **Determine if you need an exception process**. Some features may require extended migration periods to allow customers extended time to fully adopt a new solution.

2. **Craft the message and build the internal enablement document**. This document should include frequently asked questions, timelines, and any other relevant information. The best approach here is to publish a blog post.

3. **Share the message internally**. The best Slack channel for this announcement is #announcements. We will link a github announcement containing:
  - Why we’re deprecating the feature.
  - What is changing.
  - What do you need to do?.
  - When is this change comming into effect? The deprecation timeline.

The announcement should communicate the timeline and the related ADR. This will be shared before sharing it publicly with users (This can be done in the same day).

4. **Share with users at minimum 30-days in advance**. It is recommended to start with a broad social media announcement including a reference to a blog post with the same content than the Github announcement. 


5. **Remind users twice**. 7 days and 1 day before. This is good practice to ensure that users hear the message and are following any migration steps required. The announcement will be shared in social media and Slack #announcements.

6. **Execute the change**.

## Example Content

### Deprecation Blog
Below are some examples of deprecation blog-posts: 
 - https://learn.microsoft.com/en-us/power-platform/important-changes-coming

### Announcement Message

    🚨 JSON Schema Announcement 🚨

    We will be deprecating XXXXXXXXXX on 1 April 2021 to XXXXXXXXXX.

    Read more about the change here 👉 http-blog
    Have questions? Join us on slack!


Below are some examples of deprecation announcements:
 - https://twitter.com/SetProtocol/status/1652034604855967746
 - https://x.com/ShopwareDevs/status/1267813259689639938?s=20
 

### 7- and 1-day Reminder Message

    Hi JSON Schema Community!
    This is a reminder that XXXX will be deprecated in 1 week, on Monday, August 1. You can read more about the change on our blog 👉 http-blog

    Have questions? Join us on slack!

# Recommendations to communicate other critical changes

The process described before will cover breaking changes, however we can use some of the practices described before to better handle other critical changes. For those cases this is the recommended process:

1. **Share the message internally**. The best Slack channel for this announcement is #announcements. We will link a github announcement containing:
  - What is changing.
  - What do you need to do?.
  - When is this change comming into effect? The deprecation timeline.

The announcement should communicate the timeline.

2. **Share with users at minimum 30-days in advance**. We'll use again Slack #announcements and a GitHub announcement. 

3. **Remind users twice**. 7 days and 1 day before. This is good practice to ensure that users hear the message. We'll use again Slack #announcements and a GitHub announcement. 

4. **Execute the change**.