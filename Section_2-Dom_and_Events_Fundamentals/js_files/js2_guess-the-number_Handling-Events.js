"use strict";

document.querySelector(".check").addEventListener("click", function murat() {
  const inputedValue = Number(document.querySelector(".guess").value);

  // here, we converted the value of element from string to a number. Because as we know, javascript generally returns back user inputs as a string, not a number.

  console.log(typeof inputedValue);
  console.log(inputedValue);

  if (!inputedValue) {
    // (!inputedValue)  ifadesi değişken true değilse demektir,  yani bu ifadeyi yazdığımızda, koşul false döndürürse fonksiyonu çalıştır demiş oluyoruz.
    // console.log("normalde true döndürür");

    document.querySelector(".message").textContent = "❌ NO NUMBER";
  }
});
