---
layout: post
title: Basic Git Commands
comment: true
---

In this post, I talk about some of the most common git commands that I use. It is my version of the Git cheat sheet.

## Creating a repository

Initializes an empty repository in the current directory.

	git init

## Adding files

Adding the files, either one at a time or all the files

	git add *
	git add file-name

## Current status of Git

Details on current repository, whether any files needs to be checked in, etc.

	git status

## Committing changes

	git commit -m "message"

Listing all changes to repository

	git log

## Branching information

### List details of the current repository branch.

	git branch -a

### Create a new branch
This will create a new branch. If a branch already exists, it simply throws an error.

	git checkout -b development

### Switch branch

	git checkout development

### Merge a branch
Assuming the user wants to merge "development" to "master", this will work. The __"--no-ff"__ option will

	git merge development --no-ff

## Working with tags
### Listing the tags
Lists all the existing tags

	git tag

### Creating a simple tag
This will create a tag but have no information about it.

	git tag tag1

### Creating an annotated tag
This will add more info when creating the tag.

	git tag -a v1 -m "Version 1.0 release"

### Show the details of a tag
This will show the last committed details and the files that are present in a tag.

	git show tag1

## Git Pull
Git pull is a bit more complex command. It is used when there are multiple developers but one authorized person responsible to merge the code. In this case, all the develpers make their change and create a __pull__ request. It is like the developer telling the commitor to review and merge the change if it passes the acceptance criteria.

For git pull to work, you will need to do the following:
* Create a branch
* Make changes to the branch
* Add and commit the changes
* Push the change to the remote repository 
* Now, request a git pull on the branch name

Suppose the branch created is bug-fix-2001 the command would be:

	git pull bug-fix-2001

The code reviewer will be notified and they can take further action.