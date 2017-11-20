---
layout: post
title:  "Graphing when your Facebook friends are awake"
date:   2016-02-15 16:02:38 +1100
blurb: I stumbled upon a dodgy Facebook API. Read for tips on how to apply at the NSA. <a href="https://news.ycombinator.com/item?id=11130688">Hacker News comments</a>
colour: lightblue
description: A hidden Facebook API shows online activity, and can be used to make graphs of when people are awake.
permalink: /graphing-when-your-facebook-friends-are-awake
---


Look I’m not really sure why but I think I made a thing that makes graphs of
when people are online on [Facebook](http://gabegaming.com). It sounds kinda
creepy and uh it is. Read along so you, too, can be the NSA. ˙ ͜ʟ˙

* * *


![image](/img/2016-02-15-graphing-when-your-facebook-friends-are-
awake/c40272b2c7c3b9e438ef7c664d7885e84a11d339e5ba4592bcd8439c2a4f1b46.png)


* * *

## Little green dots

You know those green dots on the sidebar on [Facebook
](http://gabegaming.com)that tell you who’s online? How do they get there?
Also there are times next to people who are offline. What are those about?

![image](/img/2016-02-15-graphing-when-your-facebook-friends-are-
awake/551460a51d27e9ae89bf41324681e3003a79b8dae07b416222269958379bb02f.png)

I was wondering the same things, and so one day I decided to 360 noscope hack
[Facebook ](http://niceme.me)by right clicking and selecting “Inspect
Element”.

![image](/img/2016-02-15-graphing-when-your-facebook-friends-are-
awake/9348aaaf747682858cf914ce9303b06d6c25ef31e0287e4b108c39d0be894838.png)

## _I’M **IN**_

We did it team. Anyway alright uhhhh let’s just uh snoop around here
_reallllll sneaky like_

![image](/img/2016-02-15-graphing-when-your-facebook-friends-are-
awake/c8e33edf107c714f4a23857a0a0355a411e9063527c52851eda8409c824fa482.png)

If you reload the page you’ll see approximately fifty-bajillion network
requests go off as [Facebook](http://www.thinkb4uclick.ie/) desperately tries
to load all the junk that it needs to display
[facebook.com](https://www.youtube.com/watch?v=dQw4w9WgXcQ).

You might be wondering at this point why I decided to look for interesting
things in this mess instead of, I dunno, getting out more, getting a cat, that
sorta thing. Anyway hey look a heading

## Finding the good stuff

![image](/img/2016-02-15-graphing-when-your-facebook-friends-are-
awake/85cd30d6d53e78a721b13adbf3bb71cbf2aeb93ab33782deba57b288cdcfb69e.png)

What’s this “pull” thing?

![image](/img/2016-02-15-graphing-when-your-facebook-friends-are-
awake/ffd837d89fc05b9cc94418bb6fc69293cfd09a0d6b59100cdb3d83f11fc23844.png)

THAT looks like some #datascience right there. This is the kind of **100%
legit secret undocumented “API”** that we came here for. Let’s do some
reverse-engineering.

It looks like a mapping of [Facebook ](http://gabegaming.com)user ids to...
their online status? But there’s more than one value? “webStatus” and
“fbAppStatus” are both there. What’s more, it tells you what the person is
_doing_ on each of the different kinds of statuses.

For example:

  * “messengerStatus”: “invisible” means they’re not online on the Facebook Messenger app.
  * “webStatus”: “idle” means their web browser is logged in to [Facebook](http://oneu.se), and has the page open, but they aren’t doing anything on the site like moving their mouse or talking to anyone.
  * Since we have both of these _at the same time_, we can tell that this person is likely not using their phone, and that they were using [facebook.com](http://www.logobird.com/wp-content/uploads/2011/04/facebook-procrastination.jpg) recently, but not right now.

That’s already a little creepy that we can tell that about people. But can we
do more with this?

You might also notice that there is a value called “la” that is a big integer
that starts with “14″. If you I dunno, didn’t have a lot of friends in high
school, you might recognise that as a [UNIX time
stamp](https://en.wikipedia.org/wiki/Unix_time) - the time in seconds since
midnight, January 1, 1970.

Computer Scientists thought this would be a good time to start measuring the
time from because the first app was born at midnight, January 1, 1970. The app
was a custom emoji pack for an ancient model of phone that would one day
evolve to become the first Blackberry.

If you’re wondering why the response starts with “for (;;);”, it’s to, among
other things, [encourage developers to use a quality JSON
decode](http://stackoverflow.com/a/7099820)r, instead of like, y’know, eval().

Anyway that “la” thing stands for “last active”, and tells you the last time
the person was active on [Facebook](http://nsa.gov/careers), down to the
_second_. Do you see where I’m going with this?

## Roleplaying as the NSA ˙ ͜ʟ˙

So far we have a whole bunch of things which look like this

  * A person
  * A time
  * Whether they’re **online** or **offline** or **idle**
  * Which devices they’re online/offline/idle on

This doesn’t seem that interesting at first, since you already know who is
online by looking at the sidebar. But **what if there was someone _always_
watching the little green dots?**

Using the _power of computers_, you can just write a Python program to listen
to what the /pull requests are saying _all the time ever_, and write it down.

Here’s a screenshot of all the log files I’ve got:

![image](/img/2016-02-15-graphing-when-your-facebook-friends-are-
awake/c1230c0b60926fd16c20aa323e114e4f144cb9597a633c946423c3080ff95b74.png)

And here’s what an individual log file looks like (the first 10 lines):

![image](/img/2016-02-15-graphing-when-your-facebook-friends-are-
awake/85a7a3e40a761f8752bf2517b2c4b79d2c7ebef59254aa5dad80f45e9891fb66.png)

Those blurred out things are [Facebook](https://facebook.com/) user ids. If
you think these screenshots look _a little bit creepy_ then YEAH I KNOW RIGHT.

## Tell me about your program then you massive nerd

It runs 24/7, and it’s constantly logging online/offline activity data from
those /pull URLs using my [Facebook
](http://html9responsiveboilerstrapjs.com/)cookie.

Writing it was _mostly_ about saying “jeez, all these parameters look
_complicated_” and then blindly copy/pasting them anyway.

![image](/img/2016-02-15-graphing-when-your-facebook-friends-are-
awake/c1c9830d821b384cb2ec97d9bebbd908f45d48ea3e5d8f7b6fc889f506f8e4c3.png)

Protip, you can right click on any network request in Chrome’s Developer Tools
and click “Copy as cURL”. This is _amazing_ and lets you re-run a request from
the terminal, as well as give you all the headers and cookies used to run that
request in a nice copy-pasteable format.

The first step was to just run that request verbatim in a terminal with curl.

```
> curl 'https://1-edge-
chat.facebook.com/pull?channel=p_[redacted]&amp;seq=3&amp;partition=-2&amp;clientid=[redacted]&amp;cb=6dcn&amp;idle=5&amp;qp=y&amp;cap=8&amp;tur=1545&amp;qpmade=1455427171900&amp;pws=fresh&amp;isq=221841&amp;msgs_recv=3&amp;uid=[redacted]&amp;viewer_uid=[redacted]&amp;sticky_token=239&amp;sticky_pool
=atn2c06_chat-proxy&amp;state=active' -H 'origin: https://www.facebook.com' -H
'dnt: 1' -H 'accept-encoding: gzip, deflate, sdch' -H 'accept-language: en-
US,en;q=0.8,en-AU;q=0.6' -H 'user-agent: ‘[redacted]' -H 'accept: */*' -H
'referer: https://www.facebook.com/' -H 'authority: 1-edge-chat.facebook.com'
-H 'cookie: ‘[redacted]' --compressed
```

I was expecting it to not work because it looks like it has some sequence
numbers in it oh boy BUT it turned out to just take a really long time. I
later found out this was because the /pull endpoint is using [HTTP Long
Polling](https://en.wikipedia.org/wiki/Push_technology), which turns out to be
like a streaming HTTP GET request.

The only other important parameter to worry about is “seq”, which I’m guessing
is the sequence number of the response from Facebook. Just add 1 to the
sequence number that the response from /pull gives for the next request and
you’re good to go.

If you’re worrying about remembering all this, chill out I got yo’ back, my
100% [Terms of Service Compliant](https://www.facebook.com/terms)
implementation of this is available [here on
GitHub](https://github.com/defaultnamehere/zzzzz). Standard disclaimers of
“I’m so sorry I wrote parts of this in like 30 minutes” apply.

One caveat of the data-collection program that I’ve noticed is that it has
false negatives. That is, sometimes it won’t give you a “this person is
online” data point, even though they really are online. I guess that gives
plausible deniability of... being offline?

## You should probably get out more

[worried laughter]

## So that’s the hard part done, right?

**Let me paint you a word-picture**. It’s 11pm, I’m listening to [the soundtrack to The Social Network](https://www.youtube.com/watch?v=1Ua2gabdJoc) (ironically? meta-ironically? I don’t even know), I have six terminals tiled across two screens as well as fifty thousand browser tabs open and I’m up to my _**third** graphing library_.

Making graphs is really hard.

I used [matplotlib](http://matplotlib.org/), but I realised this wasn’t my
thesis and I wouldn’t be embedding this ugly graph as a pdf into a LaTeX
document that takes 3 passes of pdflatex to render because there’s been a
terrible but extremely localised accident where only humanity’s LaTeX to pdf
converters have been irreversibly sent back in time to the 80s.

I used [bokeh](bokeh.pydata.org/), which claims to be a “matplotlib-killer”,
and it was was okay until [a friend](http://blakeapproves.com) told me “it
isn’t the 90s anymore, you don’t generate graphs server-side. Also your graphs
are ugly and you should feel ugly **you utter fraud**”.

[This friend](http://blaker.space) recommended [nvd3.js](nvd3.org/),
presumably because you’re not making _real_ graphs in 2016 unless your
graphing library is &lt;something&gt;.js and requires at LEAST one other
&lt;something else&gt;.js as a dependency. Everyone looks at you like “**what,
you DON’T already use &lt;something else&gt;.js?** Jeez say goodbye to your
Hacker News karma. Just apt-get install npm &amp;&amp; npm install bower
&amp;&amp; bower install-” NO STOP IT THIS ISN'T WHAT [TIM BERNERS-
LEE](https://en.wikipedia.org/wiki/Tim_Berners-Lee) WANTED”.

I think it took about three times as much time to graph the data as it took to
write the code to download it. And **the graphs aren’t even good**! I gave up
on perfecting the graphs so I could just hurry up and write this questionable
blog post already. Just think of me resolving pip3 dependencies when you see
the ugly graphs.

(°ロ°)☝ **AND ANOTHER THING** when it’s midnight and your x-axis formatting
function doesn’t convert UNIX times into JavaScript date objects properly
because there’s no timezone information and I dunno JavaScript was written by
some guy in two weeks (yeah I ain’t afraid to call it out what of it) and your
binary-search based conversion of sparse timeseries data into uniformly dense
timeseries data is causing _so many data points_ to be graphed that it’s
slowly crashing Chrome and you’re watching _helplessly_ as your RAM goes up
and Chrome won’t close the tab and it just _doesn’t seem right_ that 2016, the
year of the Linux Desktop has brought us this situation I mean I thought if
you had enough &lt;something&gt;.js libraries this stuff was meant to just _scale right up_ so tha-

## Quit stalling with graphing libraries and show me the graphs

Fine but you’re missing out on top-quality graphing-related banter.

* * *

_The graphs in this section are all of the online/offline activity of some of
my Facebook friends.They consented to it being on this blog post on the
condition that it’s anonymous._

* * *

  

## Person 1

![image](/img/2016-02-15-graphing-when-your-facebook-friends-are-
awake/48fe7be2ca53245ed9d96e7ccfe7449ed6a3d36a0efda7c2f37e1701b14db7ac.png)

Here’s someone’s graph. The x-axis is time, and the y-axis is how online the
user is. Possible states for someone’s status are “offline”, “invisible”,
“idle”, and “active”. Each coloured line is a different kind of _client. _It’s
called a _client_ because I don’t know I’m an Information Visualisation
_Professional_ and I get to make up words like that. Here are explanations for
what each of the _“coloured lines”_ means:

  * **status** - Not sure what this is. Some kind of client-agnostic status? It doesn’t line up exactly with the activity of the other clients though  
  * **webStatus** - Chat activity on facebook.com
  * **messengerStatus** - Status on the Messenger mobile app
  * **fbAppStatus** - Status on the Facebook mobile app
  * **otherStatus** - Presumably shows when people are online on other apps that can access the API that causes them to be considered “online”. OAuth? Random “apps” like Farmville? No idea

Here’s the same graph, with some clumsy drawings on it showing when I think
this person is awake/asleep.

![image](/img/2016-02-15-graphing-when-your-facebook-friends-are-
awake/07d0873f21529f89f9c56f429820d4185d33af87f3f503dd6a46e4f70e235856.png)

You can see the amount of rest they’re getting each day - it’s the width of
the “asleep” bit.

You can also see that they were probably asleep from 3am to 10am on February
11, and BOY does it feel creepy writing this.

Of course, this isn’t perfect, since they might be awake and _not_ using
Facebook (I know). Having spoken to a few people who were graphed, it’s been a
fairly accurate measure of awake/asleep time, as well as “how much do you
browse Facebook at work” time ;)  

Do you look at Facebook shortly after you wake up? Shortly before you sleep?
If so, these graphs are a fairly accurate way to measure when you were asleep,
and anyone you’re friends with on Facebook can do it.

## Person 2

![image](/img/2016-02-15-graphing-when-your-facebook-friends-are-
awake/6cad6465fc3202a5a1875c692a071b54d1d8672ea2ddad4c45ff4c9303779177.png)

I showed this person their graph and asked them some questions.

> “Did you go to sleep around 11:10pm last night?”  
> They said yes.

>

> “Did you wake up around 8:32? That’s a weird time. Was your alarm set for
8:30?”  
> They said yes.

NSA APPROVED   ✔️ 🆗👌👌 👍✔️👌🆗🆗👍


## Person 3

![image](/img/2016-02-15-graphing-when-your-facebook-friends-are-
awake/db07774710fbb3a457d4aa90aef1e846459649a71a44672cbee4bf9648d7c104.png)

There are two interesting things about this graph

  * The person isn’t online as frequently as the previous examples  

  * The person isn’t using the Messenger app nearly as much  

You can see that their webStatus was “online” on and off from midnight til
around 2am, and then again at 10:21am.. I’m not sure if this spiky pattern
means that they really were online, then offline, then online again, or if
it’s just a quirk of the dodgy undocumented “API” I’m using, or even if it’s
just a problem with my code.

Similarly, I’m not sure why there are these weird spikes every three minutes
(+- ~1minute) sometimes.

![image](/img/2016-02-15-graphing-when-your-facebook-friends-are-
awake/88e8b53a88b5706494f6d5d66859087f64b8c68559c1e5e6548a863d2797f726.png)

Also, why does “otherStatus” go to offline precisely when “webStatus” goes to
online? So many questions! Let me know if you know the answers to any of these
things (@Facebook employee friends ;) ;) ;))

* * *

Anyway, I hope I've convinced you that this is real creepy. I don’t really
want to be able to have the power to do this.

## Your dumb graph screenshots are too small. Give me a live graph to play with

[You got it, boss. Click here. Or anywhere, really. This whole sentence is a
link.](https://cdn.rawgit.com/defaultnamehere/zzzzz/70d407736092304ee247fbbacbe9f82bc0cba472/templates/sample_graph.html)

## What else can you do with this data?

You can aggregate. Finding the average wake up time/sleep time/time spent on
Facebook each day and then looking for outliers sure sounds like a way to find
interesting things about your Facebook friends.

You can write a thing to email you every morning with the names and sleep
times of everyone who’s had less than 6 hours of sleep.

You could even try and guess when your friends are talking to each other, by
looking for times when only a few people are active, although I suspect this
would be hard.

I’m sure you can come up with something else, too.

## Why can you do this? Can’t Facebook stop this from happening?

That’s a good question, thanks for asking.

It makes sense for [Facebook ](nicememe.website)to be able to do this, since
they can tell when everyone is online anyway. But why can your [Facebook
](https://matmartinez.net/nsfw/)friends do this to you?

I don’t know all the details of how facebook.com uses all the data that’s sent
via the /pull endpoint, but it’s kinda creepy that I can see my friends’
status on every device? I guess they could just give me “web” or “mobile” or
“offline”, rather than the full list of statuses for every client, but even
that doesn't solve the problem.

I also see the value in seeing “last active 4h ago” and “last active 1m ago”
for Messenger contacts but... I dunno, here I am making these creepy graphs.

Anyway, I just open-sourced my dodgy graph making thing so now everyone can do
this. And who knows how many people have been doing it already?

I’m probably oversimplifying it, though. The smart people at [Facebook
](https://myspace.com/)who write this stuff have probably thought of all of
this and found that this way was best.

## Can I stop you from doing this to me?

Kinda. Coincidentally, because my script is always running, collecting data, I
show up as “online” all the time. If you were also running a script like this,
it would partially prevent what I’m doing from working on you, since you
always show up as “online”, no matter what you’re _really_ doing. Activity
from the Messenger app will still show up separately, though.

## tl;dr

  * [Facebook ](https://pbs.twimg.com/media/CRRJVwIUwAAf-wP.png)sends your computer a bunch of interesting information when you’re on [facebook.com](https://pbs.twimg.com/media/CRRGTVcU8AA7veC.png:large).   

  * You can collect that information over time and use it to keep track of when people are on [Facebook](http://dudududu.de/), and which devices they’re using.  

  * You can make a pretty good guess as to what time people are going to sleep and waking up
  * It’s creepy, but I don’t see a way for [Facebook ](https://en.wikipedia.org/wiki/Phishing#Link_manipulation)to stop allowing this while still making their chat app good.

## So how does this make money again?

Oh, no no no. I just uh don’t get out much.

  

  

  

* * *

_If you want to talk to me about this blog post then I dunno [tweet at
me](https://twitter.com/mangopdf) I guess. You can also[ stalk me on
GitHub](https://github.com/defaultnamehere/) if you want._
