# Frontend Mentor - Launch countdown timer

![Design preview for the Launch countdown timer coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

**To do this challenge, you need a good understanding of HTML, CSS and JavaScript.**

## The challenge

Your challenge is to build out this countdown timer and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)
- **Bonus**: When a number changes, make the card flip from the middle

Want some support on the challenge? [Join our Slack community](https://www.frontendmentor.io/slack) and ask questions in the **#help** channel.


### Links:

- Live Site URL: [https://sunnyside-landing.pages.dev/](https://sunnyside-landing.pages.dev/)

## My process

-Toughest part was figuring out how to use setInterval function and how to stop it. I realized that setInterval returns an ID. So we can use a global variable to keep track of how long the countdown has been running and then when that variable hits 0, we call the clearInterval() with the ID returned by setInterval
-To get the countdown to change, I used document.getElementByID for each div and updated the values with each setInterval call
-I used moment.diff() to take the difference between the future moment object date and the current moment() object date. The values are returned as days, hours, minutes, and seconds


### Built with

-HTML/CSS/JS
-Moment.js
### What I learned

-Used setInterval for the first time. Javascript timer are all in milliseconds
-Used Moment.js, a popular JS package that deals with date and time
-Centering elements: I realized for position: absolute, top 50% means the item's top edge will be shifted down based on 50% of the container's height. This means the element won't necessarily be cenetered
-Remember with translate, it uses the element's dimensions while using top,left etc with position:absolute will use the parent's dimensions
-To center things with position and translate, remember we must translate(-X) and (-Y) 50% of its height and width BECAUSE it is the edge of the item that is 50% from the parent container. We need to move this backwards. The edge and the midpoint of the item is 50% of its own width/height!
-Really my first time using CSS Psudoelements :before and :after. These are basically style elements without using HTML. We must include a "content" attribute. 

```

## Author

- Frontend Mentor - [@kein-1](https://www.frontendmentor.io/profile/kein-1)
