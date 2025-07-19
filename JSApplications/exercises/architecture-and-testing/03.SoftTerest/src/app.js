import { homePage } from "./home.js";
import { registerPage } from "./register.js";

const rautes = {
  "/": homePage,
  "/register": registerPage,
};

const navBar = document.querySelector("nav");

navBar.addEventListener("click", onNavigate);

function onNavigate(e) {
  if (e.target.tagName === "A" && e.target.href) {
    e.preventDefault();

    const url = new URL(e.target.href);
    const view = rautes[url.pathname];

    if (typeof view === "function") {
      view();
    }
  }
}

homePage();
