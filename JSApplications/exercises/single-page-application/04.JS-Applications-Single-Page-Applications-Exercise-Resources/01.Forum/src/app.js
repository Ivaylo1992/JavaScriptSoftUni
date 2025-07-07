import { getFormData } from "./create.js";

const container = document.querySelector(".container");
const main = document.querySelector("main");

window.addEventListener("load", loadHome);
document.querySelector("a").addEventListener("click", loadHome);

const form = container.querySelector("form");
form.addEventListener("submit", getFormData);

function loadHome() {
  container.replaceChildren(main);
}
