---
layout: post
title: Using Python Pandas for Log Analysis
comment: true
description: In this short tutorial I would like to walk through the use of Python Pandas to analyze a CSV log file for offload analysis.
image: /images/binary-2910663_1280.jpg
---

In this short tutorial, I would like to walk through the use of [Python Pandas](https://pandas.pydata.org/) to analyze a CSV log file for offload analysis. This is a typical use case that I face as at [Akamai](https://www.akamai.com/). 

![binary numbers](https://res.cloudinary.com/akshayranganath-dflt/image/upload/f_auto,q_auto/blog/binary%2520numbers.jpg)

## Background

[Python Pandas](https://pandas.pydata.org/) is a library that provides data science capabilities to python. Using this library, you can use data structures like _[DataFrame](http://pandas.pydata.org/pandas-docs/stable/reference/frame.html)_. This data structure allows you to model the data like an in-memory database. By doing so, you will get query-like capabilities over the data set.

## Use Case

Suppose we have a URL report from taken from either Akamai Edge server logs or Akamai Portal report. In this case, I am using the Akamai Portal report. In this work-flow, I am trying to find the top URLs that have a volume offload lesser than 50%. I've attached the code file at the end. I am going to walk through the code line-by-line. Here are the column names within the CSV file for reference.

	URL,OK Volume,Error Volume,Ok Hits,0xx,200,206,2xx,302,304,3xx,404,4xx,Offloaded Hits,Origin Hits,Origin OK Volume (MB),Origin Error Volume (MB)


### Initialize the library

The first step is to initialize the pandas library. In almost all the reference, this library is imported as _pd_. We'll follow the same convention.

```python
import pandas as pd
```

### Read the CSV as a DataFrame

Next step is to read the whole CSV file into a _[DataFrame](https://www.coursera.org/learn/python-data-analysis)_.  Note that this function to read CSV also has options to ignore leading rows, trailing rows, handling missing values and a lot more. I am not using these options for now.

```python
urls_df = pd.read_csv('urls_report.csv')
```

Pandas automatically detects the right data formats for the columns. So the URL is treated as a string and all the other values are considered as floating point values.

### Compute Volume Offload

The default URL report does not have a column for Offload by Volume. So we need to compute this new column.

```python
urls_df['Volume Offload'] = (urls_df['OK Volume']*100) / (urls_df['OK Volume'] + urls_df['Origin OK Volume (MB)'])
```

We are using the columns named _OK Volume_ and _Origin OK Volumn (MB)_ to arrive at the % offloads.

### Filter the data

At this point, we need have the entire data set with the offload % computed. Since we are interested in URLs that have a low offload, we add 2 filters:

- Consider rows having volume offload less than 50% and it should have at least some traffic (we don't want rows having zero traffic)
- We will also remove some known patterns. This is based on the customer context but essentially indicates URLs that can never be cached.

```python
low_offload_urls = urls_df[(urls_df['OK Volume'] > 0) & (urls_df['Volume Offload']<50.0)]
low_offload_urls = low_offload_urls[(~low_offload_urls.URL.str.contains("some-pattern.net")) & (~low_offload_urls.URL.str.contains("/statful-apis/")) ]
```

### Sort Data

At this point, we have the right set of URLs but, it is unsorted. We need the rows to be sorted by URLs that have the most volume and least offload. We can achieve this sorting by columns using the sort command.

```python
low_offload_urls.sort_values(by=['OK Volume','Volume Offload'],inplace=True, ascending=['True','False'])
```

### Print the data

For simplicity, I am just listing the URLs. We can export the result to CSV or excel as well.

First, we project _URL_ (ie, extract just one column) from the dataframe. We then list the URLs with a simple for loop as the projection results in an array.

```python
for each_url in low_offload_urls['URL']:
	print (each_url)
```


Hope you found this useful and get inspired into picking pandas for your analytics as well!


## References

I was able to pick up pandas after going through an excellent course on Coursera titled [Introduction to Data Science in Python](https://www.coursera.org/learn/python-data-analysis). During this course, I realized that pandas has an excellent documentation and stack overflow is the right place to ask questions as the team contributing to pandas is heavily engaged on this platform.

- Pandas Documentation: [http://pandas.pydata.org/pandas-docs/stable/](http://pandas.pydata.org/pandas-docs/stable/)
- Stack Overflow: 

## Full Code

```python
import pandas as pd

urls_df = pd.read_csv('urls_report.csv')

#now convert to right types
urls_df['Volume Offload'] = (urls_df['OK Volume']*100) / (urls_df['OK Volume'] + urls_df['Origin OK Volume (MB)'])

low_offload_urls = urls_df[(urls_df['OK Volume'] > 0) & (urls_df['Volume Offload']<50.0)]
low_offload_urls = low_offload_urls[(~low_offload_urls.URL.str.contains("some-pattern.net")) & (~low_offload_urls.URL.str.contains("stateful-apis")) ]

low_offload_urls.sort_values(by=['OK Volume','Volume Offload'],inplace=True, ascending=['True','False'])

for each_url in low_offload_urls['URL']:
	print (each_url)
	
```
