"use strict";

// * Selecting an html element

console.log(document.querySelector(".message"));

// todo  in this example we selected an html object with "document.querySelector(".message")" method. By doing this, we selected the element that has class="message" property.

// ! *************************************************************

// * Selecting an html element's text with .textContent method

console.log(document.querySelector(".message").textContent);

// todo By doing this, we selected the element that has class="message" property and get text content out of this html tag.

document.querySelector(".message").textContent = "tahmin etmeye başlayın";

// todo By doing this, we change the text content of the specific element.

document.querySelector(".score").textContent = "Deneme hakkınız 20 defadır";

// ! *************************************************************

// * Selecting an element's value of input field and change its value with .value method

document.querySelector(".guess").value = 18;

// todo By doing this we change the value of input tag.

// ! *************************************************************

// ? how to do dom manipulation for events and how to manipulate html, css elements by using their events  ?

document.querySelector(".check").addEventListener("click", function murat() {
  let guess = document.querySelector(".guess").value;
  console.log(guess);
});

// int above example, we selected the element has class="check", reach its click method by .addEventListener("click"). Then we say when this "click" event happens run the function of murat.

// So in the murat function ,we make program write the value written by user in the input field to the console .

// ! *************************************************************
