---
layout: post
title: Docker Commands
comment: true
---

I completed the course on [Docker Quickstart](https://linuxacademy.com/devops/training/course/name/docker-quick-start) at LinuxAcademy today. Over the course of I made notes on the important commands. Here's my notes.

## Installing docker
All commands as root on CentOs7

	cd /etc/yum.repos.d
	vim docker.repo

	[dockerrepo]
	name=Docker Repository
	baseurl=https://yum.dockerproject.com/repos/main/centos/7/
	enabled=true
	gpgcheck=1
	gpgkey=https://yum.dockerproject.org/gpg

	yum install docker-engin

	systemctl enable docker
	systemctl start docker

	usermod -a -G docker <username>
	cat /etc/group | grep docker #should use the <username> as the group for the docker program


## Docker commands
List images

	docker images
List running docker processes

	docker ps
List all processes that were ever run

	docker ps -a
List only the container ids

	docker ps -a -q
Running processes

	docker run <image>
	docker run -d <image> = run in disconnected / daemon mode
	docker run --name="Some Name" = name the running instance
	docker start <name> = will restart a closed / exited instance of the image
	docker exec -it <name> <command> = run a command within a running container without changing the state of the running container
	docker stop <name> = stop a running container by using the name

Cleaning up docker

	docker rm containerid = removes an instance of the container that was run

	docker rm `docker ps -a -q` = remove all stopped containers

	docker rmi image-name = removes the docker image and its dependencies
Redirect port

	docker run -P = will redirect the container's port to a random port on the host machine's user port (port no 32,000+)

	docker run -p 8080:80 = will redirect the container's port 80 to a port 8080 on the host machine's user port 

	docker port <container-name> = will list the port mapping information
Adding volume
Using the "-v" option mounts the local file system. eg to mount for an nginx on centos

	-v /home/user/www:/usr/share/nginx/html

Building a Docker file

	docker login --username=<username>
	Enter password
	docker push username/repo

Hope you find this useful as well!	