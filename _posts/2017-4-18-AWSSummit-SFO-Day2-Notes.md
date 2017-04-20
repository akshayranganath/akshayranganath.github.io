---
layout: post
title: AWS Summit - SFO - Day - 2 Notes
comment: true
---

# Keynote featuring Dr. Werner Vogels, CTO, Amazon.com

- 7,500 people in attendence
- $ 14 billion run-rate growing at 14/40% YOY?
- focus on startups
- Twilio literally used every service of AWS.
- new "in the cloud" integrators instead of System Integrators like Cognizant, IBM, Accenture, etc.
- Software vendors - almost everyone is on AWS. 1,200 ISVs
- SaaS integrations - Splunk is a strategic partner
- Yelp - uses Yelp for end to end delivery on timing of the delivery of content.
- Developers are like James Bond and AWS is like the _'Q'_
	- *Supersonic speed*: over 90 services. Mostly on feedback.
		- AWS Codestar: In one environment, IDE, 
		- Create a project, add the roles, build the piepline and connect with IDE. 
	- F1 instances: Field programmable gate array. Real time video processing, financial analytics, big data search and analytics.
	- End goal - make the infrastructure invisible.
	- Managing containers is hard - almost like pre-cloud world.
		- Instead use ECS. (Read blog [Mapbox moves to ECS and you won't believe what happened.](https://www.mapbox.com/blog/switch-to-ecs/))
	- NextDoor - private social network.
		- Entire platform is on AWS.
		- build and deployment time down by 10%
			- used to have weekly releases
			- Red+Black deployments: Every deployment, create a whole set of new EC2 instances. Route a small traffic and based on feedback, switch the traffic and bring down old instances.
			- dropped deployments from 25 mins to 7 mins.
			- 10x improvement in deployment. dozens of deployments a day!
	- Serverless - Lambda
		- Sholastic, Robot, Netflix, Experian - some examples
		- AWS X-Ray: UI based debugging and troubleshooting on flow, components.
		- Amazon DynamoDB: auto scales: Expedia, Lyft
		- Amazon DynamoDB Accelerator (DAX): fully managed, in-memory cache
	- *Flight*
		- Old world database: Expensive, proprietary, lock-in
		- OpenSource Dbs to help.
		- 23,0000 DB migrated from on-prem to cloud
		- Amazon aurora: MySQL compatible. 5x performance. Amazon Aurora PostGreSQL: semantically closer to Oracle.
		- Aurora - used by Expedia. 100 million writes a day, 17,000 writes a second. 17ms read.
	- *X-Ray Vision*
		- Amazon Athena - interactive query service. Amazon EMR - hadoop, spark, presto. Date warehousing - RedShift.
		- Yelp, Hudl, Sholastic, sling.
		- Redshift Spectrum: Directly run data warehouse queries on S3 data. Yelp is using it.
	- *Precognition*
		- Amazon ML (machine learning), 
		- Deep learning AMI
		- Amazon Rekognition used for C-SPAN politician recognition and tagging. 3 weeks saving 9,000 hours!
		- Image Rekogniition - scoring for inappropriate content.
		- Amazon Polly - 47 voices, 24 languages, customize on what is said., whispering voice and speech marks.
		- Amazon Speech recognition - Amazon lex. Lex connected to Lambda. So based on the intent of the voice, this will be used to trigger the Lambda function.
		- Slack uses Cloudfront, Athena, 
		- Amazon lex has been integrated with slack. Conversational bots.
		- Amazon AI - hubspot, duolingo
	- *Immortality*
		- { lot of focus on startups }
			- moving fast, agile, use all of the services
		- Digital Transformation: ticketmaster, PBS, GE

# Fireside Chat featuring Andy Jassy, CEO, Amazon Web Services – RED

- growth of 47%
- Workday - preferred cloud provider.
- private cloud - not common in lot of customers. Hybrid operation is more common.
- [VmWare + AWS collaboration](http://www.businesswire.com/news/home/20161013006574/en/VMware-AWS-Announce-Hybrid-Cloud-Service-%E2%80%9CVMware)
- Multi cloud strategy: Most customers don't do it. 
	- Standardize to lowest common stuff - that's constraining their developers
	- Learning different platforms ==> Isn't this is the same as vendor lock in?
	- Diminish buying power - essentially lose the volume discounts.
- Machine learning / deep learning - 3 levels
	- Level 0: actual mathematicians / expert practitioner (eg: Netflix)
	- Level 1: Providing tools for regular developers.
	- Level 2: Quick tools for everyone.
- Big challenge is getting data from data center into the S3.
- __Connected devices__: Over time servers at offices or homes will be replaced with connected devices. That will be the new hybrid model.
	- Tata motors manages trucks ?
- *Amazon GreenGrass* - software module that can run lambda functions that will partly run in cloud and in the device.
- Focus
	- expansion of geographical foot print: in every tier 1 country
	- DB expansion - Aurora fastest growing service
	- Container and orchestration management
	- Event driven and serverless computing
	- Self service and improving it.
- How do you innovate so quickly?
	- disproportionately hire builders
		- understand that launch is a starting line and not the finish
	- organization
		- small autonomous team
		- technology and product management in the same team
		- teams own the road-map
	- eat your dog food
		- amazon.com itself is using AWS and that gives a large amt of feedback
		- Trying to get away from the institutional ways to say "no".
		- About ability to make fast decisions.
- Organizational culture
	- unusually customer oriented
		- most tech companies are competitor focused.
	- we are pioneers
		- most competitors are losing their drive to innovate
	- unusually long term oriented
	- trusted advisor capabilities in the customer relationship team
		- we'll reach out to tell customers to tell you're not using everything. So save the money. Saved $350 mil last 2 yrs to customers.
- Quirky parts of culture
	- ban powerpoints at meetings
		- have conversation. 6 page narrative.
		- read this at a meeting and then start the discussion.
	- a press release, FAQ and documentation is first created before a product is even written.
		- forces to think on use and reason for its adoption.
	- unusually truth seeking 
		- disagree and commit
- Learning
	- don't fight gravity. If you know that the inevitable will happen, then you should cannibalize before your competitor does it.
		- explained within the context of whether Amazon should support 3rd party suppliers and Amazon's jump to support them before eBay and others could kill them.

# Deep Dive on AWS IoT

- MQTT is the protocol used, WebSockets is what the phones use.
- Use a shadow device for sending the control commands. This will ensure that the device gets the commands in right order.
- [Amazon Cognito](https://aws.amazon.com/cognito/) for authentication of devices.


