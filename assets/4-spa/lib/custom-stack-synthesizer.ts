import { DefaultStackSynthesizer } from 'aws-cdk-lib';

export const defaultStackSynthesizer = new DefaultStackSynthesizer({
    // Name of the S3 bucket for file assets
    fileAssetsBucketName: 'cdk-${Qualifier}-assets-${AWS::AccountId}-${AWS::Region}',
    bucketPrefix: '',

    // Name of the ECR repository for Docker image assets
    imageAssetsRepositoryName: 'cdk-${Qualifier}-container-assets-${AWS::AccountId}-${AWS::Region}',

    // ARN of the role assumed by the CLI and Pipeline to deploy here
    deployRoleArn: 'arn:aws:iam::${AWS::AccountId}:role/LabRole',
    deployRoleExternalId: '',

    // ARN of the role used for file asset publishing (assumed from the deploy role)
    fileAssetPublishingRoleArn: 'arn:aws:iam::${AWS::AccountId}:role/LabRole',
    fileAssetPublishingExternalId: '',

    // ARN of the role used for Docker asset publishing (assumed from the deploy role)
    imageAssetPublishingRoleArn: 'arn:aws:iam::${AWS::AccountId}:role/LabRole',
    imageAssetPublishingExternalId: '',

    // ARN of the role passed to CloudFormation to execute the deployments
    cloudFormationExecutionRole: 'arn:aws:iam::${AWS::AccountId}:role/LabRole',

    // ARN of the role used to look up context information in an environment
    lookupRoleArn: 'arn:aws:iam::${AWS::AccountId}:role/LabRole',
    lookupRoleExternalId: '',

    // Name of the SSM parameter which describes the bootstrap stack version number
    bootstrapStackVersionSsmParameter: '/cdk-bootstrap/${Qualifier}/version',

    // Add a rule to every template which verifies the required bootstrap stack version
    generateBootstrapVersionRule: true,

    useLookupRoleForStackOperations: true,
});