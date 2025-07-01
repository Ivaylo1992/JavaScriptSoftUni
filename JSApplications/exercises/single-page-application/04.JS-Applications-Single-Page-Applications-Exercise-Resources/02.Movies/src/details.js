import { editPage } from "./edit.js";
import { homePage } from "./home.js";
import { showView, spinner } from "./utils.js";

const section = document.querySelector("#movie-example");

export function detailsPage(id) {
  showView(section);
  displayMovie(id);
}

async function displayMovie(id) {
  section.replaceChildren(spinner());

  const user = JSON.parse(localStorage.getItem("user"));

  const [movie, likes, ownLike] = await Promise.all([
    getMovie(id),
    getLikes(id),
    getOwnLikes(id, user),
  ]);

  section.replaceChildren(createMovieCard(movie, user, likes, ownLike));
}

function createMovieCard(movie, user, likes, ownLike) {
  const element = document.createElement("div");
  element.className = "container";
  element.innerHTML = `
  <div class="row bg-light text-dark">
      <h1>Movie title: ${movie.title}</h1>

      <div class="col-md-8">
          <img class="img-thumbnail" src="${movie.img}" alt="Movie">
      </div>
      <div class="col-md-4 text-center">
          <h3 class="my-3 ">Movie Description</h3>
          <p>${movie.description}</p>
          ${createControls(movie, user, ownLike)}
          <span class="enrolled-span">Liked ${likes}</span>
      </div>
  </div>`;

  const likeBtn = element.querySelector(".like-btn");
  if (likeBtn) {
    likeBtn.addEventListener("click", (e) => likeMovie(e, movie._id));
  }

  return element;
}

function createControls(movie, user, ownLike) {
  const isOwner = user && user._id == movie._ownerId;

  let controls = [];

  if (isOwner) {
    controls.push(
      `<a class="btn btn-danger" id=${movie._id} href="#">Delete</a>`
    );
    controls.push(
      `<a class="btn btn-warning" id=${movie._id} href="#">Edit</a>`
    );
  } else if (user && ownLike == false) {
    controls.push('<a class="btn btn-primary like-btn" href="#">Like</a>');
  }

  controls.push();

  return controls.join("");
}

async function getMovie(id) {
  const url = `http://localhost:3030/data/movies/${id}`;
  const res = await fetch(url);

  const movie = await res.json();

  return movie;
}

async function getLikes(id) {
  const url = `http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`;
  const res = await fetch(url);

  const likes = await res.json();
  return likes;
}

async function getOwnLikes(movieId, user) {
  if (!user) {
    return false;
  }

  const userId = user._id;
  const url = `http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`;
  const res = await fetch(url);

  const likes = await res.json();

  return likes.length > 0;
}

async function likeMovie(e, movieId) {
  e.preventDefault();

  const user = JSON.parse(localStorage.getItem("user"));

  const url = "http://localhost:3030/data/likes";

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": user.accessToken,
    },
    body: JSON.stringify({ movieId }),
  });

  detailsPage(movieId);
}

section.addEventListener("click", (e) => {
  e.preventDefault();
  let currentId = e.target.id;
  if (e.target.tagName == "A" && e.target.textContent == "Edit") {
    editPage(currentId);
  }
});

section.addEventListener("click", (e) => {
  e.preventDefault();

  let currentId = e.target.id;
  if (e.target.tagName == "A" && e.target.textContent == "Delete") {
    deleteMovie(currentId);
    homePage();
  }
});

export async function deleteMovie(id) {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    let url = `http://localhost:3030/data/movies/${id}`;

    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": user.accessToken,
      },
      body: JSON.stringify({ id }),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.nessage);
    }
  } catch (error) {
    homePage();
    alert(error.message);
  }
}
