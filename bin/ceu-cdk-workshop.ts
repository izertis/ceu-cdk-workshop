#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CeuCdkWorkshopStack } from '../lib/ceu-cdk-workshop-stack';
import { defaultStackSynthesizer } from '../lib/custom-stack-synthesizer';
import { CeuCdkSpaStack } from '../lib/ceu-cdk-spa-stack';

const app = new cdk.App();
new CeuCdkWorkshopStack(app, 'CeuCdkWorkshopStack', {
    synthesizer: defaultStackSynthesizer
});

const ceuCdkSpaStack = new CeuCdkSpaStack(app, 'CeuCdkSpaStack', {
    synthesizer: defaultStackSynthesizer
});