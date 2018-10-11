---
layout: post
title: Python Stats from Jenkins Job Output
comment: true
description: Jenkins jobs could contain some script output that is archived. Using python statistics, I show how you could extract and create summarized results.
image: /images/math.jpg
---

When working with Jenkins, you may be running some jobs that provides some kind of metric. For example, on a website, you may be monitoring the page load time at every hour, the median / 90th percentile CPU load time, etc. If you are running this as a Jenkins job, the output may be stored as a flat file, JSON or some such format. Typically, this is dumped into the `archive` folder. In this blog post, I show how to extract the data and get some meaningful metrics.

## Initial Setup
In this case study, I am using a website performance information. Specifically, I am pulling down the median `page load time` for this blog. The data is pulled down at every hour and stored in a flat file called `summary.json`. The format of the JSON file is as follows:

```javascript
{
    "p98": "2611", 
    "median": "2611", 
    "p95": "2611", 
    "moe": "0.0", 
    "n": "1"
}

For this workflow, we only care about the `median` metric. We could as well swap the metric and compute our data for other percentiles as well.

```
<span style="background:#e3f7fc; border:1px solid #8ed9f6;">I am actually using the <a href="https://developer.akamai.com/api/web_performance/mpulse_query/v2.html">Query API</a> for <a href="https://www.akamai.com/us/en/products/web-performance/mpulse-real-user-monitoring.jsp">mPulse</a>. I'll have a follow up post on the exact work-flow.</span>

This Jenkins job runs every hour. Jenkins then moves this JSON file to a folder like `$JENKINS_PATH/jobs/$JENKINS_PIPELINE/builds/$BUILD_NUMBER/archives/summary.json`. 

## Computing Variance
The next step is to use this `summary.json` that is generated every hour to run a check:
__Is the current performance any different from the past performance?__

In this use case, _past performance_ is determined by three parameters:

- median / mean of the past 20 runs
- _variance_ of the past 20 runs
- _standard deviation_ of the past 20 runs

If you'd like to brush up the stats, please refer to this _MathIsFun_ page on [Standard Deviation, Variance and more](https://www.mathsisfun.com/data/standard-deviation.html).

Here's my algorithm to compute the moving performance benchmark:

* Find all the Jenkins job output folder
* Sort the job folder by their numeric job number. For this I had to adopt the logic dicussed in [Human Sorting](https://nedbatchelder.com/blog/200712/human_sorting.html) blog post by Ned Batchelder.
* Within the archive folder, read the `summary.json` and pull out the value for the node named `median`
* Store this value into an array.
* After completing this process, extract the last 21 values ignore the latest. Basically take an array splice `[-21:1]`.
* Compute the standard deviation for the last 20 values.
* If performance from the latest run is greater than or lesser than 1 standard deviation away, alert this as an outlier.

### Code Snippets

The first part I described earlier is to read the `summary.json` and extract the median metric. We can do this with this kind of code.

```python
jobs_path = $JENKINS_PATH+$JENKINS_PIPELINE+'mPulse/builds'
directories = os.listdir(jobs_path)
directories.sort(key=natural_keys)
#print(directories)
#/var/lib/jenkins
page_load_times = []
for each_directory in directories:
	each_job = jobs_path + '/' + each_directory	
	if os.path.isdir(each_job)==True and os.path.islink(each_job)==False:
		#print(each_directory)
		#check for summary.json
		each_summary_file = each_job + '/archive/summary.json'
		if os.path.isfile(each_summary_file):
			with open(each_summary_file) as f:
				data = json.loads(f.read())
				if 'median' in data and data['median']!=None:
					page_load_times.append(int(data['median']))
```

The next step is to get the last 20 values, without the latest run.

```python					
last_20_values = page_load_times[-21:-1]
```

Next up is to compute the stats.
```python
median = statistics.median(last_20_values)
stddev = statistics.stdev(last_20_values)
variance = statistics.variance(last_20_values)
```

Finally, compare and find anomaly. 
```python
if (last_median < (median - stddev)) or (last_median > (median + stddev)):
	print("***** ALERT ********")
	print("Performance anamoly detected: " + str(last_median) )
	#force a build failure on jenkins
	sys.exit(1)
```

In this case, I am failing the build when the current median is more than 1 standard deviation away. This will give me an easy visual indication of error.

By doing this, you now have an easy to use "Anamoly detection" code! If you want to make it more interesting, we could replace the simple 1 standard deviation rule by more involved computation like the [Nelson's Rule](https://en.wikipedia.org/wiki/Nelson_rules).

Hope this has been fun! I'll have a follow up blog that explains the entire Jenkins pipeline and the demo of mPulse API that was used to extract the raw information.
