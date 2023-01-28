# Extrinsec AppDefender

## AppDefender Demo on AWS Lambda

This repo demonstrates running a sample Lambda function with Extrinsec AppDefender enabled.  For more detailed information on the benefits of AppDefender or how it works, please visit the [main AppDefender repository](https://github.com/extrinsec/appdefender).

## Prerequisites

1. a Github account, to fork this repo so you can run your own Github actions workflows
1. an AWS account with permission to access Lambdas and associated access keys.  Here is a helpful [reference](https://www.serverless.com/framework/docs/providers/aws/guide/credentials) to get you started
1. an Extrinsec license key
1. (Optional) an Extrinsec policy group name
   - defaults to the observeAll.ability public group

## Deploy to AWS Lambda

1. save your AWS access key and the Extrinsec license key as a Github Actions secret on your forked repo
    - `AWS_ACCESS_KEY_ID`
    - `AWS_SECRET_ACCESS_KEY`
    - `ES_LICENSE_KEY`
    - `ES_POLICY_GROUP_NAME`
1. enable and run the Github Actions workflow
1. observe your Lambda logs

### Note

- three functions with runtimes for NodeJS, Python and Ruby are shown here.  Feel free to remove any that you don't use, or change the runtime versions
- only outbound data capturing by AppDefender is shown in these samples.  Feel free to update the functions to see other use cases
