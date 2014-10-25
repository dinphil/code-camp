<div class="hidden"><meta property="og:image" content="http://dinphil.github.io/code-weekend/assets/img/logo.png"><link rel="shortcut icon" href="assets/images/favicon.png"><link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"><link rel="stylesheet" href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,400,300,600,700' type='text/css'></div><img class="full-img" src="assets/img/logo.png"><div class="nav-items"><div class="nav-item" id="git-menu">Git/Command Line</div></div>

Code Camp
============
Learning the basics of real code
--------------------------

Code Camp is a workshop series hosted by the Dining Philosophers at the University of Pennsylvania to teach students real-world coding skills from scratch. These workshops are highly interactive and offer participants a lot of support in the form of mentors that help as participants code.

> These workshops have been organized by the Dining Philosophers with the help of many talented individuals. Individual workshops will be credited to the people that made and ran them.


Intro to Git and Command Line <a id="git-section"></a>
==================================
with Brynn Claypoole
------------------------------------

Schdeuled for October 25th, 2014. The tutorial will run from 3 PM to 5 PM in McClelland.

###Installing Git

Start off by getting ready to use Git via command line. You can find downloadable versions [here](http://git-scm.com/downloads). You may already have git installed: If you have a Mac/Linux machine, search for the "Terminal" application, then type "git" and hit enter. If it doesn't say "command not found", you should be good! Windows users should search their applications for "Git Bash".

###What is command line?

Have you ever seen programmers, maybe in class, in the computer lab, or on TV, typing into a black box on their computer screens? 

That box is known as a command line. Command line is a less visual way of interacting with your computer. In some ways, it's like a "Finder" window. It allows you to open files and navigate through your directories. It's also the interface for interacting with your computer in more complicated and technical ways. You can run processes and programs, ping Internet servers, and do a whole host of other things that require some technical knowledge.

![Terminal](assets/img/terminal.png)

This is what command line looks like on a Mac.

On Mac and Linux computers, you can access it by searching for the "Terminal" program. In Windows, it's called "Command Prompt". Be careful, because the languages used on these different operating systems are different. Macs use Unix, which is extremely similar to Linux. Windows machines have their own command prompt language that uses different syntax from Unix/Linux.

There are some *basic commands* you should be able to use:

- `ls` (`DIR` on Windows) lists all the files in the current folder.
- `cd` allows you to change directories. For example, `cd Documents` will move into the folder "Documents", if there is such a folder in the current directory. You can use `ls` (`DIR` on Windows) to check that your current folder contains "Documents".
- `mkdir` allows you to make a folder. So `mkdir New` makes a folder named 'New'.
- `mv` (`move` on Windows) will let you move files and folders. In Terminal you can do `mv ~/Desktop/MyFile.rtf /Volumes/Backup/MyFolder` to move MyFile.rtf. On Windows `move c:\windows\temp\*.* c:\temp` will move everything from C:\windows\temp to C:\temp.

Command line has some funky syntax that you'll need to get used to:

####So...I'm lost.

Understanding how to navigate in your command line can be weird if you've never done it before. I recommend moving around folders in command line while clicking around a Finder window. Perhaps start in your home directory (frequently represented with `~`) and move into your Documents folder, both on command line and in Finder.

####What are all of these dots for?

Dots can be used as shortcuts for certain commands. `.` is a shortcut referring to the folder you're currently in. `..` is the folder that contains the folder you're currently in. For example, if you're currently in a "Git Code Camp" directory within a "Fall 2014" folder, `.` would refer to "Git Code Camp" and `..` to "Fall 2014".

####Regex sounds like a medication.

It's not. Regex stands for "regular expression", which is a notation typically used for searching. You mainly just need to worry about the `*`, which means "anything that looks like this". For example, if you're trying to move all .txt files in a folder, you can do it without manually moving each one. Just type in `*.txt`, and your command will apply to every file in that folder with a .txt ending.

####Command line gets kind of tedious...

Yeah, we noticed. There are a few shortcuts you can use to make your terminal experience significantly more pleasant. You can frequently hit tab to autocomplete commands or file names. You can also use the arrow keys to move through your command history. For example, the up arrow replaces your current command with the one before it.

###What is Git?

Git is a beautiful gift from the heavens that helps us with something called source control. Imagine (or think back to) a worst-case situation: You've been working on your code for hours and hours. It was kind of working twenty minutes ago, but you need to fix a couple things to get it working. This time, when you try running it, nothing works! You've changed a lot of different things in twenty minutes and have no idea what broke it. You'd really like to just go back to the version you had twenty minutes ago, but there's no easy way to do that.

Git is essentially a language (or group of concepts and commands) for fixing this problem via source control. In short, you save snapshots of your code (called _commits_) from different points in time. One project and all of it's versions are stored in a _repository_, or _repo_.

![Github logo](assets/img/github-logo.png)

####And Github?

Github is the online tool for using Git. You can:

- Quickly save commits in repos online (so you don't lose good work or eat up memory on your computer).
- Work collaboratively with peers on class, work, hackathon, or outside projects.
- Create a profile of projects to show off to employers.
- Find open source projects you think are interesting and contribute.

Most importantly, Github has an adorable mascot named Octocat (in the logo above). They have dozens of unique and fun stickers with different versions of Octocat that coders treasure like gold.

![Github stickers](assets/img/octocat-stickers.jpg)

###Key Concepts

When working with Git and Github, it's easiest to imagine that your code is being stored in two different places: locally, on your own computer, and remotely, on Github's servers (the alias for that location is *origin*). Generally, you edit code on your computer, create a commit (snapshot), and send it to the Github servers. Github stores all previous versions of your code.

###Basic Git Commands

_Cloning_: When you clone a repository, you take all of the code from a repo and create a local version of it on your computer. This is generally how you get code off of Github so you can actually edit it. To clone a repo, try: *git clone (HTTPS address of online repo)*, like:

        //Clone a repo called "node-basic" from user "bclay" 
        git clone https://github.com/bclay/node-basic/
        //Go into the repo
        cd node-basic

_Forking_: Forking allows you to copy the entierty of someone else's repo onto your Github account online. You still need to clone it (from your account) to get the code on your computer. You can fork a repo by clicking the "Fork" button on a repo's Github page.



<div class="footer"><p>&copy; Dining Philosophers 2014-15. Page created by <a href="http://pvrnav.com">Pranav Vishnu Ramabhadran</a>.</div>

<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="assets/js/nav.js"></script>
<script src="assets/js/FlowType.js"></script>
<script type="text/javascript">
    $('body').flowtype({
        minimum   : 500,
        maximum   : 1000,
        minFont   : 16,
        maxFont   : 65,
        fontRatio : 40
    });
</script>
<script>
    $(window).load(function(){
        $('.loading').fadeOut('200');
    });
</script>
