---
layout: post
title: Comparing Animated Image Formats
comment: true
description: GIF is not the only image type that allows animations. WebP, AVIF and even PNG supports it - and could even be less heavier for your website. Learn more about the use of these formats.
image: https://akshayranganath-res.cloudinary.com/image/upload/f_jpg,q_auto:low,w_350/blog/happy_birthday.gif
tags: coding, webperf
---

For a long long time, GIF has been the _de-facto_ format for rendering animated images. However, did you know that most other image formats too support animation? I asked this exact same question on LinkedIn and here were the results.

![LinkedIn Survey results](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto,w_1080/blog/survey-result.png)

The reality is that animated images are supported by all of the following:

1. Gif
2. Animated PNG (APNG)
3. Animated WebP and
4. Animated AVIF

In this short article, I wanted to cover the pros and cons of the various formats. We'll go over the formats, and finally see the link for each image type and the compression we can achieve when using different formats.

For this article, let's consider these 2 Gif images. I have taken these from [Giphy website](https://giphy.com/gifs/happy-birthday-hbd-hb-onPMdPD9wI4rWA6KaT).

![happy birthday original GIF](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/happy_birthday.gif)

This image is 96.05 KB for 384x480 resolution image. It is not very large. 

![car race](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/car-race.gif)

This image is 1.04 MB for 800x600 size. I picked this up from [here](https://cdn.dribbble.com/users/2935848/screenshots/6641649/race-car.gif).


## GIF

GIF stands for *G*raphical *I*nterchange *F*ormat. This is the grand-daddy of web images. For a long time, it was the _only_ format that supported multiple frames and thus animated images.

![GIF Support](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto,w_1080,e_sharpen/blog/gif-support.png)

Source: [https://caniuse.com/?search=gif](https://caniuse.com/?search=gif)

### Pros

* Extremely wide browser support - everybody can support it.
* Easy access. In fact, everything on GiPHY or similar website is a GIF image

### Cons

* For longer animations, GIF can be very large in size.
* GIF offers minimal compression. Other formats can do a better job.

## PNG

*P*ortble *N*etwork *G*raphics file was the next format that arrived on the scene. Although PNG natively does not support animation, Mozilla worked on it and added the support through [APNG extension](https://en.wikipedia.org/wiki/Portable_Network_Graphics#Animation). Currently, all major browsers support animated PNGs. IE11 is the only hold up. If you (still) need to support IE11, you have other larger problems than just animated images!

![APNG Support across browsers](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto,w_1080,e_sharpen/blog/apng_support.png)

Source: [https://caniuse.com/?search=apng](https://caniuse.com/?search=apng)

### Pros

* For medium to larger images, APNG offers better compression and hence smaller size.
* APNG can also support more colors than GIF.

### Cons

* Since it is not a familiar format, not all tools may support it.

## Animated WebP

WebP is an image format that was released by Google. After Safari adopted it, this format now has wide support across browsers. WebP can support both lossy and lossless animated image creation. According to [claims by Google](https://en.wikipedia.org/wiki/WebP#Animation), this format can offer 64-19% reduction in size.

![WebP Support](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto,w_1080,e_sharpen/blog/webp_support.png)

Source: [https://caniuse.com/?search=webp](https://caniuse.com/?search=webp)

### Pros

* WebP has been supported by Chrome and Firefox for a long time. After Edge adopted Chromium as the browser engine, WebP has been available here as well.
* Safari added support since Mac OS 11 (Big Sur) and from Safari 14 on Mobile devices. So WebP is now available across all browsers that generally matter.

### Cons

* Lossy format can degrade the quality seriously.
* Editing tools may not easily support exporting an animated image to WebP format.

## Animated AVIF

*AV*1 *I*mage *F*ile format is the latest format to have hit the market. Launched during 2019, this file format has shown to provide better compression and fidelity at the same file size. Being a relatively newer format, it still has some time before widespread adoption. 

![AVIF Support](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto,w_1080,e_sharpen/blog/avif_support.png)

Source: [https://caniuse.com/?search=avif](https://caniuse.com/?search=avif)

### Pros

* Much lower file size for similar quality than all other formats.

### Cons

* Lacks browser support - most notably from Edge and Safari. However, this is just a matter of time. Safari has already launched a [tech preview](https://9to5mac.com/2022/07/15/apple-avif-image-safari-ios-16-macos-13/) for AVIF.
* Many tools including [ImageMagick](https://imagemagick.org/) [don't have full support](https://github.com/ImageMagick/ImageMagick/issues/2788) for animated AVIF.
* Consequently, a lot of tools may not support exporting animated images to this format.

## MP4

This is an outlier here. MP4 is actually a video format. However, any animation can be rendered as a video. Video formats offer much higher compression because they can compare individual frames and record just the differences. As a best practice, consider using a `video` tag with `autoplay`, `muted`  and `loop` turned on. This will provide the same effect as an animated GIF.

However, a flip side to it is that many email clients do not support `video` tags. So embedding video in such cases may not be feasible.

## Formats Compared

Now, let's compare the different formats. For all images, I will be applying the [`q_auto` transformation](https://cloudinary.com/documentation/image_optimization#automatic_quality_selection_q_auto). This will ensure we can reduce the file size suitable for the user without changing the image format.

| Format         | Small Image URL                                                                                      | Small Image Size (KB) | Savings | Large Image URL                                                                               | Large Image (KB) | Savings |
|----------------|------------------------------------------------------------------------------------------------------|-----------------------|---------|-----------------------------------------------------------------------------------------------|------------------|---------|
| Baseline (GIF) | [HP-GIF-baseline](https://akshayranganath-res.cloudinary.com/image/upload/v1659131715/blog/happy_birthday.gif)          | 96.05                 | 0.00    | [Race-GIF-baseline](https://akshayranganath-res.cloudinary.com/image/upload/v1659130929/blog/car-race.gif)         | 1040             | 0.00    |
| GIF            | [HP-GIF](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/happy_birthday.gif)        | 96.05                 | 0.00    | [Race-GIF](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/car-race.gif)       | 1040             | 0.00    |
| APNG           | [HP-PNG](https://akshayranganath-res.cloudinary.com/image/upload/fl_apng,f_png,q_auto/blog/happy_birthday.gif) | 117.1                 | 121.92  | [Race-PNG](https://akshayranganath-res.cloudinary.com/image/upload/fl_apng,q_auto/blog/car-race.png)      | 786.87           | 75.66   |
| WebP           | [HP-WebP](https://akshayranganath-res.cloudinary.com/image/upload/q_auto/blog/happy_birthday.webp)              | 67.22                 | 69.98   | [Race-WebP](https://akshayranganath-res.cloudinary.com/image/upload/q_auto/blog/car-race.webp)             | 1013.39          | 97.44   |
| AVIF           | [HP-AVIF](https://akshayranganath-res.cloudinary.com/image/upload/q_auto/blog/happy_birthday.avif)              | 32.14                 | 33.46   | [Race-AVIF](https://akshayranganath-res.cloudinary.com/image/upload/q_auto/blog/car-race.avif)             | 47.31            | 4.55    |
| MP4            | [HP-MP4](https://akshayranganath-res.cloudinary.com/image/upload/f_auto:video,q_auto/blog/happy_birthday.gif)  | 32.1                  | 33.42   | [Race-MP4](https://akshayranganath-res.cloudinary.com/image/upload/f_auto:video,q_auto/blog/car-race.gif) | 15.8             | 1.52    |

A few observations:

* AVIF is incredibly small at just 4.6% of the original image size for the large image. It also offers best compression on the small as well as large image.
* PNG appears to offer decent compression when the original GIF is large while it actually adds bytes when trying to work with a smaller GIF.
* WebP on the other hand does a decent job on the small GIF but not so well on the large GIF.
* The old-school MP4 can beat all animated formats easily. Consider replacing animated images with a video for much better compression!

## Summary

In short, the newer formats like animated WebP and AVIF do hold a lot of promise. If AVIF can actually delivery, the savings are very significant. That being said, the compression offered by a specific format can vary based on the actual image. So enforcing a fixed format may not be the best mechanism to achieve the most optimal file size.

If you are interested to work with Cloudinary, we have an option to enable [automatic format selection `f_auto`](https://cloudinary.com/documentation/image_optimization#automatic_format_selection_f_auto) to handle this complexity. When combined with the quality parameter (`q_auto`), we can make a decision about the right image format *based on that image features*. 

Finally, to re-iterate my point - replace animated images with a video whenever possible. This will give you a much better compression than all other image formats!