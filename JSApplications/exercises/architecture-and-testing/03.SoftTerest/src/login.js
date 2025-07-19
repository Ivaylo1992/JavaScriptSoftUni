import { homePage } from "./home.js";
import { showView, updateNav } from "./utils.js";

const section = document.querySelectorAll("div.container.home")[2];

const form = section.querySelector("form");

const url = "http://localhost:3030/users/login";

export async function loginPage() {
  showView(section);
  form.addEventListener("submit", onSubmit);
}

async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(form);

  const email = formData.get("email");
  const password = formData.get("password");

  await login(email, password);
  form.reset();
  updateNav();
  homePage();
}

async function login(email, password) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok || response.status != 200) {
      const err = await response.json();
      throw new Error(err.message);
    }

    const user = await response.json();
    localStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    alert(error.message);
  }
}
