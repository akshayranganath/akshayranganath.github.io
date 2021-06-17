---
layout: post
title: Developing Python Lambda Script Locally using SAM
comment: true
description: In this article, we will develop a Python based lambda function, test it locally and deploy it to AWS using Serverless architecture Model (SAM)
image: https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/pexels-negative-space-169573.jpg
tags: coding
---

While developing Lambda function for AWS, I have found that the process a bit cumbersome. This was until I discovered the power of [Serverless Architecture Model (SAM)](https://aws.amazon.com/serverless/sam/). Using this functionality, the process of creating, testing and deploying a local Lambda function is very efficient. However, I found the documentation is all over the place and I had to make a lot of mistakes before getting it to work. So I thought of sharing the steps so that it may help others.

### Step 1: Hello World

To work with Lambda function locally, you'll need to install AWS CLI, SAM CLI, Docker and plugin for your IDE. 

I use Visual Studio and the article [_Create and Test Python AWS Lambda Function Locally_](https://www.tutorialsbuddy.com/create-and-test-python-aws-lambda-function-locally) was an excellent resource to get me started.

### Step 2: High Level Design

![design](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/pexels-jeshootscom-834892.jpg)

In my use-case, I wanted to use a service from Cloudinary to retrieve a list of assets. Once I had it, I wanted to go over the response to sort the assets and then return a modified object. The end goal was to feed this data to a product gallery widget. Let us see the work-flow in detail.

### Step 3: Code Design

__Getting Asset List__

In my case, I wanted to use a specific service from [Cloudinary](https://cloudinary.com) called [_Client Side Lists_](https://cloudinary.com/documentation/advanced_url_delivery_options#client_side_asset_lists). This API would return all the assets that have a specific tag. For example, if a product has 5 images, I could tag them with the product ID and use this single API call to retrieve the set of images. In my case, I had to make 2 API calls to retrieve the list of images and videos associated with a tag like `food`. Here's a sample request/response.

```
curl -s https://res.cloudinary.com/dbmataac4/image/list/\food.json | jq
{
  "resources": [
    {
      "public_id": "workshop/food/pexels-pixabay-357573",
      "version": 1621879652,
      "format": "jpg",
      "width": 3064,
      "height": 4596,
      "type": "upload",
      "created_at": "2021-05-24T18:07:32Z",
      "context": {
        "custom": {
          "placement": "3"
        }
      }
    },
    ...
```

From the result `resources` array, I wanted to extract the `public_id` and then sort all the objects based on the sorting position identified by `resources[].context.custom.placement` parameter. This part is plain python code using the `requests` library.

__Build and deploy locally__

Once I had a basic code, I wanted to test locally. To do so, I had to run the following commands with Docker running.

1. Build the code using the command `sam build --use-container`. 
2. Start the local Lambda end point using `sam local start-api` or `sam local start-api --debug` to enable more detailed logs.

To access the local service, I just used curl. 

```
curl -vs  http://127.0.0.1:3000/hello
```

__Making the request dynamic__

The next step was to pass the tag value like `food` as a dynamic request parameter. Initially, I thought of implementing the Lambda as a POST request. Clients would submit the request as a JSON body like this `{"tag" : "food"}`. I went down a rabbit hole of trying to make this work with Lambda. 

If you want to use POST, you will need to resolve a lot of CORS issues. (In my case, the lambda function would be called from a HTML page using a Javascript fetch.) Your Lambda function / API Gateway will need to accept and respond properly for pre-flight requests (ie `OPTIONS` method) correctly. There is also a dependency on multiple HTTP headers. I tried a lot of things but, ultimately, I felt it was consuming too much time with not much of value. However, if you'd like to explore using POST, here are some good references.

* [Fetch using Javascript](https://attacomsian.com/blog/using-javascript-fetch-api-to-get-and-post-data)
* [Setting CORS headers with Live HTTP Server](https://willschenk.com/articles/2020/simple_cors_workaround_for_local_development/)
* [Setting CORS locally](https://stackoverflow.com/questions/53312412/enable-cors-when-running-aws-sam-cli-locally)

Ultimately, I decided to use `GET` requests. The tag value would be passed in as `sku=food` name=value parameter. To extract query string in Lambda, I had to write this code.

```
def lambda_handler(event, context):                
..    
    if 'multiValueQueryStringParameters' in event:
        params = event['multiValueQueryStringParameters']
        
        if 'sku' in params:            
            sku = params['sku'][0]            

```

I did a bunch of other stuff but, this essentially completed my Lambda function. Next up was deploying Lambda.

__Deploying local function to AWS__

SAM is ultimately a wrapper to CloudFormation. So a lot of help/tutorials tend to mix SAM commands with CloudFormation. However, I wanted to stick to SAM and keep my tasks simple. With this in mind, I referenced these 2 articles.

* [SAM 101 – Build and Deploy your Lambda Function Using AWS SAM](https://techramblers.blog/2020/04/13/using-sam-aws/)
* [How to Build a Serverless Application Using AWS SAM](https://www.freecodecamp.org/news/how-to-build-a-serverless-application-using-aws-sam/)

The first step was to make sure I had an S3 bucket where SAM could copy my lambda code. Next, I had to package the script. This command just creates a YAML file with the information necessary for SAM to deploy the code. 

```
sam package –s3-bucket <<bucket-name>> –output-template-file template-with-artifacts.yaml –no-verify-ssl
```

After this, I had to run the SAM command to read the configuration, zip and copy my files to S3, use this Zip file and create a lambda function and associate the correct AWS IAM credentials. All of this is accomplished with a single command.

```
sam deploy --template-file <<folder path/template-with-artifacts.yaml>> --stack-name "customSort" --capabilities CAPABILITY_NAMED_IAM
```
In this `template-with-artifacts.yaml` is the file that was created in the previous step. The output is a CloudFormation like progress on various things that SAM does to setup your Lambda function.

Once I had this, my Lambda function was up and running.

Hope this can be of use to you as well!