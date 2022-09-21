# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](design/screenshot.png)

### Links

- Solution URL: [URL here](https://www.frontendmentor.io/solutions/intro-section-with-dropdown-navigation-using-bootstrap-5-HVU9qNokYp)
- Live Site URL: [URL here](https://intro-section-with-dropdown-navigation-main-eight.vercel.app/)

## My process

### Built with

- HTML5
- CSS custom properties
- Bootstrap V5.1.3
- Javascript

### What I learned

I haven't heard nor use Bootstrap's Offcanvas component before. By doing this challenge, now I know how to use that component. And also I haven't use custom image for dropdown icon. From this challenge, I learnt how to do it too. But not perfect one tho :(

```js
var navbarDropdowns = document.getElementsByClassName('dropdown-toggle');

for (var i=0; i<navbarDropdowns.length; i++){
  navbarDropdowns[i].addEventListener("click", function(){
    var img = this.getElementsByClassName("dropdown-icon")[0];
    img.classList.toggle("change-icon");
  })
}
```

### Continued development

I'll try to improve that dropdown icon change on user click to be more perfect.

### Useful resources

- [Bootstrap 5 - Offcanvas](https://getbootstrap.com/docs/5.2/components/navbar/#offcanvas)
- [Beautiful CSS box-shadow examples](https://getcssscan.com/css-box-shadow-examples) - This is an amazing site where I can find and get lots of beautiful box shadows.

## Author

- GitHub - [SYadanar](https://github.com/SYadanar)
- Frontend Mentor - [@SYadanar](https://www.frontendmentor.io/profile/SYadanar)
