import { detailsPage } from "./details.js";
import { showView } from "./utils.js";

const section = document.querySelector("#edit-movie");
const form = section.querySelector("form");

export async function editPage(id) {
  showView(section);

  const url = `http://localhost:3030/data/movies/${id}`;

  const res = await fetch(url);
  const movie = await res.json();

  console.log(movie.img);

  section.querySelector('[name="title"]').value = movie.title;
  section.querySelector('[name="description"]').value = movie.description;
  section.querySelector('[name="img"]').value = movie.img;
  form.setAttribute("id", id);
  form.addEventListener("submit", editMovie);
}

async function editMovie(e) {
  e.preventDefault();
  let formData = new FormData(form);

  let title = formData.get("title");
  let description = formData.get("description");
  let img = formData.get("img");

  if (title !== "" && img !== "" && description !== "") {
    const user = JSON.parse(localStorage.getItem("user"));
    const url = `http://localhost:3030/data/movies/${e.target.id}`;
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Authorization": user.accessToken,
        },
        body: JSON.stringify({ title, description, img }),
      });
      if (!response.ok || response.status != 200) {
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      alert(error.message);
    }

    detailsPage(e.target.id);
  }
}
