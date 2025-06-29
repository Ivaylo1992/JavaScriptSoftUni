import { homePage } from "./home.js";
import { loginPage } from "./login.js";
import { registerPage } from "./register.js";
import { updateNav } from "./utils.js";

const routes = {
  "/": homePage,
  "/register": registerPage,
  "/login": loginPage,
  "/logout": logOut,
};

document.querySelector("nav").addEventListener("click", onNavigate);
document
  .querySelector("#add-movie-button a")
  .addEventListener("click", onNavigate);

function onNavigate(e) {
  // debugger;
  if (e.target.tagName == "A" && e.target.href) {
    e.preventDefault();

    const url = new URL(e.target.href);
    const view = routes[url.pathname];

    if (typeof view == "function") {
      view();
    }
  }
}

function logOut() {
  localStorage.removeItem("user");
  updateNav();
}

// Render home page
updateNav();
homePage();
