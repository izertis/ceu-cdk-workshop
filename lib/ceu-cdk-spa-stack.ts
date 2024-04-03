import { CloudFrontToS3 } from '@aws-solutions-constructs/aws-cloudfront-s3';
import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { Role } from 'aws-cdk-lib/aws-iam';


export class CeuCdkSpaStack extends Stack {

    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const cloudFrontToS3 = new CloudFrontToS3(this, 'CeuCdkSpa', {});

        new BucketDeployment(this, 'DeployFiles', {
            sources: [Source.asset('spa')],
            destinationBucket: cloudFrontToS3.s3Bucket!,
            role: Role.fromRoleName(this, 'Role', 'LabRole')
        });

        new CfnOutput(this, 'CloudFrontUrl', {
            value: cloudFrontToS3.cloudFrontWebDistribution.distributionDomainName,
            description: 'CloudFront Distribution URL'
        });

    }
}
