# automated-artifacts-build
Artifact to update OCWM labelled Work Meetings with pull requests/issues with label agenda

To run the Workflow Manually :
1. Go to Secret and variables > Actions 
2. Set repository sectrets to 
a.  Name : AUTH_TOKEN 
b.  Value : <YOUR_PAT>

Note : The organisation should grant you the access to be able to make changes in the issue 

Settings > third party accesss >  Personal Access Token > Settings > (under) Personal access token (classic) > (select) <'Allow access via personal access tokens (classic)'>

3. Set Repository variables as 
a.  Name : ORGANISATION
    Value : <NAME_OF_ORGANISATION>
b.  Name: REPOSITORIES
    VALUE: <NAME_OF_REPOSITORY>,<NAME_OF_REPOSITORY>

Note: u can add the repos that u want the issues/PR's to be be appended to the latest Open community work meeting
