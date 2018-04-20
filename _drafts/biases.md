

"Have you ever....."


What is this?
Hi! This is a list of common mistakes brains make. Knowing what they are might make you less wrong! Wow, doesn't that sound great? Just think of all the Business Value you could create.

Cognitive Biases
A cognitive bias is a bias in the way we think. It’s a way in which we will be predictably wrong.

Below are several examples, so please prepare your browser because we’re going on a ride.

Confirmation bias
Imagine playing the following game. A mysterious number wizard is thinking of a rule that applies to lists of 3 numbers. Your goal is to discover the rule.

I have included a picture of a wizard to help you get into the zone.

Alexander Hogue > 2017/12/03 > Cognitive biases and how to be less wrong > wizard-1454385_960_720.png



This super-chill wizard tells you that [2, 4, 6] fits the rule.

You say any 3 numbers you like, and the wizard will tell you “Yes” if the numbers fit the rule, and “No” if they don’t.

You can give the wizard as many lists of numbers as you like, and when you are confident of the rule, guess what it is. You only have one chance to guess the rule.

Knowing that [2, 4, 6] fits the rule, what would you ask the wizard first?

I have gone to great lengths and suffered much personal hardship to bring this game to you in this very document. You can play it below. When you think you know the rule, expand the text below.


// yikes something like this
"Wait a minute did you just put this wizard game in a BLOG POST? Is there no end to the madness that you'll perpetuate for the sake of GAGS"

That's the power of biases, baby



<div id="game">
<input id="n1" type="number" value="2">
<input id="n2" type="number" value="4">
<input id="n3" type="number" value="6">
<hr/>
<input id="check" type="button" class="aui-button aui-button-primary" value="Ask the wizard">
<div id="feedback"></div>
</div>
<script>
    var matches = function(n1, n2, n3) {
        return n1 < n2 && n2 < n3;
    }

    var check = function() {
        var n1 = Number($('#n1').val());
        var n2 = Number($('#n2').val());
        var n3 = Number($('#n3').val());


        var result = matches(n1, n2, n3) ? "Yes" : "No";
        // Look it's fine.
        $('#feedback').append('<p class="guess">' + [n1, n2, n3].join(", ") + '     ' + result + '</p>');

    }
    $('#check').click(check);

</script>
<style>
#game {
margin: 0 auto;
width: 100%;
text-align: center;
}
input {
width: 40px;
text-align: center;
}
#check {
margin-top: 10px;
margin-bottom: 20px;
width: 150px;
}


</style>





Most people tend to try the following:

[4, 6, 8] - yes

[8, 10, 12] - yes

and then say “the rule is that the numbers go up by 2 every time”.

This question has an 80% failure rate. I got it wrong when I first saw it.

Sometimes people try this:

[3, 6, 9] - yes

[9, 12, 15] - yes

And then confidently say that the answer is “the numbers go up by 3 every time” (even though this rule does not fit [2, 4, 6]).

The rule is only that the numbers must be increasing.

In both the cases above, the person came up with an idea (“the numbers go up by 2 every time”), and did experiments to see whether the wizard’s rule supported their idea.

The trouble is, they looked only for evidence that supports their idea, and didn’t try to find evidence that invalidates their idea. They didn’t try and find a “no” answer, they looked only for evidence that agreed with what they already thought.

Remember, they had as many guesses as they want before they had to commit to knowing the rule. But the participants were so confident in their answer, since they'd seen nothing to disprove it (and hadn't asked!) that they guessed the rule early, and incorrectly.

Imagine that you’d guessed like this

[2, 4, 6] - yes

[1, 2, 3] - yes (This means “goes up by 2 every time” is wrong)

[3, 2, 1] - no (This is evidence for “decreasing” being wrong)

[21, -5, 206] - no

[101, 102, 103] - yes

[5, 83, 208] - yes

[10, 5, 20] - no

…….

and so on.

You'd be more likely to test out new hypotheses, and come to the correct answer.

By searching for evidence that makes your current understanding wrong, you can save yourself a lot of wrongness, by quickly discarding false beliefs.


A security example
In the security world, you might see an IP address from Russia. This might make you think “this IP address is a hacker”. Running with this “the IP is bad” theory, you see that the IP has visited “/admin” type URLs on your webapp. Since you suspect the IP is bad, you look for more evidence that proves the theory you already have. You look at the webapp’s logs, and find that this IP has never been seen before, and it’s reset the password for a customer’s account.

With all this evidence, you sound the alarm and trigger a security incident.

All the questions asked were ones that confirm the existing theory, instead of looking for easy ways to prove it wrong. What if you asked “do we have any offices in Russia?”. You might have have looked up the fact that yes, you do, and a Support Engineer has just started working from one.

If you suspect something really surprising is happening (we’re being hacked!), look for easy ways to disprove your theory (easy ways to show the IP address is not a hacker). It can often save you time, and save you from making mistakes!

Base rate neglect
Consider this:



Is it more likely that Michael is a shy reverse engineering specialist, or a shy salesperson?



(for the sake of this question, reverse engineering means converting assembly code into C by hand)

Your intuition might see “shy” and “reverse engineering”, and consider how well they match. Your brain says “shy” matches “reverse engineering” (a highly technical task, of which enthusiasts are stereotypically shy and introverted) better than “shy” matches “salesperson”, who are stereotypically confident and smooth-talking.

So, you probably answered “Michael is more likely to be a reverse engineering specialist”.

However, there are many, many (>100x) more salespeople in the world than reverse engineering specialists, and most people do not consider this when making their decision.

If you knew nothing about Michael, and were asked whether he was a salesperson or reverse engineering specialist, you should say “salesperson”. Why? Because salespeople are far more common than reverse engineering specialists, and you have no other information to go on. This is a rational choice, and you are right to make it.

Unfortunately, most people forget about the base rates (chance of a random person being a reverse engineer) because they are not readily available information at the time the decision is being made. In our example, you should adjust your probability of “shy” matching “reverse engineer” by how likely someone is to be a reverse engineer in general.

This is an example of your brain substituting the question (shy reverse engineer or shy salesperson?) with an easier one (“are reverse engineers shy?”). In this substitution, the brain latches on to a detail about a specific example (reverse engineers tend to be shy) without considering the general characteristics the example has as a result of it being in a larger group or type (there are very few reverse engineers).

Another example
If you are in a plane, and the plane crashes, that would be very bad. Everyone’s lives could be at risk. This might make you worry about the plane crashing, whether you could swim to safety, and so on.

How likely is the plane to crash?

In 2014, there were around 37,000,000 flights, and 111 crashes. That means for a randomly selected flight, the chance of a crash is 37,000,000 / 111 ~= 0.0003%. That’s about a 3 in 1 million chance. You are more likely to have a pair of identical twins on your flight than crash. This varies between airlines as well. Virgin Australia has never had a fatal accident. In the same way that you don’t worry about buildings collapsing on you randomly, you shouldn’t worry about your plane having an accident.

In both of the above situations, the “how likely it would be to happen” is the base rate. For whatever reason, people tend to neglect it.

A security example
You are a software developer, and an automated security scanner has picked up some vulnerabilities in your webapp, an online booking system for people who want to interview you on how you keep your hair so good.

Your server uses an old version of SSL, which uses weak encryption keys.

You might imagine the potential Bad Stuff that could happen to your users if your SSL was broken. An attacker could see the usernames, passwords, and credit card numbers of your customers if they bypassed the SSL.

How much should you be worried?

You might see “passwords” and “credit card numbers”, and your brain might recognise these to be secret, sensitive things, and so an attacker having your credit card numbers would definitely be bad. Maybe you'd lump this vulnerability (weak SSL) into the category of “generally pretty bad” because you are thinking about stolen passwords and credit card numbers.

In this case, you'd have accurately measured how bad the situation could be, but overlooked how likely the bad situation is to happen.

For an attacker to exploit this problem, they need to do ALL of the following

Know about it

Be in a man-in-the-middle position on the network connection (On the internet? No way! On wifi? Probably not!)

Have the computing power to break the crypto

Care enough about the data to chose to do all of the above

I would put this into the category of “not gonna happen”. The main factor is the man-in-the-middle network position. Who’s man-in-the-middleing the internet? Just the NSA, and they’re not worried about SSL. Someone could feasibly MITM your local network, sure, but then they have to be on the same network as you, which limits the space of attackers to “people who can connect to your network” rather than “the whole world”. For your home wifi, attackers would have to be physically near your home (providing you aren’t serving anything on the internet). That’s very unlikely.

So, in this case, the badness of the situation is trumped by how unlikely it is to happen.

So, how much should you worry?
The level you should (statistically) be worried about a bad thing happening is:

How bad it would be * How likely it is to happen

I had my top scientists working on this equation, and they came up with the following coloured boxes


Not likely to happen	Could happen I guess	Happens all the time
No big deal	


Kinda bad	


Real bad	don't forget this one	

I've pointed out one of the boxes in particular, which one people tend to overlook. If a real bad thing is unlikely to happen, you don't have to worry about it nearly as much as if it's certain. It feels weird to write that out, since it's obvious if you pay attention to it, but it turns out we aren't that good at paying attention to it.



How can you apply this to problems you routinely solve?




Whoa, I have totally just seen examples of myself having these biases
Great! Now you know how you think a little better.

There are a lot more biases out there, like the Halo Effect, the Sunk Cost Fallacy, Regression towards the mean, and the Availability Heuristic. Google any of these for a wild time.

I hope you got something out of this blog post, and use your newfound knowledge to achieve Business Excellence.


