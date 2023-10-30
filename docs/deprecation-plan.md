# The process of deprecating a feature

Once the decision to deprecate a feature has been made through an ADR , below is a recommend set of actions:

1. **Determine if you need an exception process**. Some features may require extended migration periods to allow customers extended time to fully adopt a new solution.

2. **Craft the message & build the internal enablement document**. This document should include frequently asked questions, timelines, and any other relevant information.

3. **Share the message internally**. The best Slack channel for this announcement is #announcements. The announcement should communicate the timeline and the related ADR.

4. **Share with users at minimum 30-days in advance**. It is recommended to start with a broad social media announcement including a blog post. The blog post should contain:
  - Why we’re deprecating the feature.
  - What is changing.
  - What do you need to do?.
  - When is this change comming into effect? The deprecation timeline.


5. **Remind users twice**. 7 days and 1 day before. This is good practice to ensure that users hear the message and are following any migration steps required. The announcement will be shared in social media and Slack #announcements.

6. **Execute the deprecation**.

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

