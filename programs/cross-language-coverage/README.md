# Cross-language Implementation Quality

This directory collects metrics to assist in confirming the presence of (at least one) "high quality" implementations across programming languages.

Absence from this directory is not meant to be a slight against anyone or anyone's work certainly.

The goals are to identify gaps in the ecosystem that might need assistance, and ultimately to help the JSON Schema ecosystem and its users in finding solid, compliant implementations.

The intial collection of TODO programming languages which appears below is simply a starting point, based largely on:

  * the [GitHub popularity list](https://octoverse.github.com/2022/top-programming-languages)
  * the [TIOBE index](https://www.tiobe.com/tiobe-index/)

where it combines languages at the top of the popularity list with those on the rising / fastest growing list.

You can help this exercise!
For each language, we wish to track whether one or more known implementations exist which:

  * Fail less than 2% (around 30) tests from the official JSON Schema test suite
    (This 2% number was chosen simply because it represents the dividing point between one cluster of implementations supported by Bowtie.
     Above this number is a collection of implementations failing larger orders of magnitude of tests).
  * Supports one of the most recent 2 releases of JSON Schema
  * Has had a release of itself in the last 3 years
  * Has had some human-authored commit in the last year
  * Does not have explicit indication, by its maintainer or documentation, that it is not production ready

and then highlight any languages for which this is not the case.

For languages that *do* have one or more such implementations, we then wish to include:

  * the name and link to the implementation
  * the date of its last commit
  * the date of its last release
  * the number of open security vulnerabilities it has, if known
  * the number of open issues it has on its issue tracker
  * the number of open pull requests it has
  * whether it implements some or all of the interfaces specified on our Common Interfaces page (https://json-schema.org/implementers/interfaces),
    and if so, which

A number of the above data points are likely to change often.
We therefore assume only some of the above should be tracked in this directory, and the remainder will be retrieved programmatically if or when this information is used.

An example entry for this directory is:

```yaml
language: Blub
implementations:
  - name: jsonschema-ftw
    url: https://example.com/someone/jsonschema-ftw
    known_to_have:
      many_failing_tests: false
      recent_draft_support: true
      recent_release: true
      recent_commit: true
      non_production_status: false
    metrics:
      # last_commit_date: fetched from GitHub
      # last_release_date: fetched from GitHub
      # open_security_vulnerabilities: fetched from GitHub
      # open_issues: fetched from GitHub
      # open_prs: fetched from GitHub
    known_interfaces:
      instance-validation: https://docs.jsonschema-ftw.com/validation/validate_function
      version-detection: https://docs.jsonschema-ftw.com/validation/version_of_schema
```
                 
Note that *not* all of the above must precisely match in order to be considered for inclusion!
Specifically, an implementation with *no* recent commits is not disqualified from being considered "high quality".
One with a high number of failing tests however, is indeed likely not to meet the definition.
The above is simply meant to track these data points without necessarily imposing all of them as gospel -- users of these libraries should make their own judgements there.

Please pick a language you're familiar with and feel free to fill in such an entry!

Feedback on this format itself is also welcome in an issue!
