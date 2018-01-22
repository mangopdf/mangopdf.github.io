---
layout: post
title:  "Hacking your neighbour's Wi-Fi"
blurb: You wouldn't do something like that, would you?
colour: purple
---


* Why is the software so bad? Economics, it doesn't need to be good to get bought
* Security nope lol
* This is all physical range so you don't gotta stress too much
* password cracking isn't accessible, most people can't do it
* Ethics: Is it okay to hack your neighbour's wifi? No!
* What can you do to secure your home wifi?

Once, when I was a teenager, I was staying in a hotel.

I was all like, “Oh, I’d like to have Wi-Fi now please because I feel weirdly uncomfortable not being `o n l i n e` at all times.” There were all these Wi-Fi networks around, but I didn’t know the password to any of them. Which made me think… what if I could… use it anyway? This prompted a lot of research and devastated that particular family holiday.

It did make me think about Wi-Fi, though. Isn't is strange how when you move into a place and get an internet connection, you typically get given a home router as part of the package? Isn't it strange how this router is held together using nothing but matchsticks, broken promises, and man's hubris?

This article is the 100 per cent lactose-free explanation of one way you might hack your neighbour's home Wi-Fi. By the end it’s okay to feel afraid, insecure, or even cripplingly alone. It’s okay. We’ve all been there.

## okay uhhhh let's have a go

So in our 99.99999% theoretical scenario, the first thing you'd do is take out your laptop and run `airodump-ng`, a tool for precisely the job of hacking Wi-Fi. It would show you the names of nearby Wi-Fi networks and also their “BSSID”, which is a bit like an ID for Wi-Fi networks. It’s actually *exactly* like that.
```
AIRCRACK SCREENSHOT
```

Once you know the BSSID of your neighbour's Wi-Fi, the goal is to get the Wi-Fi password. Unfortunately, the router won't give up the Wi-Fi password, but it will give up the _password hash_.

A password hash is like a scrambled version of the password. You can’t unscramble it. Kinda like how you can’t unscramble scrambled eggs back into the white and the yolk. Stop trying, it’s embarrassing. Everyone is looking.

We’re going to find the hash by watching......the secret handshake.

## The secret handshake

You heard me. I can’t believe that this is a real thing, but there actually is a secret handshake that happens when you connect to a Wi-Fi network.

You might be wondering why there’s a secret handshake happening every time you connect to Wi-Fi, and that’s fair enough, I’m glad you asked.

Let’s say you’re a legitimate businessperson just connecting to their home Wi-Fi. No funny business. You know the password. But you need to prove to the Wi-Fi network that you know the password. The trouble is, everyone else can hear you.

Wi-Fi is broadcast as radio waves out of your device and router all the time. Anyone within range can hear what you're saying.

It’s kinda like if you came up to me at a party and you said “I know your Facebook password”. It gets real tense. I nervously glance up at you and choke trying to chuckle. I want to know if you really do know my Facebook password, but I also don’t want you to just say “Your Facebook password is cooldude69” because everyone else at the party is listening.

So, the secret handshake lets you and the Wi-Fi router both prove you know the password without saying it. Here’s how it works:

# GOOD PICTURE CONTENT

Did you spot the trick? What can an eavesdropper do here?

The trick here is that if you’re an eavesdropper, you get to see the following things:

# GOOD PICTURE CONTENT

Well what if I just encrypt the text “memes” with “cooldad1964” as the key, and it happens to encrypt to “b8%&G”?

Then I know that the password was “cooldad1964”. And if “memes” encrypts to something else, then I know my guess was wrong.

So what we’re going to do here is just guess the password. The trick is that we’re going to be able to guess passwords way faster than if we were just typing them into the “Enter the password for this Wi-Fi network” box.

So, get out your pen and paper and blow the dust off that compass and straightedge because it’s time to do some encryption.

Just kidding, we’re not going to use pen and paper you big bozo. We’re going to use a graphics card.

Graphics cards are the part inside a computer that lets the computer be able to play 3D games such as Fallout 4 and Viva Piñata: Party Animals. They also happen to be really fast at encrypting stuff.

So we’re going to get a big list of millions of passwords, and try them all to try and guess the Wi-Fi password.

For one reason or another, hackers have made available big lists of real passwords. By “real”, I mean “someone used this password on a site and that site got hacked so now everyone knows their password”. Sites that got hacked recently and had passwords exposed include LinkedIn, Adobe, and Myspace.

I’m going to guess that your Wi-Fi password is probably in one of the heaps big lists of passwords I have. But to find out which one it is, we’re going to have to encrypt “memes” (in this example) with every single password in the list as the encryption key, and see if any of them match what we saw the Wi-Fi password encrypt to (“b8%&G”).

Hashcat is software that can take a password list and a hash (“b8%&G”) and try to “unhash” it by comparing it to all the passwords in the list. To give you an estimate of how long this takes, my computer can check 10 million passwords in about 10 minutes. Specialised computers made just for password cracking can do this in seconds.

And that’s it. Hashcat will spit out the password, and I can just type it in the Wi-Fi “Enter the password” box. The main part is furiously guessing millions of passwords until we find the right one.

The reason this method of hacking works is because people pick easy-to-guess passwords. English word with the first letter maybe capitalised then one or two numbers? That pattern covers a LOT of people’s passwords and a computer can just quickly check all of them.

If you’re an average internet user, your password for everything is the same, and it’s your pet’s name followed by your house number. What I’m saying is that on average, most Wi-Fi passwords don’t stand a chance against these password lists.


## So what?
So you can probably hack home Wi-Fi. What's the point of doing it?

