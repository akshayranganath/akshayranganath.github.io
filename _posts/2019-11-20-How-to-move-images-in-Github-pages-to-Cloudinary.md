---
layout: post
title: How to move images in Github pages to Cloudinary? 
comment: true
description: Use Cloudinary to host images from your post to get relevant image format and right quality of image based on your device
image: https://res.cloudinary.com/akshayranganath/image/fetch/w_300,h_100,c_fill,g_auto/f_auto,q_auto/https://cdn.pixabay.com/photo/2017/10/04/23/42/dandelion-2817950_1280.jpg
---

>tl;dr: Instead of hosting images for your blog on Github account, consider using the free tier of Cloudinary. It saves on usage at Github and allows you to getnerate some cool transformation and better format of images at the same time. Download the source code from [here](https://gist.github.com/akshayranganath/c387b3d011f6da096dbf82bac3a9039d).

![change banner](https://res.cloudinary.com/akshayranganath/image/fetch/w_2048,h_400,c_fill,g_auto/f_auto,q_auto/https://cdn.pixabay.com/photo/2017/10/04/23/42/dandelion-2817950_1280.jpg)

## Current issue

I have been publishing my blog on Github pages for quite some time now. I really like the approach and the super optimal HTML that is produced. However, when I run performance audits like [Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/), I would get warnings about large images and for not using newer formats like `.webp`. There was no easy way to embed the different format of images without directly embedding `<img>` tags.

I knew that Cloudinary would support the browser-specific format images. However, there was no direct way to migrate all the images. There was no easy way to search/replace the reference to the image as well. So I decided to build this functionality using simple python code. Here's how to do it. It's quite simple - we just need _Algorithms_ :-)

![Algorithms](https://imgs.xkcd.com/comics/here_to_help_2x.png)
Source:[https://imgs.xkcd.com/comics/here_to_help_2x.png](https://imgs.xkcd.com/comics/here_to_help_2x.png)

## Overall flow

Here's the basic work-flow for the migration:

* Look for all images by checking for the pattern `![]()`. 
* If the image does not begin with a `http` or `https`, it will be migrated. Store the image path for next step.
* Using [Cloudinary's Upload Python SDK](https://cloudinary.com/documentation/django_integration), upload the image from local folder to Cloudinary
* Extract the URL of the uploaded image. Append the right set of transformations and replace the orginal image's relative path with the Cloudnary URL
* Save the blog posts and commit it back to Github.

Let's look the work flow in details. You can download the full source code from [here](https://gist.github.com/akshayranganath/c387b3d011f6da096dbf82bac3a9039d). 

### Setting up dependencies

To work with Cloudinary's Python SDK, we just need to install one library `cloudinary`. Just run this command.

```text
pip install cloudinary
```  

Next, [configure your cloudinary credentials](https://cloudinary.com/documentation/django_integration#installation). I prefer to set the credentials in my environment variable but, let's use the direct method for simplicity. So this is how the beginning of your could would look.

```python
import cloudinary
import cloudinary.uploader

cloudinary.config(
  cloud_name = '<your-cloud-name>',
  api_key = 'XXXXXXX',
  api_secret = 'XXXXXXX'
)
```

### Build a list of images

Since I am using Jekyll based static site generator, all my blog posts are in the folder `_posts`. So this task is simply opening each blog post and finding the images. Store this in a dictionary. Save the `alt` text as well. This will be useful to quickly rebuild the new tag.

### Upload images

Next, go through the list of images and upload it to Cloudinary. WHen an image is uploaded, it is referenced with a `public_id`. In this case, I am trying to re-use the same name as the local path. Here's the code to upload the images.

```python
resp = cloudinary.uploader.upload(
        object,
        public_id=urllib.parse.quote(alt_text.strip()),
        invlidate=True,
        folder="blog"
    )
```

In this code, I am stating that:

* public id is same as the local file path. This will ensure that the folder struture is retained.
* `invalidate=True` will ensure that any subsequent overwrites will cause the CDN cache to be invalidated.
* `folder=blog` will ensure that the root for all my images will be a folder named `blog`.

The response URL will be of this format. The response JSON has a field called `secure_url` and it is this field we use to get back the uploaded URL.
[https://res.cloudinary.com/akshayranganath/image/upload/v1568243786/blog/nut%2520ball%2520and%2520bearing.jpg](https://res.cloudinary.com/akshayranganath/image/upload/v1568243786/blog/nut%2520ball%2520and%2520bearing.jpg)

When publishing, I don't want to use the `v1568243786` bit. It repreents the specific version of image variant. If we over-write it, the version may change. However, simply referencing it as this URL will work as well:
[https://res.cloudinary.com/akshayranganath/image/upload/blog/nut%2520ball%2520and%2520bearing.jpg](https://res.cloudinary.com/akshayranganath/image/upload/blog/nut%2520ball%2520and%2520bearing.jpg)

So I run this cleanup and store the new URL.

### Include Transformation

For this simple migration, I am adding 2 transformations:

* [`f_auto`](https://cloudinary.com/documentation/image_transformation_reference#format_parameter): This will ensure we will get back the right image format like a `.webp` on Chrome devices.
* [`q_auto`](https://cloudinary.com/documentation/image_transformation_reference#quality_parameter): This will set the best quality based on the image details.

The combination wold tranlate to a transformation string of `f_quto,q_auto`. The resulting URL would now look as this:
[https://res.cloudinary.com/akshayranganath/image/upload/f_auto,q_auto/blog/nut%2520ball%2520and%2520bearing.jpg](https://res.cloudinary.com/akshayranganath/image/upload/f_auto,q_auto/blog/nut%2520ball%2520and%2520bearing.jpg)

### Find & Replace

The last step is to open each blog and find & replace the local image reference with cloudinary URL. This is a simple string match again and a lokup into the dictionary. From the dictionary, we pull out the alt-text and cloudinary URL and re-build the image markdown code.

### Save and publish

That's it. You can now commit the code and push it to Github. That should be create the updated website and images should be performant!