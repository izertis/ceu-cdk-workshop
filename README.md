# CEU Workshop

## Requirements

* Node
* AWS CLI configured
* CDK CLI installed

## Deploy instructions:

* Install dependencies: `npm ci`
* CDK Bootstrap: `cdk bootstrap --template bootstrap-template.yml --profile PROFILE_NAME`
* Copy the workshop step assets to root folder (for example: `cp -r assets/2-hitcounter/* .`)
* Deploy the changes: `cdk deploy --all --require-approval never --role-arn arn:aws:iam::AWS_ACCOUNT:role/LabRole --profile PROFILE_NAME`

`PROFILE_NAME` is the name of the AWS CLI profile name
`AWS_ACCOUNT` is the ID of the AWS student account

## Workshop steps:
1. **Hello world**: Deploys an example API that returns the requested endpoint.
2. **Hitcounter**: Deploys a custom Construct that counts the API endpoint calls and stores them in a DynamoDB table.
3. **Table viewer**: Deploys a third-party Construct called [TableViewer](https://github.com/cdklabs/cdk-dynamo-table-viewer). This construct deploys a function that returns an HTML document that represents a DynamoDB Table.
4. **SPA**: Deploys a second stack that contains a SPA.