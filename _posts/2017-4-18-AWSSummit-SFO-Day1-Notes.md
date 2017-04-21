---
layout: post
title: AWS Summit - SFO - Day - 1 Notes
comment: true
---
AWS organized the [AWS Summit at San Francisco](https://aws.amazon.com/summits/san-francisco/) on 18th and 19th of April. It was an eye-opener for me on the devOps progress and the adoption of cloud based work-flows. I had take some notes and thought of sharing it. This is the notes from Day 1 of the event. Hope it is of use to you!

![Amazon Summit SFO logo](https://d0.awsstatic.com/events/Summits/AWS_Summit_Logo_RGB_WhiteAWS_Horiz_CityLeft_SanFrancisco.png)

This is part 1 of the blog post. For notes from Day 2, please see the post [AWS Summit - SFO - Day - 2 Notes](https://akshayranganath.github.io/AWSSummit-SFO-Day2-Notes/).

## The State of Serverless Computing


### Serverless Computing 

Built on function as a service. Building blocks are container, function as a service (FAAS) and then serverless computing

Use cases:

* Static and dynamic web apps
* Mobile apps
* IoT
* Big data
* Chatbots
* Media & log processing


>Value prop for Lambda: <br />** Pay only when the function runs, scaling is automated. **. <br />Next step evolution of using AWS.


>[Occupy the cloud - Distributed Computing for the 99%](https://arxiv.org/pdf/1702.04024.pdf) talks about how AWS is bringing Cloud Computing to everyone.

* 600 concurrent functions
* Expedia 1.2 billion lambda requests per month as part of CI/CD pipeline

#### Autodesk case study - get the PPT
very good stats on how devOps can save time and money

* SAM - serverless CI/CD

	Code -> AWS Codecommit -> AWS Codebuild -> AWS Codebuild -> AWS Cloudformation
	Code -> Commit -> Build-> Test ->Deploy to prod
![Code deploy pipeline](http://d0.awsstatic.com/product-marketing/CodeBuild/CodeBuildCodePipeline2.png)

AWS Cloud X-Ray: debugging tool

----

## Building Serverless Web Applications
	@leozh - Solutions Architect 

Basic Lambda concepts

* no servers to provision or manage - C#, NodeJs, Python, Java
* scales with usage
* never pay for idle
* availability and fault tolerance built in

Core concepts:

* Event driven
* Continuous scaling
* pay by usage

*Use case*: Create a thumbnail of a just updated image. Github example here: [https://github.com/awslabs/serverless-image-resizing](https://github.com/awslabs/serverless-image-resizing).

New features:

- Allows for creating dev/prod - by pulling in the latest
- Key-value pairs (SAM)

#### Amazon API Gateway

* authenticate and authorize
	* sigv4, oAuth, Amazon Cognito, custom auth ==> per method authorization
* unify multiple microservices
* DDoS protection / Scaling: Use cloudfront on top if API gateway, tie WAF rules, use Shield to protect origin
* Stage variables have environment variables (like prod, dev). based on it, point to beta or prod end point.

#### Design patterns

* _Monolithic_: don't use!
	* One large lambda function. Easier to comprehend.
	* Single handler - so single one for GET/PUT/POST, etc.
* _Microservices_: provides a lot of freedom to make changes and impact small sections.
	* Each method has one lambda function. one each for GET, PUT, POST
	* Easier to code and focus on one smaller component. Focus shifts to integration testing.
	* Use X-ray for debug, Use SAM to manage Lambda functions

<< get image from PPT >>

SAM is an extension of CloudFormation. _CloudFormation_ is basically __infrastructure as code__. Supports JSON or YAML.

* Claudia.js - nodejs for this purpose
* Chalice - python 

Code example at [Github](https://github.com/awslabs).	

Amazon has also built a pipeline automation for CI/CD. Here's the refarch: [https://github.com/awslabs/ecs-refarch-continuous-deployment](https://github.com/awslabs/ecs-refarch-continuous-deployment).

------

## Serverless Orghestration with AWS Step functions
Ability to connect multiple functions into a work-flow using GUI. Essentially, chaining Lambda or any kind of function to follow a strict logical ordering.

> To learn about how to build app in the modern world, read this: [https://12factor.net/](https://12factor.net/).

Coordination must have

* scales out
* doesn't lose state
* deals with errors/timeouts
* easy to build out.

** AWS Step function - State machine as a service **

* Define in JSON
* Visualize in console
* monitor executions

#### Sample state machine
![State machine](https://github.com/awslabs/lambda-refarch-imagerecognition/raw/master/images/step-function-execution.png)

7 states for lambda step function
	Task, choice, parallel, wait, fail, succeed, pass

Once the state is executing, you can go back and see the execution in UI. It will show the specific inputs, the states reached and final output.

	DevOps Best Practice
	If you build a JSON spec, then:
	1. publish the spec
	2. provide examples
	3. create a LINT and publish that as well.

----

## Building CI/CD Pipelines for Serverless Applications

Serverless computing space: [https://aws.amazon.com/serverless/](https://aws.amazon.com/serverless/)

Typical work-flow:

	Event Source -> Function (lambda) -> Services (anything)

Lambda supported on

- Node.js
- Python
- Java
- C#

e.g.: deploy code through slack or even Alexa

* _Cont Integration_ - anytime code is in main-line, it will built and it is valid
* _Cont Delivery_ - automatically build, test and after a manual approval, push to prod.
* _Cont Deployment_ - automatically build, test and push to prod - no manual gating.

**Amazon Cloudformation** is a good way to implement CI/CD. However, it can get verbose. An alternative is to use __Serverless Application Model (SAM)__.

* Have different accounts for Dev, Stage, and Prod 
* Having a single account with different stacks is ok for smaller team.
For more details, refer [AWS Organizations](https://aws.amazon.com/organizations/). Basically, control access to AWS environments by policy rather than trying to handle everything manually.

#### AWS Codebuild
Can be used as a managed build service. Pay by minute. Can provide docker images for build.
*cheaper than using an EC2 based jenkins or build pipeline since it is charged by hour.*

#### Localstack
Altassian has developed a [local EC2](https://github.com/atlassian/localstack) stack. Use it to test locally before moving to EC2.
*This is cool!*

----

## Deep Dive on CICD and Docker
- John Pignata - Startup solutions architect

#### CI/CD Objective
	How can we quickly and reliably deliver good ideas to our customers?

<< Learnings slide, CI/CD slide - get it when published. >>

ECR - docker repository in CI/CD scenario.

#### AWS CodeBuild
Build and test projects. How does the testing work? 4 phases:

- _install:_ get the right test libraries, etc
- _pre-build:_ log into the right AWS ECR etc
- _build:_ run the actual build process, SASS
- _post_build:_ build the final jar, clear up temp files, push to registry

##### Tip!
	
	Tag the code image with something that links back to development. Avoid using simplistic names like "LATEST", "PROD".

#### Amazon EC2 Container Service (Amazon ECS)
Managed service for setting up docker images.

- Able to specify the min health required, maximum health. ECS will straddle the deployment based on these numbers.
- Can even perform canary deploy
- Blue/Green deployment: Having 2 different app versions (blue / green). Basically launch for short time, measure and stabilize or revert back.
	- Common way is with DNS swap.
	- New feature: Host based routing.

#### AWS CodePipeline
Provides ability to model and implement the full CI/CD pipeline. It can talk to external tools and can even integrate with Lambda functions.
{Try this for Macys maybe?}

Reference architecture: [https://github.com/awslabs/ecs-refarch-continuous-deployment](https://github.com/awslabs/ecs-refarch-continuous-deployment)

![CodePipeline](https://github.com/awslabs/ecs-refarch-continuous-deployment/raw/master/images/architecture.png)
-----

## Deep Dive: Log analytics with Amazon Elasticsearch Service

* Use [ElasticSearch](https://www.elastic.co/products/elasticsearch) for digesting log.
* Use [Kibana](https://www.elastic.co/products/kibana) for visualizing data.

Amazon Elasticsearch is a managed service around Elastic Search.
{Used by Expedia}

Use "Data Pattern" slide for sizing of the EL cluster.

__Usage__
	data source -> Amazon Kinesis Firehose -> Amazon Elasticsearch service -> Kibana

> Take the best practice slide

#### Kinesis Firehose
send streaming data between applications.

- serverless
- error handling
- s3 backup


Sign the requests on the fly using a local proxy
	aws-es-kibana
