const { DynamoDBClient, UpdateItemCommand } = require('@aws-sdk/client-dynamodb');
const { LambdaClient, InvokeCommand } = require('@aws-sdk/client-lambda');

exports.handler = async function (event) {
  console.log("request:", JSON.stringify(event, undefined, 2));

  // Create AWS SDK clients
  const dynamoClient = new DynamoDBClient({ region: process.env.AWS_REGION });
  const lambdaClient = new LambdaClient({ region: process.env.AWS_REGION });

  try {
    // Update dynamo entry for "path" with hits++
    await dynamoClient.send(new UpdateItemCommand({
      TableName: process.env.HITS_TABLE_NAME,
      Key: { path: { S: event.path } },
      UpdateExpression: 'ADD hits :incr',
      ExpressionAttributeValues: { ':incr': { N: '1' } }
    }));

    // Call downstream function and capture response
    const resp = await lambdaClient.send(new InvokeCommand({
      FunctionName: process.env.DOWNSTREAM_FUNCTION_NAME,
      Payload: JSON.stringify(event)
    }));

    console.log('downstream response:', JSON.stringify(resp, undefined, 2));

    const response = JSON.parse(Buffer.from(resp.Payload).toString());
    console.log('downstream payload:', response);

    // Return response back to upstream caller
    return response;
  } catch (err) {
    console.error('Error:', err);
    throw err;
  }
};
