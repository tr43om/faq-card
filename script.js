"use strict";
const question = document.querySelectorAll(".faq__item");
const answer = document.querySelectorAll(".faq__item--sub");

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {
    answer[i].classList.toggle("hidden");
    question[i].classList.toggle("faq__item--change");
    question[i].classList.toggle("bold");
  });
}
