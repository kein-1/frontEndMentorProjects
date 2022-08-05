# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

-Retrieving the value from our input with event object target.value. Initially I wasn't 
sure how to immediately update the text as soon as the user types in the bill 
-Had trouble fitting the left and right items the same height. I used "align-self:stretch" to fix it
-Had trouble aligning the icon with the input text. I set the icon as the background, and then used background-repeat: none. Then to include it with the padding, i used "background-origin" 
-I thought the javscript wasn't too bad. I just used the event object and returned
the button value (which i assigned in HTML) as the tip multiplier
-I used target.value to get the value inside the input text 
-Utilized border-box to fit the contents. Border-box includes the padding and the 
borders. If we specifiy a width of 100%, boxborder accounts for the border and width within the element. I used this technique to fit the input tab to be the width of the full parent div. I set it to width of 100%, which accounts for the borders/padding from the parent div

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```
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

