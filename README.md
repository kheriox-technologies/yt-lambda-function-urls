# Create & Invoke Lambda Function URLs

This is a companion repo for my youtube video explaining the process of creating and invoking Lambda Function URLs.

YouTube Video: https://youtu.be/QQsicqtY3J8

## URLs

Multi Env CDK Youtube Video: https://youtu.be/H7Ynxkk_jss

Develop, Test & Deploy TypeScript Lambda Functions: https://youtu.be/DUNEuhOQ1k4

AWS Profile NPM Package: https://www.npmjs.com/package/awsprofile

Git Branch NPM Package: https://www.npmjs.com/package/git-branch

AWS CDK Documentation: https://docs.aws.amazon.com/cdk/api/v2/docs/aws-construct-library.html

## Commands & Code Snippets

### Create Lambda Function URL Using AWS CLI

```
aws lambda create-function-url-config \
    --function-name function-urls-demo-private1-develop \
    --auth-type AWS_IAM \
    --cors '{"AllowCredentials":false,"AllowHeaders":[],"AllowMethods":[],"AllowOrigins":["*"],"ExposeHeaders":[]}'
```

### Code Snippet for Function URL CfnResource in CDK

```
new CfnResource(this, 'private2FunctionUrl', {
  type: 'AWS::Lambda::Url',
  properties: {
    TargetFunctionArn: lambdaFunction.functionArn,
    AuthType: 'AWS_IAM',
    Cors: {
      AllowCredentials: false,
      AllowOrigins: ['*'],
    },
  },
});
```

### Get Lambda Function URL Config Using AWS CLI

```
aws lambda get-function-url-config --function-name <your-function-name>
```
