---
layout: post
title: DevOps Journey - Settup up Git Server and SSH enabled client
comment: true
---

In this post, I describe the steps needed to setup a Git server and configuring it to accept the git push command.

## Background

Before embarking on my DevOps journey, I wanted to setup a Git server and client. I did not want to use the public Github or any free service. I wanted to do it the hard way to ensure that I knew the process and could relate to the pain that ops feel in setting a new system up!

## Installing git as a server

I started out by reading up the steps at this page: Git on the Server – Setting Up the Server. It was generally well laid out and well-referenced by others.

However, as all things Linux, one of the steps failed. When I followed the process and tried to do push my code to the remote Git server, it failed. After a bit of research, I found out these are the steps that works.

### my computer
	$ sudo adduser git
	$ su git
	$ cd
	$ mkdir .ssh && chmod 700 .ssh
	$ touch .ssh/authorized_keys && chmod 600 .ssh/authorized_keys

	$ cd /opt/git
	$ git init --bare myproject.git #this step differs from the reference page
	Initialized empty Git repository in /opt/git/project.git/

### on John's computer
	$ cd myproject
	$ git init
	$ git add .
	$ git commit -m 'initial commit'
	$ git remote add origin git@gitserver:/opt/git/project.git
	$ git push origin master


	$ git clone git@gitserver:/opt/git/project.git
	$ cd project
	$ vim README
	$ git commit -am 'fix for the README file'
	$ git push origin master

It was basically one line “$ git init –bare myproject.git” that caused the difference. Without this step, the git reference files were being created a directory above the folder marked as repository. The code push would fail and I’d only see errors. Once I made this correction, the error went away and the I was able to continue using Git.

## Tweaking / Checking git settings

After having installed Git, here are some tips to check or update the git settings. The first set lists the current settings on Git and the rest of the commands is for tweaking the git settings. Git settings is divided into 3 sections as follows:

System settings: applies to all users and all repositories.
Global settings: applies to this users for all the user's repositories.
Local settings: applies to this repository.
Settings at Sytem is over-ridden by Global; settings at Global level are over-ridden by Local settings.

### print the current Git configuration
	git config --list

### set the editor for this user globally
	git config --global core.editor=vim

### set the git user name locally for this repository
	git config --local user.name

### create a git ignore rules globally and 
	create .gitignore
	git config --global core.excludesfile ~/.gitignore_global   