---
layout: post
title: Handling a Git Pull request with merge conflict
comment: true
description: Merging a git pull request with conflicts is not straight-forward for the first time. Here&#39;s how to do it.
---

When working with Git, the relatively complex tasks are issuing a pull request and then merging with conflicts. Due to the prevalence of UIs, pull requests are now quite simple. However, merge requests that have a conflict are a little bit more hard to handle. Here's how I get this done.

![pull request](https://res.cloudinary.com/akshayranganath-dflt/image/upload/blog/pull%2520request.png)

In this example, let's work with 2 branches:

- prod (the final source of truth)
- feature-1 (the branch issuing pull request)

## Step 1: Verify your local repo
To start off, ensure that you have the latest files for the __prod__ branch.

```bash
git checkout prod
git pull origin prod
```

This will ensure that the files on local repository are in-sync with your remote git repo (Github/Bitbucket, etc).

## Step 2: Switch to branch
The next step is to switch to the branch that you want to merge. While doing it, ensure that you also pull the latest files from your remote server.

```bash
git checkout feature-1
git pull origin feature-1
```

## Step 3: Try to merge
At this point, we have the latest files for both the "prod" and "feature-1" branch locally. You are also on the branch that needs to be merged. Now try this branch to your target branch/master.

```bash
git merge prod
```

You should see output like this:
```bash
Auto-merging origin_settings.py
CONFLICT (content): Merge conflict in origin_settings.py
Auto-merging aggregator.py
Automatic merge failed; fix conflicts and then commit the result.
```

So git is saying that:

- File _aggregator.py_ has some change but, it can be merged with no conflict.
- File _origin_settings.py_ has some changes that overlap. There is a merge conflict and it cannot automatically merge the change.

Git would have also tried to merge the files and added the conflict related information to the file that has issues. In this case, it is a file named _origin_settings.py_.

## Step 4: Resolve the merge conflict
To resolve the conflict, open the file and look for lines like this:

```python
	data = open('cert2.txt').read()
	cert = TLSCertificate()
	<<<<<< HEAD
	print cert.loadCertificate(data)
	====== prod
	# print "hello world"
```

In this case, git says that the line to print _"Hello world"_ from _prod_ branch was over-written with a different print statement in the branch. Manually, you'll need to fix this. So in my case, I fixed it this way:

```python
	data = open('cert2.txt').read()
	cert = TLSCertificate()	
	print cert.loadCertificate(data)	
```

### Step 5: Check in changes
Now, commit the fixes to the branch.

```bash
git add origin_settings.py
git commit -m "some comment"
git push origin feature-1
```

### Step 6: Merge the branch
At this point, the conflicts should be gone. You can now log in to your remote server like github or bitbucket and hit the merge request. Once this completes, the pull request is automatically marked as complete.

When completing the merge, there is an option to close the branch as well. Use this option if you feel that the branch created is no longer necessary.

Hope you find this useful!