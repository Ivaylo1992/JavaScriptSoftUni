import { showView, spinner } from "./utils.js";

const section = document.querySelector("#home-page");

const catalogue = document.querySelector(
  "#movie .card-deck.d-flex.justify-content-center"
);

// catalogue.addEventListener("click", (e) => {
//   if (e.target.tagName === "BUTTON") {
//     e.preventDefault();
//     const id = e.dataset.id;
//   }
// });

export function homePage() {
  showView(section);
  displayMovies();
}

async function displayMovies() {
  catalogue.replaceChildren(spinner());
  const movies = await getMovies();

  catalogue.replaceChildren(...movies.map(createMoviePreview));
}

function createMoviePreview(movie) {
  const element = document.createElement("li");
  element.className = "card mb-4";
  element.innerHTML = `
    <img class="card-img-top" src="${movie.img}"
        alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
        <a href="/details/${movie._id}">
            <button data-id="${movie._id}" type="button" class="btn btn-info">Details</button>
        </a>
    </div>
    <div class="card-footer">
    </div>`;

  return element;
}

async function getMovies() {
  const response = await fetch("http://localhost:3030/data/movies");
  const data = await response.json();

  return data;
}
