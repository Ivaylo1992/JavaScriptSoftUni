import { homePage } from "./home.js";
import { showView, updateNav } from "./utils.js";

const section = document.querySelector("#form-sign-up");
const form = section.querySelector("form");

form.addEventListener("submit", onSubmit);

export function registerPage() {
  showView(section);
}

async function onSubmit(e) {
  e.preventDefault();

  const formData = new FormData(form);

  const email = formData.get("email");
  const password = formData.get("password");
  const rePass = formData.get("repeatPassword");

  if (!email || !password || !rePass) {
    alert("All fields must be filled!");
    return;
  }

  if (password !== rePass) {
    alert("Passwords don't match!");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long!");
    return;
  }

  await register(email, password);
  form.reset();
  updateNav();
  homePage();
}

async function register(email, password) {
  try {
    let url = "http://localhost:3030/users/register";
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.status !== 200 || !response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    let userData = await response.json();

    localStorage.setItem("user", JSON.stringify(userData));
  } catch (error) {
    alert(error.message);
    throw error;
  }
}
