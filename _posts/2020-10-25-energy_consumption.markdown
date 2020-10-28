---
layout: post
title:  "Software Engineering and Energy"
summary: Energy consumption as an important matter in software ingeneering as it is in hardware 
author: chakib belgaid
date: '2020-10-25 '
tags : Energy  ict  algorithms  programming languages 
---

# Energy Consumption 

Nowdays we are merged and emmerged with/in the IT world. Technology is every arround us and sometimes even inside us. Some people can't live witout it, some use it to gain their life, others made it as their vocation, tools to gain fame and even to find love, hapiness.
This year the ITU (International Telecommunication Union) estimated more than 4.1 billion people are using the internet which means arround 53% of the world's population.

![evolution of internet users](https://cdn.foleon.com/upload/16601/chart_1_new.014f8699df61.svg "Individuals using the Internet, 2005-2019")

## Technology is awsome, but how much is the price to use it?

Too much I would say, in fact Only data centers consume more than **100 Twh** per year and this amount is increasing every year.  
!["evolution of ict energy consumption](/assets/2020-10-25/images/evolution_of_ict_energy_consumption.png)

## Can we save our beloved mother earth ?

Most of us want to reduce this consumption, but in the other side there is a lot who don't want to sacrifice their awsome, funny and interesting tools. So what if we reduce this energy and yet we keep everything the same ?

Many scientists, business-men and researchers are trying to do boths, and each one of them is trying to optmize some parts of this huge pipeline.

Some of the data centers are using green energy instead of the black one, others try to reduce the energy consumption of the whole building by placing it underwater or in some already cold places to reduce the cooling costs.
The hardware guys want to make it more efficient and less consuming and the last ones are trying to make programs less consuming.

## every change matters ! 
Even if it small it will save something, and who knows maybe this tiny optmizisation will somenes life one day (counting a lot on the butterfly effect).
Personnally i work on the last station of the optmization train. And I'm trying to optimize the product, not the tool, I mean i ll try to make programs consumes less energy.
As an example, what if by changing the programming language we can save some energy.

## Energy consumption of programming langauges

Nouredine et al, made an emprical study about the energy consumption of different programming languages.

First they implemented the hannoin tower algorithm, into different languages and measured the energy consumption for solving the problem.

![Hanoi tower example](https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2016/12/Tower-of-hanoi.gif)

to illustrate an example of the algortithm, here is a python code 
```python
def hanoi(ndisks, startPeg=1, endPeg=3):
    if ndisks:
        hanoi(ndisks-1, startPeg, 6-startPeg-endPeg)
        print ("Move disk %d from peg %d to peg %d" % (ndisks, startPeg, endPeg) )
        hanoi(ndisks-1, 6-startPeg-endPeg, endPeg)
```

This algorithm highlight the usage of the cpu since it is recursive and requires and has no data to deal with.

The figure below shows the energy consumption of the different implementations 

![energy consumption of hannoi tower algorithm](/assets/2020-10-25/images/hannoiwithoutio.png)

As we can see, the same algorithm has a significant behaviour toward the energy consumption when it is implemented in different languages.

We Clearly see that *Perl* and *Python* consume 100x more than *C* or *JAVA*

The main reason behind a such difference is how those languages interact with the machine.
Python and Perl are interpreted so there is a program who will read the code and then execute it line by line. Others like C and C++ are compiled into a binary files so they will be executed directly by the machine and there is no intermediate between the code and the machine which will boost the performances and reduce drasticlly the energy consumption. There is a third option between them which is using a virtual machine and have a version of code closer to the machine than the human like Java, Rust or Go.

The main questions are :

- Is there a dominant programming language ?
- Should we give up on all those languages and use only one if there is a dominant one ?
- What will happend to the other languages ?
- Can we optimise the other languages to make them less energy hungry ?

In the next blog posts we will try to answer those questions and rise others, so keep in touch :p 


## References 
 - https://itu.foleon.com/itu/measuring-digital-development
 - https://www.hackerearth.com/blog/developers/tower-hanoi-recursion-game-algorithm-explained/
 - http://rosettacode.org/wiki/Towers_of_Hanoi
 - A preliminary study of the impact of software engineering on GreenIT, Noureddine et al.