---
layout: post
title: "Stealing Chrome cookies without root"
date: 2018-09-26 16:20:12 +1100
blurb: I found a new way to trick Google Chrome into giving up its secrets.
description: Stealing Chrome Cookies without root or password on OSX, Linux, and Windows via Remote Debugging Protocol.
permalink: /stealing-chrome-cookies-without-root
colour: blue
image: /img/chrome_cookies.png
hidden: yep
---

# keep it secret, keep it safe
this is a draft post, and ya boi alex shared it with you because you are a trusted friend and ally. pls don't share it with anyone else unless you're like a spy or something in which case it's too late

* pls do not post the link anywhere (or google might pick it up)
* pls not not tell ur spy comrades about this ##technique, since it's secret as far as i know
* i'm planning to publish this at the same time as other people write about it, so you can talk about it after then

this message will self distruct in 3-5 business days

---

If you ask Google Chrome nicely, it will give you a user's Chrome Cookies.

Once you've stolen the cookies, you're logged in as your victim to whatever websites they've logged in to.

Unlike other ways of getting Chrome Cookies, you don't need to have the user's password/root access if you do it this way. You just need to be able to execute code on their computer. It works by using Chrome's Remote Debugging Protocol.

This blog post is about how the technique works, how I found it, and man's hubris.

If you wanna skip this dumb blog post and just get the "exploit", here ya go: [https://github.com/defaultnamehere/cookie_crimes](https://github.com/defaultnamehere/cookie_crimes). Don't spend it all at once.

If you wanna know how it works, you need only _find within yourself the strength to scroll this post._

---

## Step 0: Reconsider your life choices

Imagine that, _for some reason_, you've hacked someone's computer. I dunno maybe you're like a spy or something?

Let's call your fictitious victim, say, Elon.

Specifically, you've got the ability to execute code on Ol' Musky's computer. That's hacking, and you're already going to be slam jammed into the shadow realm for your crimes, so ya may as well do some more.

One obvious crime you might want to do with this access is to steal Elon's Chrome cookies. This would let you log in as him to anything he's logged in to. Oooooh yeah definitely. Imagine the trouble you could get up to with _that_.

### How do cookies work?

You know how you don't have to log in every time you go to Facebook? How when you go to `facebook.com` it just shows you your timeline? How does Facebook know it's you?

It's because when you log in to Facebook, Facebook gives you a cookie, which lives on your computer. Next time you go to Facebook, you just show it that cookie, and it lets you in without having to type your password again.

It's like those wristbands they give you at the club to show you're of drinking age, except I'm not sure if they still do that because I haven't been to an Event since the release of Stardew Valley.

### And if someone were to....\*sideways look\* _steal_ those cookies?

For example, if you had Elon's Facebook cookies, it doesn't matter whether he has a really good password, 2 Factor Authentication, or is particularly good mates with zucc and the boys. You can just put Elon's Facebook cookie in you own browser, and go to `facebook.com`, and you'll see _Elon's_ Facebook account logged in.

It's as easy as that.

### Chrome's cookie security

Let's assume Elon, the absolute chap, has OS X - but this works on Windows and Linux too.

Elon's delicious, tasty Chrome cookies live in a file on his computer. Cleverly, Chrome encrypts his cookies with its own "Chrome Safe Storage" password. This password lives in Elon's Login Keychain, so the only way to get the cookies is to unlock the keychain by typing in his password.

This is a perfectly legit way to get someone's cookies, but the reason we're here today is I'm pretty sure I found a way to skip all that.

Why should we have to decrypt the cookies? After all, the user can get their own cookies from Chrome without typing their password. Surely there's a way to just get Chrome to give us the cookies, if we ask nicely?


## Step 1: Run Headless Chrome

Chrome can run in headless mode now. This means it can run without actually
having a window displayed. Everything happens in the terminal. This is deeply
powerful and probably going to all go wrong one day.

### User data directories
Chrome stores your cookies, history, deepest secrets, etc. in a `user-data-dir`. By default (if
you have no [Chrome Profiles](https://support.google.com/chrome/answer/2364824?co=GENIE.Platform%3DDesktop&hl=en)), this will be `$HOME/Library/Application Support/Google/Chrome/`.

Needless to say, this directory is The Good Stuff, and we want to be extremely up in it.


### Enabling remote debugging

Because we live in a dystopian future, Chrome allows you to remotely control it for debugging and automation reasons.

We're going to set up a headless Chrome window, using the same `user-data-dir`
as our victim.

Here's what to run:

```
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
--headless \
--user-data-dir="$HOME/Library/Application Support/Google/Chrome/" \
https://gmail.com \
--remote-debugging-port=9222
```

This sets remote debugging listening on localhost:9222 (the default port for
Chrome Remote Debugging). It won't open a browser window, either. We need to tell headless Chrome browse to something so we can open a tab and start debugging it. You can replace `gmail.com` with anything you like.

At this point, you can view any page as if Elon opened it in a new tab (and so, see all his Facebook messages, in our example). You can do that by adding `--dump-dom` to the command above, which will print out the HTML of the page you ask for (`gmail.com` above). But that seems a bit tedious and not very stealthy, we can do better than that if we just _believe_.

Normally, you're supposed to like, open a _second_ Chrome, point it at the first Chrome, and use it to debug Chrome itself. Ya we're not gonna do that. We're gonna remotely debug Chrome with `curl`.

C'mon don't act like this isn't absolutely _wild_. There are some things humans were just never meant to do.

## Step 2: Remotely debug Headless Chrome

Through furious and intense googling, I learned that it might be possible to get cookies out of Chrome by remotely debugging it. So, I set off to learn how Chrome's Remote Debugging works.

Basically, that remote debugging port (`localhost:9222`) is waiting for you to speak some janky websocket protocol, in which you can issue commands to Chrome. If you know how to say the command, Chrome will just.... do it.


### Sidenote: The Chrome Dev Tools are absolutely Loose
When I was trying to figure out whether this was possible, I stumbled across this page: [https://chromedevtools.github.io/devtools-protocol/](https://chromedevtools.github.io/devtools-protocol/)

This is some documentation for the Protocol used by the Chrome Developer Tools (`Right Click > Inspect Element`, our trusted friend and ally). Presumably, on this page, some nice people at Google are graciously going to explain to me, an Outsider, how to use their Ancient and Powerful magic.

They say "hey, if you want to remotely debug Chrome, you need to speak the Remote Debugging Protocol."
I'm ready for this page to teach me about how to remotely debug Chrome, but it says "we don't release that kind of information to punks like you".

They casually tell you to sniff and reverse-engineer the protocol if you want to know how it works, since the only client for it is the Chrome Dev Tools themselves. The way they tell you to sniff it is using the Chrome Dev Tools to inspect the _CHROME DEV TOOLS THEMSELVES_, and view the websocket data that the _first_ set of Chrome Dev Tools is sending. The ease with which they suggest this solution is quite stressful.

Finally, they have a section called "How is the protocol defined?", which has two links to json files you're supposed to read, both of which 404.


### How the heck does Remote Debugging work?

According to the Cursed Document linked above, there's a secret, barely documented `/json` endpoint on the remote debugging port. Let's view it.


In a new terminal window, run
```
$ curl -s localhost:9222/json 

[ {
   "description": "",
   "devtoolsFrontendUrl": "/devtools/inspector.html?ws=localhost:9222/devtools/page/7404BF41DC4E7512E0431577BABCE18A",
   "id": "7404BF41DC4E7512E0431577BABCE18A",
   "title": "about:blank",
   "type": "page",
   "url": "about:blank",
   "webSocketDebuggerUrl": "ws://localhost:9222/devtools/page/7404BF41DC4E7512E0431577BABCE18A"
} ]
```

See that `webSocketDebuggerUrl`? That's what we want.

## Step 3: Issue the command over the websocket protocol
With the magic URL we got in the previous step, we can now speak the Ancient Language to control Chrome.

First we'll need something that can speak the websocket protocol. You can use anything, but I googled for some tool called `wsc`. In the [proof-of-concept](https://github.com/defaultnamehere/cookie_crimes) (which I made just for you) the whole thing is done in Python.

### Issue the command

Using `wsc`:

```
wsc ws://localhost:9222/devtools/page/7404BF41DC4E7512E0431577BABCE18A 
Connected to ws://localhost:9222/devtools/page/7404BF41DC4E7512E0431577BABCE18A
>
```
Oooh. Looks like a command prompt. If we knew what to type here, we could tell Chrome what to do.

I'm going to save you the 50 open Chrome tabs, reading of Ruby from 2012 on GitHub, and [discovery of the very bug report which created this feature](https://bugs.chromium.org/p/chromium/issues/detail?id=668932) and just show you the command.

```
>{"id": 1, "method": "Network.getAllCookies"}
{
    "domain": "mail.google.com",
    "expires": -1,
    "httpOnly": false,
    "name": "GMAIL_AT",
    "path": "/mail/u/0",
    "secure": true,
    "session": true,
    "size": 42,
    "value": <unencrypted cookie value appears here>
  },
  ...<the rest of the cookies>
```

![keys](/img/keys.jpg)

Because we asked nicely, Chrome just _gives_ us the cookies. This bypasses the whole Chrome Safe Storage password thing because Chrome itself decrypts the cookies.

And we did it all without needing to become the root user, or otherwise know Elon's password.

You can plug these cookies into a Chrome Extension (for example, [EditThisCookie](https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg)), and you'll be logged in to Elon's gmail if you just go to `mail.google.com` in your browser.

Aaaaaand that's it. Crimes successful. Directed by Quentin Tarantino.

---

If you want to try this at home, here's the code to just straight up do it for you: [https://github.com/defaultnamehere/cookie_crimes](https://github.com/defaultnamehere/cookie_crimes]).

I'm pretty sure this is the easiest way of getting Chrome cookies once you're in someone's computer. I'm sure not going to bother with any other method anymore.


### Prevention

If you would not like this attack being used against you, I can wholeheartedly recommend not letting someone else execute code on your computer.

The industry-standard best practice is to rapidly acquire blessed amulets, mysterious crystals of unknown but surely spicy origin, and/or pay-as-you-go racketeering schemes to prevent the aforementioned execution of code.

Failing that, I guess there's also:

#### Channel-binding cookies
The good folks online have come up with a way to make stealing cookies harder. It's called [Channel-Bound Cookies](http://www.browserauth.net/channel-bound-cookies). This lets websites ask you to prove that you have a special Token Binding Key before you can use cookies on that website.
This means that if you want to use cookies you stole from someone's machine, you also have to steal their Token Binding Key, and use it to impersonate their browser.

This feature is [in Google Chrome](https://www.chromestatus.com/feature/5097603234529280), but [disabled by default](https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/OkdLUyYmY1E), and [being removed accorded to the heated discussion in this thread](https://groups.google.com/a/chromium.org/forum/?utm_medium=email&utm_source=footer#!msg/net-dev/AjFQjBmaEQE/_3DM1hwGCQAJ)

Even if Chrome used it, most websites don't use Channel-Binding. This is because, well, it's not much harm to the website if Elon's cookies get used by someone else. That's more Elon's problem, in their eyes.

### Detection
In theory, people can detect the theft of cookies. Google, for instance, knows that they gave the cookie above to Elon. They can also know, that you, with a different browser, OS, and IP address, might not be Elon. They can also detect your channel-binding errors. But hey, I haven't seen this technique fail because of this so far.


# FAQ

### Wait so you have to already be running code on someone's computer for this to work? That's not a big deal at all!
I mean yeah pretty much you're right. It's not that big a deal. Nobody panic. Everybody stay cool and fresh. The kinds of people who are stealing people's browser cookies are just gonna have an easier time since there's no more decrypting.

### Are you going to tell Google about this critical security flaw?
Nah, they know about it. It's a feature of Chrome, after all. I even saw them [deciding to add it](https://bugs.chromium.org/p/chromium/issues/detail?id=668932).

### Isn't it kinda irresponsible to publish this without warning?
see you in hell i guess

### My head hurts a little and I feel tired.
Maybe you're dehydrated. Try drinking some crisp cool water.

### Does this work on Firefox or \*shifty eyes\* Internet Explorer/Edge?
Dunno, I haven't tried it and I have no idea how these browsers work. _You_ could try finding out.

### Hey so how did you end up finding this? Like why did you need to get someone's Chrome cookies in the first place?
Thanks for taking the time to read this blog post.



---

I wrote this because they were out of pearls at the bubble tea place. You can talk to me about it on Twitter if you want: [@mangopdf](https://twitter.com/mangopdf)

Thanks to [@hackgnar](https://twitter.com/hackgnar), who wondered aloud "there must be _some_ way to get the cookies without root, since the user themself can get them."

Thanks to <TODO: SOMEONE>, for their guidance in pointing out that headless Chrome and remote debugging is a scary combination.

