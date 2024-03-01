const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");
const text = document.querySelector(".text");

toggle.addEventListener("change", () => {
    body.classList.toggle("dark");
    sunIcon.classList.toggle("bx-sun");
    moonIcon.classList.toggle("bx-moon");
    text.classList.toggle("light-text");
});