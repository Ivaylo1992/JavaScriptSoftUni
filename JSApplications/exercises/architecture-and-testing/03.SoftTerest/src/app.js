import { homePage } from "./home.js";
import { loginPage } from "./login.js";
import { registerPage } from "./register.js";
import { updateNav } from "./utils.js";

const rautes = {
  "/": homePage,
  "/register": registerPage,
  "/login": loginPage,
  "/logout": logout,
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

function logout() {
  localStorage.removeItem("user");
  updateNav();
}

homePage();
updateNav();
