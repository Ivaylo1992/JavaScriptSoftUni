import { homePage } from "./home.js";
import { showView, updateNav } from "./utils.js";

const section = document.querySelector("#form-login");
const form = section.querySelector("form");

export function loginPage() {
  showView(section);
  form.addEventListener("submit", onSubmit);
}

function onSubmit(e) {
  e.preventDefault();

  const formData = new FormData(form);

  const email = formData.get("email");
  const password = formData.get("password");

  login(email, password);
  form.reset();
  updateNav();
  homePage();
}

async function login(email, password) {
  try {
    let url = "http://localhost:3030/users/login";
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = response.json();
      throw new Error(error.message);
    }

    const user = await response.json();
    localStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    alert(error.message);
    throw error;
  }
}
