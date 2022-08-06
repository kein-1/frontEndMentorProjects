# Tip Calculator App
Coded using HTML/CSS/JS w/ CSS FlexBox

![Tip-Calculator-App](https://user-images.githubusercontent.com/87039063/183218983-4169ee59-3f2c-4fb0-b2a5-cfb191de28c0.png)


# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person
### Links:

- Live Site URL: [https://tip-calculator-app-eb8.pages.dev/](https://tip-calculator-app-eb8.pages.dev/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid


### What I learned

-Retrieving the value from our input with event object target.value. Initially I wasn't 
sure how to immediately update the text as soon as the user types in the bill 

-Had trouble fitting the left and right items the same height. I used "align-self:stretch" to fix it

-Had trouble aligning the icon with the input text. I set the icon as the background, and then used background-repeat: none. 
Then to include it with the padding, i used "background-origin" 
-I thought the javscript wasn't too bad. I just used the event object and returned
the button value (which i assigned in HTML) as the tip multiplier

-I used target.value to get the value inside the input text 

-Utilized border-box to fit the contents. Border-box includes the padding and the 
borders. If we specifiy a width of 100%, boxborder accounts for the border and width within the element. 
I used this technique to fit the input tab to be the width of the full parent div. I set it to width of 100%, which accounts for the borders/padding from the parent div


```js
billTotal.addEventListener("input", (e) => {

    // console.log(e.target.value)
    
    // e.target.value is used to target the value we input in our <input> element
    // which we grabbed 
    totalVal.innerText = e.target.value
    total = e.target.value
    // console.log(document.querySelector(':focus'))
    console.log(total)
})


## Author

- Frontend Mentor - [@kein-1](https://www.frontendmentor.io/profile/kein-1)
