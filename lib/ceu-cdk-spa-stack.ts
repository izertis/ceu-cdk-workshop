import { CfnOutput, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { BlockPublicAccess, Bucket } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { Role } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';


export class CeuCdkSpaStack extends Stack {

    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const bucket = new Bucket(this, 'SpaBucket', {
            websiteIndexDocument: 'index.html',
            publicReadAccess: true,
            // Only ACLs are blocked: the public bucket policy is still allowed
            blockPublicAccess: BlockPublicAccess.BLOCK_ACLS,
            removalPolicy: RemovalPolicy.DESTROY,
            // No autoDeleteObjects: it creates a custom resource with its own IAM role
        });

        new BucketDeployment(this, 'DeployFiles', {
            sources: [Source.asset('spa')],
            destinationBucket: bucket,
            role: Role.fromRoleName(this, 'Role', 'LabRole')
        });

        new CfnOutput(this, 'SpaUrl', {
            value: bucket.bucketWebsiteUrl,
            description: 'SPA website URL (HTTP)'
        });

    }
}
