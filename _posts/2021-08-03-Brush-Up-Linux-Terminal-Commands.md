---
layout: post
title: Basic Linux Skills
comment: true
description: Level up your Linux terminal skills - try out these commands.
image: https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto,w_250,h_250,c_fill/blog/bash-161382_1280.png
tags: coding
---

I was helping someone pick up on basic Linux commands and thought it might be useful for others. Here are a bunch of things you can learn to get started with Linux terminal commands.

![Linux terminal](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto,w_350,h_350,c_fill/blog/bash-161382_1280.png)

## Directory commands

1. Get the current directory
2. Go up by one directory
2. Go to home directory
3. Go to previous directory 

## File commands

1. Show names of all files and directories
2. Show detailed list of files and directories
3. Show detailed list but list but last modified time
4. Show detailed list with file size in Kb and Mb instead of bytes
5. Show files with extension .txt

## Finding files

Find all files starting at current directory having the extension .txt

## Displaying content

1. Print contents of a text file
2. Find lines containing the word ERROR in a file "log.txt"
3. Find lines containing the word ERROR in a case insensitive manner "log.txt"
4. Find lines that don't contain the word ERROR in a case insensitive manner "log.txt"
5. Repeat 2-4 for all .txt files in current folder.
6. Repeat 2-4 for all .txt files in current and all sub-folders.

## Displaying contents of a .gz file

1. Print contents of a compressed text file "log.txt.gz"
2. Repeat 2-6 from above

## Displaying selected text

1. Print the first few lines of a file
2. Print the last few lines of a file
3. Print first 10 lines of a file
4. Print new lines being appended to a log file like apache access log

## File Ownership and Access

1. Check file permissions - who is the owner and group owner
2. Check file permissions - who can read, write and execute
3. Change file permissions - remove read access to "others"
4. Change owner and group for a file
5. Make a .sh file executable

## File copy

1. Copy one file to another
2. Copy all files in one directory to another directory
3. Create a new directory
4. Move one file to another name (ie rename a file)
5. Move one file from one directory to another directory (simple move)
6. Move one directory as another directory (ie rename a directory)
7. Delete a file
8. Delete an empty directory
9. Delete a directory with files

## Compressing / Uncompressing

1. Compress a log.txt to a gz file
2. Uncompress a .gz file
3. Bundle a folder with tar and compress with gz
4. Show output of uncompression before actually uncompressing

## SSH

1. SSH to a remote machine with user id and password
2. SSH to a remote machine using ssh key
3. Load your ssh key and login without password
4. scp a file from local to remote
5. scp a file from remote to local

## FTP

1. FTP to a machine with user name password
2. Set remote directory
3. Set local directory
4. Copy a file from local to remote
5. Copy a file from remote to local
6. Copy a folder from local to remote
7. Copy a folder from remote to local

## System

1. List current processes
2. Kill a misbehaving process
3. Identify disk usage

Give these a try and hope you are on your way for a better life on the terminal :-)