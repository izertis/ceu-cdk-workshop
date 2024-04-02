#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CeuCdkWorkshopStack } from '../lib/ceu-cdk-workshop-stack';

const app = new cdk.App();
new CeuCdkWorkshopStack(app, 'CeuCdkWorkshopStack');
