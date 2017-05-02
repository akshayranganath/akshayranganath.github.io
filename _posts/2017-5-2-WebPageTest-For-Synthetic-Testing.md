---
layout: post
title: Jenkins based synthetic testing using WebPageTest
comment: true
---
Webpagetest is an indispensable tool to performance monitoring of websites. Using the scripted test+REST API and combining with Jenkins, WPT can be converted to a synthetic testing tool to test scenario beyond the scope of tools like Gomez and Catchpoint. 

<img src="https://s-media-cache-ak0.pinimg.com/736x/1f/58/a1/1f58a1a5c9b6f572bad93e86d4376fdc.jpg" height="400px" alt="Mad scientist">

While working on a issue, I faced an situation where we had to develop a testing solution over WPT. Gomez could only run tests from a HAR file. Catchpoint could execute a transaction but was limited to Chrome. Since we had no other tool that could cover all the devices and use cases, we scripted the solution. 

## Background
We had to measure the performance of a particular website by going through a transaction. The challenge was to ensure that the test was run on at least these 3 devices:

- Chrome
- Firefox
- iOS (iPhone)
- an android device

We needed the test to run for over 3 days at a regular interval of half an hour in between the tests. The gap was necessary so that the transaction would not be marked suspicious. Running the test in a recurring fashion was easy to solve. We could either use a cronjob or work with [Jenkins](https://jenkins.io/). In this instance, I picked Jenkins simply because I wanted to learn and it stores a log of the different run that I can leverage.

So here goes the steps I followed to build a synthetic testing solution.

## Build Synthetic Tester

### Step 1: Create scripted WPT Test
WebPageTest offers an ability to run scripted tests. Using scripting, it is possible to design complex work flows like login, shopping cart check-out process or any kind of a transaction. Each step is then measured separately or they can all be combined for a holistic waterfall. For this blog, let's say the steps are:

1. Go to this blog's [home page](akshayranganath.github.io)
2. Click on one of the blog links to land on the blog post page 

WPT script for the transaction would as follows. Here's a [sample report](https://www.webpagetest.org/result/170502_V8_2db53ef7be2df0371e59c5b7c7a9e597/).
```
navigate	https://akshayranganath.github.io/
execAndWait	document.getElementsByTagName('a')[4].click();
```

The waterfall is broken into 2 steps.
![wpt waterfall](/images/wpt_combined_steps.png)


### Step 2: Convert scripted test to ReST API
WPT tests can be run through [REST API](https://sites.google.com/a/webpagetest.org/docs/advanced-features/webpagetest-restful-apis). To run the API, you will require an API key. After signing up on the __[Request API Key](http://www.webpagetest.org/getkey.php)__, you should receive an API key. I had such an API key. Using this, I built a REST API call to run the test.

In this python script, I make 3 calls. I have added a gap of 30s just to demonstrate that it is possible to delay the test runs. This is a bit crude since WPT itself will queue the tests. However, adding the 30s delay will ensure that my tests are _at least_ 30s apart. 

```python
import requests
import datetime
import time

def runTest(location, http2=False):	
	key = ''	
	post_data = "script=navigate%09https%3A%2F%2Fakshayranganath.github.io%2F%0AexecAndWait%09document.getElementsByTagName(%27a%27)%5B4%5D.click()%3B&private=1&f=json&fvonly=1&video=1&medianMetric=SpeedIndex&k=<<API-KEY-HERE>>&location="+location
	if http2 == True:
		post_data += '&cmdline=--disable-http2'

	wpt_url = "https://www.webpagetest.org/runtest.php"

	
	headers = {
		'Content-Lenght': str(len(post_data)),
		'Content-Type': 'application/x-www-form-urlencoded'
	}

	resp = requests.post(wpt_url, post_data, headers=headers)
	
	if resp.status_code == 200 and resp.headers['Content-Type'].find('application/json')>-1:
		print datetime.datetime.now(), location, 
		if 'data' in resp.json():
			print resp.json()['data']['testId'],
		print ''

if __name__ == "__main__" :	
	runTest("Dulles")	
	time.sleep(30)	
	runTest("Dulles:Firefox")			
	#run without H2 enabled
	runTest("Dulles",True)			
```

### Step 3 Scheduling the test run
Once the script was ready, I scheduled it with Jenkins. 
![Jenkins logo](https://wiki.jenkins-ci.org/download/attachments/2916393/logo-title.png?version=1&modificationDate=1302753947000&api=v2)

For this purpose, I created a new build. In the build information, I had these 2 fields:

- *Build*: 

```bash
python <mywptscript>
```

- *Build periodically*: To ensure the script ran every 30 mins, I used the string.

```bash
H/30 * * * *
```

Each time the test ran, it produced an output of this format:

```bash
2017-04-25 02:14:00.670719 Dulles 170425_N4_8322f5c3e0261a24adbaa43d2058db6f 
2017-04-25 02:14:30.906648 Dulles:Firefox 170425_XF_c0ead0e4252518366ebe4c783a2c039c 
2017-04-25 02:14:31.080146 Dulles 170425_JJ_aed5b933e3238907c7835bab79c4721d 
Finished: SUCCESS
```

That's it. The synthetic testing tool was now ready.


## Extracting result
WebpageTest results are available through the URL format https://www.webpagetest.org/jsonResult.php?test=. For example, here's one JSON result URL: [https://www.webpagetest.org/jsonResult.php?test=170502_V8_2db53ef7be2df0371e59c5b7c7a9e597](https://www.webpagetest.org/jsonResult.php?test=170502_V8_2db53ef7be2df0371e59c5b7c7a9e597).

Since the results are accessible with no special authentication, I had to write a script to pull the following from Jenkins:

* Fetch the start and end run number. Basicaly, each number will be one instance of 3 WPT tests being run.
* From the console output of each run, extract the WPT result ID.
* Go to WPT and fetch the result for the test run
* Extract the relevant fields and print it. In my case, I print it in a CSV friendly format.

On Jenkins, the console output for each build has the following URL format

	http(s)://your-jenkins-domain/job/<jon name>/build-number/console

Using the pattern, it was possible to script a code that would pull all the results and then dump in a CSV format. Here's the code I used to achieve this. A lot of code is hard coded but, this is my first attempt :-)

```python
import json
import requests
from bs4 import BeautifulSoup
import time
import sys
import traceback

def print_result(data=None, url=None, protocol='h1'):
	try:
		if data==None:
			with open('result.json') as result_file:
				data = json.loads(result_file.read())		

		browser = data['data']['from']
		nflx_home_page = data['data']['runs']['1']['firstView']['steps'][0]
		#nflx_home_page = data['data']['runs']['1']['firstView']
		
		
		#print json.dumps(nflx_home_page,indent=5)

		metrics = ['base_page_ttfb','firstPaint','render','visualComplete','domInteractive','loadEventStart','fullyLoaded','docTime','SpeedIndex','bytesOut','requestsFull','image_total']
		print url,
		print "\t "+ browser + "\t " + protocol +'\t',
		for metric in metrics:
			print str(nflx_home_page[metric])+'\t',
		print 
		sys.stdout.flush()
		#now try to print the timing information
	except TypeError:
		print 'Unable to parse JSON'
		pass
	except KeyError, e:
		traceback.print_exc()
		#print json.dumps(nflx_home_page, indent=4)
		pass
	except IndexError, e:
		print e
		#print json.dumps(nflx_home_page)
		pass	
	except UnboundLocalError, e:
		print e
		pass

def get_result(data = None):
	if data == None:
		with open('op.json') as result_file:
			data = json.loads(result_file.read())	
	#print url
	try:
		url = data['data']['jsonUrl']
		resp = requests.get(url)
		if resp.status_code==200:
			print_result(resp.json())
	except requests.exceptions.ConnectionError:
		print 'Fetching failed for url: ' + url
		print 'Unable to connect to network. Please check if you are online.'
	except TypeError:
		print 'Unable to parse the results'
		print data.json()


def fetch_result_urls(jenkins_url, start_event=1, end_event=10, wpt_base_url="https://www.webpagetest.org/jsonResult.php?test="):
	for testId in range(start_event,end_event):
		url = jenkins_url + str(testId) + '/console'
		resp = requests.get(url)
		if resp.status_code == 200:
			#fetch the result and then parse the console output
			html = BeautifulSoup(resp.text,"lxml")			
			lines = html.findAll('pre')[0].getText().strip().split('\n')
			result_no = 0			
			for line in lines[len(lines)-4:len(lines)-1]:								
				wpt_result_status_url= wpt_base_url + line.strip().split(' ')[-1]
				resp = requests.get(wpt_result_status_url)
				f = open('resp.json','w')
				f.write(json.dumps(resp.json()))
				f.close()
				if result_no < 2:
					print_result(resp.json(),wpt_result_status_url)
				else:
					print_result(resp.json(),wpt_result_status_url,'h2')
				result_no += 1
			#break
			#sleep for 2 s
			time.sleep(2)

if __name__ == "__main__":
	#get_result()
	# get the results for test runs 1 through 50
	fetch_result_urls('http(s)://your-jenkins-domain/job/<job-name>/',1,50)
	#print_result()
```

The output would be a comma-seperated value of these fields:
	WPT	Browser	Protocol	TTFB	FirstPaint	Render	VisualCompelte	domInteractive	loadEventStart	fullyLoaded	docTime	SpeedIndex	bytesOut	requestFull	image_total

## Conclusion
By running this scripted test, it is possible to build a synthetic testing solution that can be more complex than offered by some commercial solutions. It is also free and can help get the job done when there is a rush to address some specific performance issue.

Even when good synthetic tests are setup, this will still help. If a particular test is slow, it will be easier to go into the corresponding WPT test and look at the resources and see if something had gone wrong. For CDN specific testing, it is possible to add special headers to get back caching status. 

![Using WPT book cover](https://www.safaribooksonline.com/library/cover/9781491902783/)
As everyone keeps saying, with WPT, the possibilities are endless! So this is just a peek at what can be done. If you are not familiar with WPT, do consider the book _[Using WebPageTest](https://www.safaribooksonline.com/library/view/using-webpagetest/9781491902783/). It is a wonderful resource to learn about the multi-faceted functionality offered by this great tool!