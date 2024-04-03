import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import { Role } from 'aws-cdk-lib/aws-iam';
import { HitCounter } from './hitcounter';

export class CeuCdkWorkshopStack extends Stack {

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_20_X,    // execution environment
      code: lambda.Code.fromAsset('lambda/hello-world'),  // code loaded from "lambda" directory
      handler: 'index.handler',                // file is "hello", function is "handler"
      role: Role.fromRoleName(this, 'Role', 'LabRole'),
    });

    const hitcounter = new HitCounter(this, 'HelloHitCounter', {
      downstream: hello
    });

    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: hitcounter.handler
    });

  }
}
