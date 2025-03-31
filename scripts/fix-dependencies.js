const fs = require('fs');
const path = require('path');

function copyFile(src, dest) {
    try {
        fs.copyFileSync(src, dest);
        console.log(`Copied ${src} to ${dest}`);
    } catch (err) {
        console.error(`Failed to copy ${src} to ${dest}: ${err.message}`);
    }
}

const filesToCopy = [
    {
        src: path.join('assets', '3-table-viewer', 'table-viewer.js'),
        dest: path.join('node_modules', 'cdk-dynamo-table-viewer', 'lib', 'table-viewer.js'),
    },
    {
        src: path.join('assets', '4-spa', 'bucket-deployment.js'),
        dest: path.join('node_modules', 'aws-cdk-lib', 'aws-s3-deployment', 'lib', 'bucket-deployment.js'),
    },
    {
        src: path.join('assets', '4-spa', 'source.js'),
        dest: path.join('node_modules', 'aws-cdk-lib', 'aws-s3-deployment', 'lib', 'source.js'),
    },
];

filesToCopy.forEach(({ src, dest }) => copyFile(src, dest));
