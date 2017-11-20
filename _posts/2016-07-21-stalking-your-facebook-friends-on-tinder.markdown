---
layout: post
title:  "Stalking your Facebook friends on Tinder"
date: 2016-07-21 16:02:38 +1100
blurb: How I found a way to see the Tinder profiles of your Facebook friends. I told Tinder about this and they said "it's a feature lmao".<a href="https://news.ycombinator.com/item?id=12141086">Hacker News comments</a>
colour: purple
description: A hidden Tinder API lets you see the Tinder profiles of your Facebook friends. I told Tiner about this, but they were like "it's a feature lmao"
permalink: '/stalking-your-facebook-friends-on-tinder'
---

* * *
Whoa hello hey look I think I made a thing that lets you see the Tinder
profiles of your Facebook friends. That’s Tinder photos, bios, and the last
time they were on Tinder. You can also swipe right on their Tinder profiles,
even if Tinder doesn’t suggest them to you. I think this has some pretty
~spooky~ privacy implications, and this post is about how it works.

I told Tinder that I found this thing, and they said it was a feature, not a
bug. If you want to skip the blog post and just get straight to swiping right
on your friends and downloading their Tinder profiles, [here’s the GitHub
repository](https://github.com/defaultnamehere/tinder-detective).

Otherwise... Get ready for some texttttttt

* * *

Hey what up it’s me ya friendly neighbourhood homeslice Alex comin’ atcha’
LIVE with some phresh new #content. That’s _right_ it’s the inevitable
disappointing sequel to “Graphing when your Facebook friends are awake”
streamed to your screen in HIGH DEFINITION TEXT.

For the sake of helping you find the parts of this post that are _not_
gratuitous gags (it’s easier that way), I've put the important parts **in
bold**. I have also put _some parts_ in _italics_ for _emphasis_ and other times
_as a quote_. I've also noticed that sometimes things are in bold **or**
_italics_ **seemingly at random**, _overall_ reducing the **helpfulness** of the
whole thin**g**.

## I'm a time traveller from 2004 and I don’t know what Tinder is

Invest now in emoji they’re gonna be BIG.

Tinder is a "Lifestyle” app (apps are like websites but worse) that lets you
‘Anonymously “like” or “pass” people Tinder suggests’. I read it on the login
screen to their app so it must be true.

Now that we’re all up to speed, you know how Tinder has profiles? They’re the
page someone looks at when they decide whether to swipe left or right on you.
Normally you only appear to people that Tinder chooses to show your profile
to. Anyway so one day my phone rings and it’s President Obama saying “Alex my
son you absolute ledge, go see if Tinder has any weird secret APIs you can use
to do something cool idk” and I was all “rest easy baz m8 I’m on the case”

## Story time

Cut to me in my room. I’m about to try and “do hacking”. Around me are two
computer monitors, two laptops, and no friends. It’s 10pm on a Saturday night
and I’ve decided that I want to poke around on Tinder (not like that) and see
if I can find anything interesting (also not like that).  

The first step is to use the Tinder app and see what the app does, in the
hopes of catching it doing something silly.

But I don’t have a Tinder account, and I don’t plan to. (But it’s okay if
_you_ use Tinder. That’s not what this post is about.)

The only way to sign up for a Tinder account is by signing in with your
Faceook account, but I don’t want to use mine. I happened to have an
absolutely true blue [Terms-of-Service-
Compliant](https://www.facebook.com/terms) _spare_ Facebook account lying
around, so I made a Tinder account with this Facebook account. I had to pick a
profile photo for the account so I picked uhhhhhhh

![image](/img/2016-07-21-stalking-your-facebook-friends-on-
tinder/c8dd3f93a079f3b3e5b0f7c2057d4254598bf6f25663ef39469748deac2f9fa3.jpg)

  

I have alarmingly little justification for this so it’s probably better if you
just keep reading.

## Mad-dawg-y dawg 31337 el8 hacking #sk1llz

I wanted to see what the Tinder app was doing behind the scenes, kinda like
how you can put on your hoodie, yell “hold my calls” to nobody in particular,
click _“Inspect Element”_ on a web page, and call yourself a hacker. This will
let you see all the stuff that the page is sending and receiving and also
finally make people respect you for the edgelord you are. You can’t _“Inspect
Element”_ on an app, so I used [mitmproxy](https://mitmproxy.org/) to spy on
my phone.

mitmproxy is an elite hacker tool that lets me view data the Tinder app was
sending to and from my phone and increases my fedora size by 7000%. I
installed mitmproxy's provided 103% legit artisanal HTTPS certificate to my
phone, which gives me the master keys to decrypt whatever my phone sends to
and from Tinder servers. I go and edit my phone’s WiFi proxy settings to say
_“HEY big guy you know how you thought that the internet was over THERE well
actually my laptop is the internet so you can just send all your data there
instead okay yeah sick one”_. Since my phone is now politely sending all the
good stuff to my laptop instead of my router, I can use my laptop to spy on
all the internet connections my phone is making.

![image](/img/2016-07-21-stalking-your-facebook-friends-on-
tinder/a1330752ffee8c258a014acb540961102f7cdd985c9b2079b9c010e175e3c0bc.png)

  

Here we can see that my phone is talking to an API at api.gotinder.com. It’s
telling Tinder “hey, I’m online and about to start swiping furiously so I hope
[your AWS load-balancers](http://tech.gotinder.com/caching-architectures/) are
ready for this”, and asking the server for a list of faces to swipe. It’s also
sending some gentle analytics like where I am, the make and model of my phone,
who my phone provider is, and whether I have Tinder Plus, the Money Edition of
Tinder.

![image](/img/2016-07-21-stalking-your-facebook-friends-on-
tinder/7229afc95992adf646b345b6e7676cba410a59d18ed865a3aeaccc7c56ae69a0.png)

At this point, like in general, I don’t really know what I’m looking for or
even how this app works. There’s something about swiping people right.
Sometimes you let your friends use your account to chat with strangers. That’s
all I got. The app seems to aggressively want me to be excited about it but
I’m confused. I’m just here to try to catch this app doing something silly
behind the scenes and try and fix it.

* * *

Since I don’t know what I’m looking for, I try everything. I change _all_ the
settings. I’m now a 20 year-old Flamingo interested in Men and Women from age
18 to 30 from up to 100km away (roughly 200,000 “Make America Great Again”
hats laid end-to-end if you only know Freedom Units and need to visualise),
The first time someone’s face comes up I mess up and can’t figure out which
way is “right” and accidentally “pass” them. The app says “NOPE!” and I see
their face fade into the void. I’m already a judgement _machine_ and I haven’t
even started. I furiously spam “Like” on a bunch of faces in the hopes that
someone will also “Like” my high-resolution flamingo picture. If someone
“matches” with me I’ll be able to chat with them, and a whole other section of
the app to poke around in will open up.

Nobody will ask any questions about the fact that my profile has only a single
photo, it’s of a flamingo, and that my bio is just “Flamingooooo”.

* * *

Look I really thought my flamingo idea was going to be a good one but nobody
liked me back.

_Fiiiiiiiiiine._

I googled “stock photos faces” and picked one of a lady in a hat. Yeah. A hat.
That’ll work. I cropped the photo slightly and added a subtle filter to
attempt to fool the most basic of reverse image searchers and then realised
that I really should probably consider going outside more I hear it’s pretty
high-resolution out there too.

Instead I go back to the Android guest user I've added to my phone with the
disposable email address the Facebook account uses. I set my phone to use my
laptop as a proxy, sending all traffic to the laptop before it hits the
internet so I can spy on myself. I change my photo to the hat lady and spam
some swipes right on some faces.

Almost _immediately_ I’m informed that “It’s a match!” in some hipster cursive
font. (Probably [Lobster](http://www.dafont.com/lobster.font). Have you seen
that thing it’s [everywhere](https://emojityper.com).) My choices are “Send
a message” or “Keep swiping” (Fun fact, in an earlier version of the app,
“Keep swiping” read “Keep playing”.) I pick “Send a message”. I spy on the
network requests that the chat part of the app does but I can’t see the actual
message text for some reason. Is it not being sent over HTTP? Some other
protocol? Is it doing some XMPP or websockets sacrificial ritual? Is it
converting each message to base64, storing that base64 in italics in Times New
Roman in a PDF, inserting that PDF into a cell in a Microsoft Excel 2003
spreadsheet and ROT13-ing the whole thing? I’ll never know, I gave up and
stumbled on a way better feature.

## “I’ve always wanted Tinder in group form”

We’ve all felt it at one time or another. Good news. It’s finally here. If you
live in Australia like me, your Tinder account will have an option to check
out “Tinder Social”.

![image](/img/2016-07-21-stalking-your-facebook-friends-on-
tinder/20e3004585f5f2c6a2119c28f169c15c8793dccdb5ca86646c809bd1d4cbc4ef.jpg)

Tinder Social is the whole swiping-chatting-meeting-up experience, but now
it’s with _groups_ of people and you’ll have a _perfect_ moment to spam “when
the whole squad is on point”.

That’s right, you too can exchange four messages with a group of stock photos,
just like the lucky folks in this mockup.

I took the picture above from Tinder’s [announcement blog
post](http://blog.gotinder.com/introducing-tinder-social/). I noticed that one
of the photos in this mockup is the same stock photo I used for my non-
flamingo Tinder photo and the internet feels a little smaller.  

You might have a lot of _feelings_ about this particular feature of Tinder,
and that’s okay with me. This blog post is long enough as it is though, and
you probably have to get going soon since you left something in the oven or
something, so I’m just going to move on if that’s alright with you.

* * *

Because Tinder is really on the fence about whether it’s a parody of itself or
not, internally the app calls groups “squads”. Here’s an example:

>     "squads_discoverable": false,  
>      "squads_only": false,  
>      "can_create_squad": true

There’s really nothing I can say here so let’s just enjoy this special moment.

* * *

If you haven’t heard of Tinder Social, it’s because it’s only in Australia for
now “as a test”. If it works Tinder might roll it out to the rest of the
world. (UPDATE: Plot twist, it launched in the US the same day this blog post
came out! See the bottom of this post for details.)

That’s right, Australia-production is _basically_ a staging server at this
point. “We’ll just yolo-deploy this 176% legit "Tinder for Squads” to uhhh I
dunno let’s go with uhhhh Australia _just as a test_ and if it works, great,
but if it turns out to be bad NO WORRIES MATES IT’S JUST _AUSTRALIA_ LOL”.
What the _heck_ Tinder I can’t believe you chose the _continent of Australia_ as the A in your A/B test. What, do you think we’re second-class internet
citizens just because our internet is desperately struggling to hold up under
the weight of Netflix and it’s probably faster and cheaper to send a big file
to your mate on the other side of the country via a Kangaroo with a pouch full
of MicroSD cards than attempting to upload anything faster than 700Kbps? Even
if the Kangaroo gets lost and goes on a Pokewalk and is all like “hey guys
guess what I found a ZUBAT” then it’s STILL going to be faster than looking at
a website, your eyes wide in innocent horror being like “but I don’t
understand. Why isn’t uploading? Did I do something wrong? Did I break the
app?”. But it’s not your fault. Dry your eyes. I’m not crying. You’re crying.

## Hey I’ve been reading this for like a long time can you get to the stalking
my friends thing now?

Sorry it’s just that I get a bit s̫ͅt̀͊ͬr͒e̗̎s̠ͭͫseͧd͛͟ sometimes ya feel?

There’s no concept of “friends” on Tinder, only people who you have “matched”
with. So Tinder Social shows you your Facebook friends on Tinder and lets you
choose from them who to add to your group.

![image](/img/2016-07-21-stalking-your-facebook-friends-on-
tinder/37d7cc91dc609517a090314b5e34bb8db52b3ac4a4ae889fe5d4932bac6c2ba7.png)

In the app you don’t see anything other than names and Facebook profile
pictures for your friends. But let’s just casually point mitmproxy at the
Tinder app while it brings up the “choose friends” screen.

> GET **https://api.gotinder.com/group/friends**

{"status":200,"results":[{"**user_id**":"**562.......ec8**","name":"[redacted]","photo":[{"processedFiles":...{"url":"https://graph.facebook.com/[redacted]/picture?height=640&amp;width=640","height":640,"width":640}]}],"in_squad":false}

Mostly this is just names and profile photos of your Facebook friends, which
is nothing you couldn’t get from the official Facebook API. This data is from
a fake Tinder account I created to test my idea. But what about this part?

> "**user_id**":"**562.......ec8"**

That’s the Tinder user id of this Facebook friend. (I’ve cut out some of it so
you can’t go stalking this account.) This id uniquely identifies a Tinder
account. Surely it can’t be THAT easy. Can it? What do you think? Vote on your
phones now!

* * *

If you send:

> GET https://api.gotinder.com/user/**562.......ec8**

Then Tinder sends back:

> {'_id': '**562.......ec8**',  
>  'badges': [],  
> ** 'bio': "hi every1 im new!!!!!!! *holds up spork* my name is katy but u
can call me t3h PeNgU1N oF d00m!!!!!!!! lol…as u can see im very
random!!!!",**  
> ** 'birth_date': '1995-07-19T02:52:04.083Z',**  
>  'birth_date_info': 'fuzzy birthdate active, not displaying real
birth_date',  
>  'common_friend_count': 0,  
>  'common_friends': [<common Facebook friends go here>],  
>  'common_like_count': 0,  
>  'common_likes': [<common Facebook likes go here>],  
> ** 'connection_count': [the number of people you’ve swiped (I think?) go
here],**  
> ** 'distance_mi': 1, // How far the person is from you right now**  
> ** 'gender': 1, // 1 is female, 0 is male. C’mon Tinder that’s not how
gender works**  
>  'jobs': [],  
> ** 'name': 'Victoria', // Note that there’s no last name**

>

> **'ping_time': '2016-07-16T02:51:45.475Z', // The last time the person was
on Tinder**

>

> .....

>

> 'schools': []}  
>

Yeah look I know you probably didn’t read that so let me explain. No no, it’s
fine, you don’t have to go back and read it now. It’s really no trouble.

If we have someone’s Tinder id, we can see:

  * Tinder photos
  * Tinder bio (a short “about me”)
  * The last time they were on Tinder
  * How many people they’ve swiped (I think??)
  * A few other things, but you already knew them from Facebook

Hey, look, you can see the last time someone was on Tinder.

According to Tinder, this feature is disabled. Here’s a screenshot [of their
support page.](https://www.gotinder.com/faq)

![image](/img/2016-07-21-stalking-your-facebook-friends-on-
tinder/b6ebf2fadd657a7e77460259d12a3d16f71daa00ae20e592586d38865d3d38cc.png)

I guess they only disabled it in the app screens, rather than changing what
the server sends to your phone.

Why, with information like that you could make graphs of when your
friends are using Tinder, and probably find out all sorts of interesting
things. Who _knows_ what that information correlates with? Just an idea.

And hey, once you have someone’s Tinder user id, **you can use the official
unofficial API to swipe left or right on them** without waiting for them to
appear in the stream of people Tinder suggests to you.

You can swipe left or right on them like this:
```
GET https://api.gotinder.com/{like|pass}/{id}
```

I’m not sure about this, but it looks like that people who have swiped right
on you appear earlier in the list of people Tinder suggests. So what I’m
saying here, is maybe you can _force_ Tinder to let you “like” one of your
Facebook friends on Tinder? Then you’ll probably appear in their suggestions,
and if they “like” you back then you can just be like “haha wow fancy seeing
you on tinder” YOU SMOOTH CRIMINAL YOU ( ͡° ͜ʖ ͡°)

* * *

## “Responsible” disclosure

tl;dr I tried to tell Tinder about this before I wrote this blog post but they
were all like:

¯\\_(ツ)_/¯

You can skip this section if you don’t want to read a bug report. It’s okay. I
don’t mind. I’ll see you in the next section.

* * *

This isn’t much of a “security vulnerability”, and it certainly doesn’t
deserve it’s own cool and funky name like
[Heartbleed](http://heartbleed.com/). But I thought I’d report it anyway, just
in case Tinder didn’t know about it.

I looked around on their site but I couldn’t find a “Security” section so I
just made a support ticket.

Here’s what I sent them in full (feel free to skip this):

```
This isn't actually a support request. I actually want to report a security
vulnerability, but I couldn't find where to do so.

Would you mind forwarding this to your security team? Thank you! <3

I found that I can find the Tinder profiles of any of my Facebook friends
who use Tinder.  
This can all be done through the (un)official API, so I'm assuming it's a
"feature" not a bug.


 Steps to reproduce:
 GET [api.gotinder.com/group/friends](http://api.gotinder.com/group/friends)
 > Returns Tinder user ids for all my Facebook friends that have Tinder  

 GET [api.gotinder.com/user/<id>](http://api.gotinder.com/user/)
 > Returns, among other things, something like:

    _connection_count":1979,"common_like_count":0,"common_friend_count":0,"common_likes":[],"common_interests":[],"uncommon_interests":[],"common_friends":[],"_id":"<tinder
    user id>","badges":[],"bio":"i dont get it is this app like twitter"
    ","birth_date":"1987-07-[redacted]","gender":0,"name":"[redacted]","ping_time":"[utc
    one second resolution timezoned timestamp]


I think that you don't want to expose that information about my Facebook
friends to me.

If this behaviour is intentional:
Sure, it's your app.
Please reply to this ticket letting me know.


If this behaviour is not intentional:  
You should change it!  
I recommend not having profile information available at /user/<id>, or
limiting it only to users that have been suggested to me.

Please reply promptly if you'd like me to keep this secret, since because I
think you think this is a feature not a bug, I’ll probably blog about it
publicly soon.


Thanks for reading this!
```


And here’s the reply I got (within 48 hours, nice!):

```
Hello,

Thanks for bringing your concern to our attention. This is a part of our
feature called Tinder Social. You may opt out of Tinder Social at anytime by
visiting your Settings. If you opt out, you will not appear on your friends'
lists.

To learn more about Tinder Social, please read our blog post here:
http://blog.gotinder.com/introducing-tinder-social/.
```

Props to the Tinder Security Team for responding so quickly. Also, sorry about
the barely coherent bug report, it was pretty late by the time I wrote this
;>_>

Anyway, since this thing is a feature, not a bug, I can blog about it in good
conscience. Right?

* * *

Great, I thought so too. That’s why I also wrote a tool that finds the Tinder
information about your Facebook friends for you. [Here it
is.](https://github.com/defaultnamehere/tinder-detective) Before you use it
you’ll have to type “y” to a prompt that asks you if you really want to stalk
your real-life Facebook friends. You also need to supply your Facebook
authentication Token, which you can get by intercepting your Tinder app’s
traffic with mitmproxy. Or there might be another way. Or you could just go
talk to them, I'm sure they're nice.

## Live demo

Wow here we go I hope this works fingers crossed hahaha

![image](/img/2016-07-21-stalking-your-facebook-friends-on-
tinder/a1d7422dfc2e333e878591a2c2243692dcfca27c737d1aacacbcfc4d24c580be.png)

_Phew_ it worked. That’s a screenshot of the 99% UX-free “webapp” I made to
display the Tinder profiles of your friends (with most of the information
faked in this picture). This page contains profiles for all your Facebook
friends that also have Tinder accounts. You can see information about them,
like their bio and the last time they used Tinder. You can also click the
buttons to long-range-sniper-noscope swipe left or right on them, even if they
haven’t shown up in the stream of people Tinder points at you.

Don’t actually use this by the way. Oh, no. That would be _creepy_. You
wouldn’t do that. Would you?

## So is this even a big deal?  

Not for everyone, thankfully. But for some Tinder users, yeah it is. The main
idea is that there's a subset of Tinder users that would rush to go and change
their profile if they found out their friends could see it.

Here’s what Tinder had to say about being able to find your friends on their
blog post announcing Tinder Social:

_UPDATE: Any user who would prefer not to be added to groups can opt out of
Tinder Social through his/her settings to no longer appear on their friends'
lists. We are only testing it at this point, **but it's important to note
Tinder's not a secret considering 70% of users download Tinder because their
friends recommend it.**_

Yyyyyyeah I don't really buy this reasoning, so I used it as the slogan of my
stalking program.

This is a bit like saying your Facebook Messenger chat history isn’t a secret
considering 70% of your friends recommend that you stop trying to SMS them
gifs.  

For an app about relationships, which are generally the cause of drama and
tragedy in most storylines since the beginning of time, suddenly exposing
_more_ personal information than before seems like it could lead to immediate
and lasting #regrets.

Basically here’s the deal. Some Tinder users put what I’m going to call
“sensitive information” in their Tinder profiles. If, suddenly, Tinder goes
from “only people Tinder suggests me to can see this” to “People I know in
real life can also see this and also swipe me”, I can imagine some people
feeling exposed.  

Here are some extremely sensationalist examples of Bad Times that could
happen:

  * You see that your monogamous cousin's boyfriend is using Tinder right now
  * You see that _your_ partner is using Tinder right now  

  * Your friend's using Tinder for dating but their Dad is a Mormon minister so they don’t want anyone to know  

  * Your Facebook friend sees your Tinder bio and judges you, being all like “oh, I didn’t know _you_ were into _that”_
  * Some bozo makes graphs of when their Facebook friends are using Tinder and publishes them

Those are all pretty worst-case, but they could happen. And I don’t want that!

I’m writing this blog post so you know that people can do this on Tinder, and
hey, maybe to encourage the folks at Tinder to reconsider deploying Tinder
Social to the rest of the world. (UPDATE: lol too late)

Okay, and I’m also still a little _salty_ about the “idk just try it out in
uhhh idk, Australia” thing.

## tl;dr

_In summary:_

  * _Tinder Social means your Facebook friends can see your Tinder user id_  
  * _Using the Tinder API, your friends can use your user id to both swipe you and see your Tinder photos, bio, and the last time you were online._
  * _Whoaaa_

## Hey wasn’t your last blog post also about stalking your friends?

Heh yeah, two blogs in a row on stalking your friends, no biggie y’know haha.
They’re my ONLY two blogs actually ahahahahahahahahahahahahahahahahhahaha so
_funny_ anyway I have to go I’m go̕i̗nǵ thrͩou͎g̼h a̰ͩ͂ tunn̅̾ėlͧ́
ȓ̸̜͊i͂g͡h͒t̶̛̟͂́͟ ̴͛̕͜n̬̾o̒̿͠w




* * *


_UPDATE: Plot twist, Tinder launched Tinder Social in the US the same day as
this blog post was published! According to their[ blog
post](http://blog.gotinder.com/launching-tinder-social-a-new-way-to-plan-your-
night/) “You have to unlock Tinder Social in order to use it. Once you do,
you’ll see your friends who’ve also unlocked it (and they’ll see you).” I ran
Tinder Detective just now to see if what I did still works, and it does. This
could be because I’m in Australia and everyone in Australia has Tinder Social
“unlocked”. Or it could be that the APIs I’m using work regardless of whether
Tinder Social is “unlocked”. If you’re in America and you feel like testing
out whether the tool I wrote works there too, [tweet
me](https://twitter.com/_notlikethis).  
UPDATE 2: Thanks to some kind Americans on Twitter, we now know that you can
only stalk the Tinder profiles of your Facebook friends that have opted in to
Tinder Social. Unless you live in Australia. In which case you’re visible by
default. That’s what you get for being in staging, I guess._

* * *

_Jumbo-size extra crispy shoutouts to top humans
[Smerity](http://smerity.com/) and [Blake](https://blaker.space/) for their
sagely review of this blog post, and just generally for stopping me from
writing too many dumb things <3 <3_


_If you want to talk to me about this blog post then I dunno [hit me up on the tweet zone](https://twitter.com/_mangopdf) I guess._
