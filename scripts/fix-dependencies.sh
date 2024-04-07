#!/bin/bash

cp assets/3-table-viewer/table-viewer.js node_modules/cdk-dynamo-table-viewer/lib/table-viewer.js || true
cp assets/4-spa/bucket-deployment.js node_modules/aws-cdk-lib/aws-s3-deployment/lib/bucket-deployment.js || true
cp assets/4-spa/source.js node_modules/aws-cdk-lib/aws-s3-deployment/lib/source.js || true
