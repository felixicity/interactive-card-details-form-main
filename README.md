# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
- I started with the html markup for the page
- use the mobile first approach when styling befroe the desktop design
-started writing some code in javascript to handle the form validation, submission and switching of pages

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
-Javascript



### What I learned
  I learnt about the html <picture> element and how it can be used to switch images. I practiced thinking responsively in css and
  not only working with the DOM but also event bubbling and delegation in JS. I also learnt about the "keyup" event and used some array methods to achieve the finall result. 

To see how you can add code snippets, see below:

```html
        <picture>
              <source media="(min-width:550px)" srcset="images/bg-main-desktop.png">
              <img src="images/bg-main-mobile.png" alt="background Image">
        </picture>
```
```css
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin:0;
}
```
```js
        submitBtn.addEventListener("click",e =>{
                e.preventDefault()
                console.log("submitting...")
                completePage.style.display = "block"
                formPage.style.display = "none"


        const number = value
        const newArray = [number.slice(0,4), number.slice(4,8) , number.slice(8,12) , number.slice(12,16)]
        const joined = newArray.join(" ")
        cardNumberDisplay.textContent = joined

})
```



### This section to outline areas that I want to continue focusing on in future projects. These could be concepts I'm still not completely comfortable with or techniques I found useful that you want to refine and perfect.

-Ensuring that all values in the form are validated before submission. My submit button could just be clicked before inputing
values.
-Trying to add border property and linear-gradient to the input fields. I managed using the outline property for the focus state but the linear-gradient for the active state wasn't working.


### Useful resources

- [FormSpree](https://formspree.io/blog/accessible-forms/) - This helped me form accessibility best practices. I really liked this pattern and will use it going forward.
- [Youtube Video](https://youtu.be/B2WL6KkqhLQ) - This is an amazing article which helped me finally understand the picture element. I'd recommend Kevin Powells channel to anyone wanting to improve their css skills.


## Author

- Website - [Chukwu Felix](https://www.your-site.com)
- Frontend Mentor - [@Felixicity](https://www.frontendmentor.io/profile/felixicity)

