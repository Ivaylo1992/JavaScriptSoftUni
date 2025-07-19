import { homePage } from "./home.js";
import { showView, updateNav } from "./utils.js";

const section = document.querySelectorAll("div.container.home")[1];

const form = section.querySelector("form");
form.addEventListener("submit", onSubmit);

const url = "http://localhost:3030/users/register";

export async function registerPage() {
  showView(section);
}

async function onSubmit(e) {
  e.preventDefault();

  const formData = new FormData(form);

  const email = formData.get("email");
  const password = formData.get("password");
  const repeatPassword = formData.get("repeatPassword");

  if (password !== repeatPassword) {
    alert("Passwords don't match");
    return;
  }

  if (password.length < 3) {
    alert("Password should be at least 3 charecters");
    return;
  }

  if (email.length < 3) {
    alert("Email should be at least 3 charecters");
    return;
  }

  await register(email, password);
  form.reset();
  updateNav();
  homePage();
}

async function register(email, password) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.status !== 200 || !response.ok) {
      const err = await response.json();
      throw new Error(err.message);
    }

    let userData = await response.json();

    localStorage.setItem("user", JSON.stringify(userData));
  } catch (error) {
    alert(error.message);
  }
}
