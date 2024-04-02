#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CeuCdkWorkshopStack } from '../lib/ceu-cdk-workshop-stack';
import { defaultStackSynthesizer } from '../lib/custom-stack-synthesizer';

const app = new cdk.App();
new CeuCdkWorkshopStack(app, 'CeuCdkWorkshopStack', {
    synthesizer: defaultStackSynthesizer
});
