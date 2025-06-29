import { homePage } from "./home.js";
import { showView } from "./utils.js";

const section = document.querySelector("#add-movie");
const form = section.querySelector("form");

export function createPage() {
  showView(section);

  form.addEventListener("submit", onSubmit);
}

async function onSubmit(e) {
  e.preventDefault();

  const formData = new FormData(form);

  const title = formData.get("title");
  const description = formData.get("description");
  const img = formData.get("img");

  if (title != "" && description != "" && img != "") {
    await createMovie(title, description, img);
    homePage();
  }
}

async function createMovie(title, description, img) {
  try {
    let url = "http://localhost:3030/data/movies";
    const user = JSON.parse(localStorage.getItem("user"));

    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": user.accessToken,
      },
      body: JSON.stringify({ title, description, img }),
    });

    if (response.status != 200 || !response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
  } catch (error) {
    alert(error.message);
    throw error;
  }
}
