---
layout: post
title: Pretty Print JSON &#38; Move it to Command Line
comment: true
description: Pretty printing JSON is a common operation. I show how to get this done and set it as a command.
image: https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/command_prompt.png
tag: [json,pretty-print]
---
Pretty printing JSON is a very common operation. In this post, I show how to build the code and make the script an executable as a first-class command.

![Command Prompt](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/command_prompt.png)

## Building Pretty Print program
In python, pretty-printing is very straight forward. It only needs the use of the built-in library __json__ and using the __dumps__ method. Given any data, the following code can format and sort the keys of JSON and print it to console.

```python
import json
json.dumps(json_data, indent=4, sort_keys=True)
```

## Creating work-flow
To this single line, we need to add the argsparse code so that it can take input parameters, and add a help function as well. 

In this code I have added the ability to:

- specify the JSON file that is the input
- specify an optional output file that will contain the formated JSON. By default, we over-write the incoming JSON file.

That's pretty much it. There is not much of error handling since we don't really need a lot of it required.

The code is available here: https://github.com/akshayranganath/python_pretty_printer.

```python
#! /usr/bin/env python
###############
# Author: akshayranganath
# Gihub link: https://github.com/akshayranganath/python_pretty_printer
###############
import json
import argparse

def getFileData(fileName):
	"""
		Open a file, and read the contents. The with..open operation will auto-close the file as well.
	"""
	with open(fileName) as handle:
		data = handle.read()

	return data

def prettyPrint(data, outfile):
	"""
		Pretty print and write the file back to the argument 'outfile'
	"""	
	with open(outfile, "wb") as handle:
		handle.write ( json.dumps(json.loads(data), indent=4, sort_keys=True) )


if __name__=="__main__":
	parser = argparse.ArgumentParser(description='Pretty print JSON')
	parser.add_argument('--file', help="JSON file. If no --outfile is provided, this file will be over-written",required=True )
	parser.add_argument('--outfile', help="Output file to pretty print the JSON", required=False )

	args = parser.parse_args()        
	outfile = args.file if args.outfile is None else args.outfile

	jsondata = getFileData(args.file)
	prettyPrint(jsondata, outfile)
	print 'Pretty printer complete.'
```

## Converting to command line
Converting this script to a command line is a two step process:

- add execute permission
- move code to a folder in the shell PATH

### Add execute permission
To give execute permission to the script, simple run this command:

```bash
chmod +x pretty_printer.py
```

This will provide execute access only for the user running the command. If you want all users on this system to have the execute permission, issue this command instead:
```bash
chmod a+x pretty_printer.py
```

### Making script a command
To make the script work like a regular command, move it to a location that is on the shell's __PATH__ list. On Linux/Mac, you can get this with the __echo__ command

```bash
echo $PATH
```

On Windows system, execute the _set_ command and look for _PATH_.

Based on the output, move the pretty_printer.py to a location specified in the PATH directory list. For Linux/Mac users, you could move it to _/usr/local/bin_. Once done, you can execute this as a built-in command from any folder.

After it is setup correctly, you can execute it like this.
```bash
$ pretty_printer.py --file rules.json
Pretty printer complete.
```
