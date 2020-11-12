---
layout: post
title:  "Parallism and energy consumption "
summary: using pipes and redirections from linux to python 
author: chakib belgaid
date: '2020-11-10 '
tags: Energy-Consumpion Parallel multi-threading 
markdown: kramdown
---

In our quest toward a <span style="color:green">green</span> technology, *every single step is important*.

In this article we will discuss how the choice of parallization impacts on the energy footprint of a machine.
To do so, we will run the same program that has *10* subprocesses all doing the same work, and each time we will choose how to dispatch those subprocesses into differents CPU units in our machine.

## Setup

Our test machine contains 2 sockets, each one of them has 10 cores and with hyperthreading it makes it 20.
So the total of our logical units is 40 cores.
We can see the topology of the machine is as below in the figure below

![topology](/assets/parallel-strategies/topology.png){:width="800px":center}


## Running strategies

We run a program that is composed of 10 threads (number of physical units in each socket) and we measure the energy consumption of the same program with 3 different strategies.

### 1-Choose the physical units of only one socket

So according to the topology above we chose to pin our program on the following cores: 0,2,4,6,8,10,12,14,16 and 18.
We call this strategy **physical cpu**

### 2-One socket with both pysical cpu and its hyperthreads

And we will pin our progam on the following cores: 0,4,8,12,16,20,24,28,32,36

### 3- splits the threads between 2 sockets

Unlike the two first strategies when the 2nd socket is resting, in this strategy we favorite 1/4 of both sockets using only physical cores.
And so we pinned the programm on the following cores: 0,1,2,3,4,5,6,7,8,9

### Experimental process

To test those strategies, we run the same program multiple times and record its energy consumption each time.
In order to have a wider analyses we decided to change the different workload (how much our program needs the **CPU**)

![htop](/assets/parallel-strategies/htop.png)

The figure abouve shows an example of the program when it is using 75% of the cpu [each thread uses 75%]

## Resutls

The following graph shows the energy consumption of the different Strategies for multiple levels of workload:

![plot](/assets/parallel-strategies/plot.png)

## Conclusion

As we can see, **the second strategy** won when it comes to the energy consumption.
However, if we are looking for reproductibility of the tests, then we will try to reduce the variation between each run instead of theirs energy consumption and for this we have two candidates:

- When we are in 100% of workload **the 1st strategy** wins
- When we are between 50% and 90% **the 3rd strategy** wins
- Below 50% **the 1st strategy** wins again
  as we can see in this figure:

  ![plot](/assets/parallel-strategies/parallel_strategies_std.png)

## Futher work

- Default behaviour of the system regarding parallelism.

