---
layout: post
title:  "Hacking your neighbour's Wi-Fi"
blurb: You wouldn't do something like that, would you?
colour: purple
---


![wifipasswordbox](https://iihelp.iinet.net.au/sites/iihelp.iinet.net.au/files/macoswifi3.png)

Once, when I was a teenager, I was staying in a hotel.

I was all like, “Oh, I’d like to have Wi-Fi now please because I feel weirdly uncomfortable not being `o n l i n e` at all times.” There were all these Wi-Fi networks around, but I didn’t know the passwords. Which made me think... what if I could just... use it anyway? This prompted a lot of research and devastated that particular family holiday.

It did make me think about Wi-Fi, though.

Isn't is strange how when you move into a place and get an internet connection, you typically get given a home router as part of the package? Isn't it strange how this router is held together using nothing but matchsticks, broken promises, and man's hubris?

This article is the 100 per cent lactose-free explanation of one way you might hack your neighbour's home Wi-Fi. By the end it’s okay to feel afraid, insecure, or even cripplingly alone. It’s okay. We’ve all been there.


## Plan an elaborate heist today

So in our 99.99999% theoretical scenario, you and your laptop are within range of your neighbour's Wi-Fi router. The first thing you'd do is take out your laptop and run `airodump-ng`, a tool for precisely the job of hacking Wi-Fi. It would show you the names of nearby Wi-Fi networks and also their “BSSID”, which is a bit like an ID for Wi-Fi networks. It’s actually *exactly* like that.

```
AIRCRACK SCREENSHOT
```

Once you know the BSSID of your neighbour's Wi-Fi, the goal is to get the Wi-Fi password. The router won't tell you the Wi-Fi password, but it will give up the _password hash_.

A password hash is like a scrambled version of the password. You can’t unscramble it. Kinda like how you can’t unscramble scrambled eggs back into the white and the yolk. Stop trying, it’s embarrassing, everyone is looking, etc.

We’re going to find the hash by watching......the secret handshake.

## The secret handshake

You heard me.

The secret handshake between your device and the Wi-Fi router happens when the device connects. An attacker can just wait around until that happens, and spy on it 👀

You might be wondering why there’s a secret handshake happening every time you connect to Wi-Fi, and that’s fair enough, I’m glad you asked.

Let’s say you’re a legitimate businessperson just connecting to their home Wi-Fi. No funny business. You know the password. But you need to prove to the Wi-Fi network that you know the password. And the Wi-Fi needs to prove to you that _it_ knows the password. The trouble is, everyone else can hear you.

Wi-Fi is broadcast as radio waves out of your device and router all the time. Anyone within range can hear what you're saying.

It’s kinda like if you came up to me at a party and you said “I know your Facebook password”. It gets real tense. I nervously glance up at you and choke trying to chuckle. I want to know if you really do know my Facebook password, but I also don’t want you to just say “Your Facebook password is cooldude69” because everyone else at the party is listening.

So, the secret handshake lets you and the Wi-Fi router both prove you know the password without saying it. Here’s how it works:

# GOOD PICTURE CONTENT

Did you spot the trick? What can an eavesdropper do here?

The trick here is that if you’re an eavesdropper, you get to see the following things:

# GOOD PICTURE CONTENT

You know the text, and you know what it encrypts to. This means that you can guess something as the key, and _check_ if your guess was right.

What if you just encrypt the text “memes” with “cooldad1964” as the key, and it happens to encrypt to “b8%&G”?

Then you know that the password was “cooldad1964”. And if “memes” encrypts to something else, then you know your guess was wrong.

```
WARNING this is a simplification (read: wrong), there's actually a chain of keys computed from the actual Wi-Fi password. It boils down to the above idea, tho, sorry for tricking you I'm just protecting you from the harsh truth, son. If you want the real deal and aren't afraid of death by acronyms check out this stackoverflow answer: https://security.stackexchange.com/questions/66008/how-exactly-does-4-way-handshake-cracking-work
```

## Cracking the password

So using the trick above, we’re going to just *guess* the password. The trick is that we’re going to be able to guess passwords way faster than if we were just typing them into the “Enter the password for this Wi-Fi network” box.

So, get out your pen and paper and blow the dust off that compass and straightedge because it’s time to do some encryption.

Just kidding, we’re not going to use pen and paper you big bozo. We’re going to use a graphics card.

Graphics cards are the part inside a computer that lets the computer be able to play 3D games such as Fallout 4 and Viva Piñata: Party Animals. They also happen to be really fast at encrypting stuff.

So we’re going to get a big list of millions of passwords, and try them all to try and guess the Wi-Fi password.

## artisanal_passwords.txt
For one reason or another, hackers have made available big lists of real passwords. By “real”, I mean “someone used this password on a site and that site got hacked so now everyone knows their password”. Sites that got hacked recently and had passwords publicly exposed include LinkedIn, Adobe, and Myspace.

There are two kinds of home Wi-Fi networks: The kind that are called `NETGEAR-7BDFC`, with randomly generated passwords, and the kind that are called `Chris&Liz2018`, with passwords that are in these password lists.

I’m going to guess that your neighbour's password is probably in one of the heaps big lists of passwords I have. But to find out which one it is, we’re going to have to encrypt `memes` (in this example) with every single password in the list as the encryption key, and see if any of them match what we saw the Wi-Fi password encrypt to (`b8%&G`).

(If your neighbour has one of those randomly generated passwords, then you're out of luck. JUST kidding [click here for a fun time](https://www.darknet.org.uk/2010/09/wifite-mass-wifi-wepwpa-key-cracking-tool/).)

Now that you've "acquired" these password lists, you gotta figure out which password is the Wi-Fi password.

## Rapid-fire password guessing
Hashcat is software that can take a password list and a hash (“b8%&G”) and try to "unhash" it by comparing it to all the passwords in the list. To give you an estimate of how long this takes, my computer can check 10 million passwords in about 10 minutes. Specialised computers overflowing with graphics cards can do this in seconds.

And that’s it. Hashcat will spit out the password, and you can just type it in the Wi-Fi “Enter the password” box. The main part is furiously guessing millions of passwords until we find the right one.

## Why does this work?

Because people pick easy-to-guess passwords. English word with the first letter maybe capitalised then one or two numbers? That pattern covers a *lot* of people’s passwords and a computer can just quickly check all of them.

If you’re an average internet user, your password for everything is the same, and it’s your pet’s name followed by your house number. Even worse, it's probably a password hackers already have in their password lists. What I’m saying is that on average, most Wi-Fi passwords people choose don’t stand a chance against these password lists.

You can check whether your password has been stolen by hackers (and published) by browsing to [https://haveibeenpwned.com](https://haveibeenpwned.com)

# So what?
So you can probably hack home Wi-Fi. What's the point of doing it?

You could....

## Find your neighbour's ISP password

Routers often store the password used to connect to the ISP (your ISP may not do this) in their admin panels.
Let me walk you through the complex process of hacking a home router.

First you open up the popular hacking software, Google Chrome, and go to 192.168.0.1, which is usually the IP address of the router.

When you get there, you'll see something like this.

![adminadmin](https://i.imgur.com/gXaUvVv.png)

Easiest `admin/admin` of your LIFE right there.

Once you're in the router, the password is in the config page.

```
   screenshot of password dots
```
Oh no! The password is just dots! Your hacking career is over before it started!

Fear not, young keyboard warlock, for there is a deus ex machina that saves you in this cutscene.

You can `Right Click > Inspect Element` (hacker voice: i'm in) on the password field, and you'll see this:

```
   html showing password type
   screen record GIF of this?
```

That's right, the dots were only put there by _your_ browser. The password was under them all along. Trapped in a prison of your own mind.

## Backdoor the router

Home routers let you open up SSH or even dust the spiderwebs off telnet (like SSH but without the "secure"), and even expose these to the internet. You could connect to the router and run whatever code you want on it.

In the past people have done Classic Moves such as making the router wait for you to log on to your banking website, and then redirect you to a phishing site.

## Steal your neighbour's data

So this one isn't as cool as it used to be, but using ancient forbidden techniques like [ARP poisoning](https://en.wikipedia.org/wiki/ARP_spoofing) (not nearly as cool as it sounds), you can spy on what your neighbour is sending to the internet.

This won't work for websites with that lovingly hand-forged green HTTPS lock, since your neighbour's data will be encrypted.
But, there are still plenty of sites that will ask for your password or credit card information over plain ol' HTTP.

Even for some HTTPS sites (which do not use Certificate Pinning or HSTS), you can force your victim to use plain unencrypted HTTP with [SSLStrip](https://avicoder.me/2016/02/22/SSLstrip-for-newbies/).

# oh no

It's possible that reading the words on this hypertext page has made you question the bulletproof security of your own home network situation. 

You may have realised that, for somebody, "your neighbour" means *you*.

Here are some things you can do to stop worrying about your home Wi-Fi security.

## 1. Absolutely nothing

Don't even worry about it. The pool of people who can attack your home Wi-Fi is limited to the people in **physical range** of it.

A website like PayPal is attackable by: anyone with a computer

Your home Wi-Fi is attackable by: anyone nearby your house

What I'm saying here is that the chance of someone with skills and motivation to hack your Wi-Fi *actually doing it* is....really low. Probably your neighbours are just that nice family and that one guy who you notice always leaves his beer bottles in your recycling bin and sort of grunts at you when you pass eachother and well you just think that maybe Slipknot shirts aren't cool anymore, and even liking them ironically isn't cool anymore so you'd just like to not have your driveway blocked for once and go to the supermarket in peace.

Anyway that guy's not gonna hack your Wi-Fi. This is why it's not a *total* catastrophe that most people's Wi-Fi security is this bad.

You might leave a spare key under the mat, or not bother to lock your windows *even though* someone could easily climb through them, because you're not worried about someone physically breaking in. In the same way, your house probably doesn't need extra-strong Wi-Fi security.

So don't worry about it! Go to the beach! Participate in the capitalist machine! Eat a cupcake! Your Wi-Fi security probably isn't worth worrying about.

## 2. Enable Paranoia Mode

"Wait what if there IS someone trying to hack my home Wi-Fi, like the GOVERNMENT!!1!"

I mean the government has far easier ways to spy on you, but if you *really* want to tighten up your Wi-Fi security, you can:

* Use WPA2-PSK, and change the Wi-Fi password to something unguessable but easy to share (for your guests, of course). Good examples include `fresh*life*fresh*mangoes` and `gday$one$internet$please`. Or randomly generate one like `gV@3AdSKouI&*3Wj` if you hate your guests and love typing.
* Install custom router firmware like [DD-WRT](https://www.dd-wrt.com/site/index). This has far fewer security holes than whatever PHP spaghetti your router came with.
* Turn off WPS
* Patch your router which is impossible because of protocol upgrades (KRACK)


* did you know you can deauth?
* Did you know about wifi probe requests
