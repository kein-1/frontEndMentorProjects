# Frontend Mentor - Sunnyside agency landing page

![Design preview for the Sunnyside agency landing page coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

**To do this challenge, you need a basic understanding of HTML, CSS and JavaScript.**

## The challenge

Your challenge is to build out this landing page and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

Want some support on the challenge? [Join our Slack community](https://www.frontendmentor.io/slack) and ask questions in the **#help** channel.

### Links:

- Live Site URL: [https://intro-section-nav-bar.pages.dev/](https://intro-section-nav-bar.pages.dev/)

## My process

### Built with

### What I learned

-Centering an element with position absolute. This was tricky in the mobile design and I had to figure out how to center the nav bar links when they appear. A common 
approach is to use the following code:  

```
.parent{
  position: relative;
}
.child{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

What this means is that absolute's position is relative to the parent's. So top and left 50% means it is 50% away from the parent's top and left. This moves the item
closer to the bottom right. Then, we need to center it by using translate here. Translate here is based on the child's width and height values, not the parents 
```

## Author

- Frontend Mentor - [@kein-1](https://www.frontendmentor.io/profile/kein-1)
