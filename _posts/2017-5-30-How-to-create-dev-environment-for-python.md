---
layout: post
title: DevOps &#58; Building a Python virtual environment
comment: true
description: When embarking on a devOps journey, getting a consistent development environment is the key. In this post, I show how to setup a virtual environment and install the correct libraries necessary for a project.
---

When embarking on a devOps journey, getting a consistent development environment is the key. In this post, I show how to setup a virtual environment and install the correct libraries necessary for a project.

![nut ball and bearing](/images/nut-2051596_640.jpg)

## Virtual Environments: VirtualEnv

>A Virtual Environment is a tool to keep the dependencies required by different projects in separate places, by creating virtual Python environments for them.<br />
Source: https://python-guide-pt-br.readthedocs.io/en/latest/dev/virtualenvs/

The tool in python is called __virtualenv__.

To work with isolated environments, you'd need to follow these steps:

- **Initial Setup**
	- Install the virtualenv tool.
	- Initialize your environment
	- Install dependencies
	- Create the **requirements.txt** to remember the dependencies
	- Check-in code and the requirements.txt file to code repository
- **Developer installs**
	- Get the latest code
	- Install virtual environment
	- Install dependencies
	- Start working on code


Let's look into the steps in detail.

## Initial Setup

Before commencing the project, one of the developers can follow these steps to help get the team going. The first step is to install the *virtualenv* tool.
	
	pip install virtualenv

The next step is to initialize virtual environment on the project folder. 
	
	virtualenv myproject

This step will install python, pip and basic libraries within the project folder, _myproject_. After version 1.7 of virtualenv, it will use the option __--no-site-packages__ by default. It means that virtualenv will NOT install the libraries available globally. This will help ensure that the project package will contain the bare minimum libraries and the libraries installed for the specific project.

After this, you will need to activate the virtual environment to start working on the project.

	source myproject/venv/bin/activate

Once you do this, your prompt will change to show that you are now working in a virtual environment. It should look something like this.

	(venv) user@machine $	

Now, go ahead and install the libraries that may be required for the project. If all the dependencies can be named at this stage, it will simply make it easier to replicate the environment. The dependency list can always be updated as I'll show in later.

	pip install <library file>

Once done with the installations, create a list of the libraries and their versions.
	
	pip freeze > myproject/requirements.txt

This file *requirements.txt* will hold the necessary dependencies for your project. In one of my projects, it looks like this:

```
appdirs==1.4.3
asn1crypto==0.22.0
cffi==1.10.0
cryptography==1.8.1
enum34==1.1.6
idna==2.5
ipaddress==1.0.18
jsontree==0.4.3
ndg-httpsclient==0.4.2
packaging==16.8
pyasn1==0.2.3
pycparser==2.17
pyOpenSSL==17.0.0
pyparsing==2.2.0
requests==2.14.2
six==1.10.0
urllib3==1.21.1
```

This fill will need to be checked in to your project code. At any time, if any other developer installs a new library, it will have to be added to this requirements.txt file. That way once other developers pull the update from the source code repository, they will be made aware of the new dependencies.

![cog wheels](/images/cog-wheels-2125169_640.jpg)

## Developer Install

For each developer, the project setup is now straight-forward. They will need to install virtualenv.

	pip install virtualenv

Then create a folder and activate virtual environment.

	virtualenv myproject
	source myproject/venv/bin/activate

After this, they'll need to check-out the code from code repository. Assuming it is a git repo this will just be a *git clone* command.

	git clone <your repo url>

Now navigate to this sub-folder.
	
	(venv) user@machine $ cd myproject/myrepo

Install the dependencies:

	pip -r requirements.txt

That's it! Your developer machine is now all set for coding.

This page is an excellent reference for virtualenv: https://python-guide-pt-br.readthedocs.io/en/latest/dev/virtualenvs/ for anything virtualenv.	

Hope this post has been useful to you. 



