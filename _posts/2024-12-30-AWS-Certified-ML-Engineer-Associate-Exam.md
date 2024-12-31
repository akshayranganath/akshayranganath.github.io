---
layout: post
title: Preparing for AWS Certified ML Engineer Associate Exam
comment: true
description: Notes from preparing for the AWS Certified Machine Learning Engineer Associate Exam
image: https://akshayranganath-res.cloudinary.com/image/upload/w_650,f_auto,q_auto/blog/studying-for-ai-exam.jpg
tags: ai-ml, gen-ai
---

During the last half of December 2024, I managed to complete the **[AWS Certified Machine Learning Engineer - Associate](https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/)** exam. It was a remarkable journey. Since it is one of the newer exams, I thought of sharing what I learned along the way.

## Why take this exam?

I wanted to take this exam for 2 main reasons:

* Pick up a new topic: I wanted to prove to myself that I could still do heads-down studies and pick up a brand new topic. I don't come from an AI/ML background. While I've had exposure to it through my work, it was superficial. I wanted to drill in deep and *see* how the algorithms operated.
* Understand actual deployments: Most videos or tutorials on AI/ML teach about running training and checking a few test inputs. But what happens beyond that? How does an organization track and manage versions, monitor errors, and actually deploy a model? All of these things were unclear to me. I wanted to use this certification as a stepping stone to gain that knowledge.

In your case, you may have similar motives. You may want to signal to the market that you are capable and potentially make a career switch. Whatever it is, gain clarity on the *"why"*. This is what will sustain you through the journey.

## Who should take this exam?

Unlike other AWS Associate exams, this one is different. Apart from AWS services, you will definitely need to have working knowledge of machine learning and AI concepts. If you would like to take this exam, my suggestion is to try a significant number of machine learning algorithms in a hands-on lab environment. This will give you an intuitive understanding of how the algorithms work and the kinds of parameters that affect their operation. A significant focus of the exam is to _optimize_ the ML pipeline. This includes things like feature engineering, dimensionality reduction, hyperparameter tuning, and so on. If you have tried hands-on programming assignments, the concepts are easier to grasp and you'll have a better shot at figuring out the right answers.

If you have prior experience with AWS, it is definitely a plus. In my case, I had completed the AWS Certified Solution Architect exam a few years back. So services like S3, EC2, CloudWatch, SSM, and so on were familiar. This helped in cutting down the prep time.

## How to prepare for the exam?

![preparing for the exams](https://akshayranganath-res.cloudinary.com/image/upload/f_auto,q_auto/blog/studying-for-ai-exam.jpg)

To fully prepare for this exam, my suggestion is to use the following resources:

| Course / Book | Link | Notes |
| ------------- | ---- | ----- |
| Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow: Concepts, Tools, and Techniques to Build Intelligent Systems by _Aurélien Géron_| [Amazon](https://www.amazon.com/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/1098125975)| This is a MUST-have book if you want to get a thorough understanding of the concepts and a broad overview of the field. It covers ML algorithms, activation functions, hyperparameter tuning, neural networks, and more.|
| AWS Certified Machine Learning Engineer Associate: Hands On! | [Udemy](https://www.udemy.com/course/aws-certified-machine-learning-engineer-associate-mla-c01/?couponCode=24T7MT123024) | A very good training to help you prep for the AWS exam. |
| AWS Courses | [AWS](https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/?ch=sec&sec=rmg&d=1) | Use this for targeted courses and one free mock exam of 20 questions |
| The Machine Learning Solutions Architect Handbook | [Amazon](https://www.amazon.com/Machine-Learning-Solutions-Architect-Handbook/dp/1805122509/) | Use this book to polish off your learning from the Udemy course. It will help solidify the concepts and put everything in place. |
| Embedding and Vector DB | [Real Python Blog](https://realpython.com/chromadb-vector-database/) | One of the best hands-on blogs to learn about vector DBs | 
| 3Blue1Brown videos on LLM, backpropagation, and other concepts | [YouTube](https://www.youtube.com/@3blue1brown) | Grant covers the core concepts of Neural Networks and machine learning in an easy-to-understand manner. He doesn't shy away from math and provides ways to intuitively recognize the concepts. | 
| Andrej Karpathy's introduction to LLM  | [YouTube](https://www.youtube.com/@AndrejKarpathy) | A guru in this field, each of his videos is a gem. Do watch his [intro to LLMs](https://www.youtube.com/watch?v=zjkBMFhNj_g) - one of the best resources to understand the field! | 
| GenAI tools | ChatGPT, Claude | I liberally used ChatGPT and Claude when I was stuck. During my prep, I used the following as the first prompt to get useful answers: <br /> `You are an experienced AI tutor. I am preparing for a certification exam in Machine learning. I have a few questions. Can you help me with it? You can keep the responses short and suitable for a beginner to intermediate level user.`|

## My Journey

Here's a broad timeline of my learning path before I took the certification exam:

* Q2 2023: MIT Course on Deep Learning
* Q3 2023-Q2 2024: Read Hands-on ML book by Aurélien Géron 
* Q3 2023: Watch math foundation videos by 3Blue1Brown
* Q4 2023: Attempt Titanic and MNIST challenges on Kaggle
* Q1 2024: Learn about [LangChain](https://www.langchain.com/) and [LlamaIndex](https://docs.llamaindex.ai/en/stable/)
* Q1 2024: Build simple tools and function calling apps with Bedrock
* Q2 2024: Build RAG and Image search using Bedrock
* Q3 2024: Start exam prep
* Q4 2024: Pass the certification exam

Most of my projects are available on GitHub: [https://github.com/akshayranganath/my-ai-projects/tree/main](https://github.com/akshayranganath/my-ai-projects/tree/main).

## How I could have done better

Looking back, I think I got too carried away by the field of GenAI. I directly started with Deep Learning. Instead, I should have taken a step back and started with simpler concepts of Machine Learning. If I could go back in time, I would recommend the following to myself:

* Start with basics - watch the primer videos on probability, differentiation, and integration on [3Blue1Brown](https://www.youtube.com/@3blue1brown)'s channel
* Go through the ML book by Aurélien Géron. Practice the hands-on exercises at the end. This really forces you to understand the concepts and apply them in real scenarios
* Watch the LLM video by Andrej
* Build a RAG application using AWS Bedrock and AWS OpenSearch
* Watch and prep for exams using Udemy and AWS materials

## Things that confused me

As mentioned earlier, this exam tests the ability to take a concept and apply it through a specific AWS service. 

For example, you could use SageMaker's built-in containers for running an algorithm like `RandomForest`. The exam may test you on how to tune the parameters to ensure it doesn't overfit. Although the response is a specific SageMaker parameter, the hyperparameter being tuned is related to the ML algorithm. So if you don't know the underlying algorithm, you won't be able to spot the right answer.

During the prep, I had many _Aha!_ moments. Here are a few:

### SageMaker "built-in" vs PyTorch/TensorFlow

I knew that TensorFlow offered a whole set of ML algorithms. However, I didn't immediately understand SageMaker's "built-in" algorithms. SageMaker's _estimator_ is AWS offering an ECS container. In normal PyTorch/TensorFlow, it fires up the algorithm and trains on the same system where your code/Notebook executes. However, when you use an _estimator_, a pipeline is created and the training actually happens on a container that is initialized in a call. Here's an example:

```python
from sagemaker.estimator import Estimator

xgboost_estimator = Estimator(
    image_uri="xgboost-container-image",
    role="SageMakerRole",
    instance_count=1,
    instance_type="ml.m5.xlarge",
    output_path="s3://your-bucket/output",
    debugger_hook_config=hook_config,
    rules=rules
)
```

### SageMaker Services

In the prep work, I came across SageMaker _Model Monitor_, _Clarify_, _Debugger_, _Pipeline_, and other tools. In a normal AWS world, these would be options you would see in the UI.

Although some may be available in the SageMaker Canvas, most of them are _Python libraries_. For example, here's how you can use SageMaker Debug:

```python
import smdebug.tensorflow as smd
hook = smd.KerasHook.create_from_json_file("path_to_config.json")
model.fit(x_train, y_train, callbacks=[hook])
```

### Feature Store

When working with simple examples, we have small amounts of throw-away data. We download MNIST, train a model, and don't worry much later.

In the real world, data needs to be cleaned up before training. These could be simple steps like dividing an image vector by 256 or more complex like creating an encoding. The important point is that these operations should be done once and the resulting data should be stored back. This is where feature store comes in. As a non-practitioner, it is hard to judge the value this brings. It opened my eyes to the complexity involved and that model training is not just naive `model.fit()` & `model.predict()` function calls.

### ETL and Data Pipelines

Closely related to the above - real-world data can be LARGE. You need complex mechanisms to stitch, clean, and filter data. Typical ML books/videos don't cover this issue. You need to spend time understanding the complexity involved.

Specific to AWS, there are overlaps in functionality offered by services like AWS Glue ETL & SageMaker Data Wrangler; AWS Step Function and AWS Batch; MWAA and AWS Batch, and so on. You will need to have a clear idea of where these services fit and the reason for the overlap (developer user vs no-code/low-code solution for business users) or small volume vs large volume data processing.

For such questions, please use your favorite LLM and chat liberally. To keep the LLM less verbose and more helpful for exam prep, I used the following as the initial prompt:

```
You are an experienced AI tutor. I am preparing for a certification exam in Machine learning. I have a few questions. Can you help me with it? You can keep the responses short and suitable for a beginner to intermediate level user.
```

This worked well for both ChatGPT and Claude.

## Wrapping Up

Looking back, I think this is an exam that expects a lot from you. It wants to weed out simple certification takers from actual practitioners. So if you are serious about the exam, please spend time actually understanding and implementing core concepts before attempting to take it. As you can see from my timeline, the foundational prep took over 1.5 years while the actual exam studies required around 3-4 months.

All in all, I learned a lot, and it is one of the exams where you genuinely feel a sense of achievement when you complete it!
