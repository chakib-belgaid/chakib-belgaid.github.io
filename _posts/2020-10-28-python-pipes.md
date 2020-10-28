---
layout: post
title:  "A simple trick that will save you time, and effort . "
summary: using pipes and redirections from linux to python 
author: chakib belgaid
date: '2020-10-27 '
tags: python linux bash 
markdown: kramdown
---



Linux offers a set of some strong line commands such us `egrep`, `find` ..*etc*. 
We find them in python as built-in functions or libraries, however if you are like me and used to those commands in your daily life you can combine them directly with python code to make it simpler and more efficient. 
In this post i'll show you two ways to get benifits from them by a real life example. 


One of the cases when I use this approach is to deal with log files ,config files or just a set of data files. It helps gathering information and statistically analyze them. 

The trick is to use linux commands to filter those files before starting the procedure using the command `find`. 

In this example I have a tree of folders when they contain some config files stored in Json. 

First, I look for them 

    find . -name "*.json" 

and this will give a list of relative paths to those files.

![Results of find command ](/assets/pipes/find.png){:height="300px"}

and then we use the `sys.stdin` to get those files .So our python code will be something like this 

{% highlight Python %}


def foo(): 
    for line in sys.stdin:
        f= open(line.strip(),'r')
        #do something with f 


{% endhighlight %}
*Note*: we use `strip` to get over of the end of lines `\n`. 

So if we combine them the result will be : 

    find . -name "*.json" | python generate-stats.py





## Inisde a notebook 

As most of statistical work is done now in notebooks, Jupyter offers us a set of magic commands that let us call system functions and plot the result into a variable.

{% highlight Python %}
stats_files = !find . -name "*.json" 
{% endhighlight %}

this will give us a list of relative paths as well  and we handle it in the same way as before 

{% highlight Python %}


def foo(): 
    for line in stats_files :
        f= open(line,'r')
        #do something with f 

{% endhighlight %}



