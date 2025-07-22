import { showView } from "./utils.js";

const section = document.querySelector("#dashboard-holder");
const url =
  "http://localhost:3030/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc";

export async function showIdeas() {
  showView(section);
  await renderIdeas();
}

async function getIdeas() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const err = response.json();
      throw new Error(err.message);
    }
    const ideas = await response.json();
    console.log(ideas);
    return ideas;
  } catch (error) {
    alert(error.message);
  }
}

async function renderIdeas() {
  const ideas = await getIdeas();
  section.replaceChildren(...ideas.map(createIdeaCard));
}

function createIdeaCard(idea) {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card overflow-hidden current-card details";
  cardDiv.innerHTML = `
        <div class="card-body">
          <p class="card-text">${idea.title}</p>
        </div>
        <img
          class="card-image"
          src="${idea.img}"
          alt="Card image cap"
        />
        <a class="btn" data-id="${idea._id}" href="">Details</a>
  `;

  const html = `
        <div
        class="card overflow-hidden current-card details"
        style="width: 20rem; height: 18rem"
        >
        <div class="card-body">
          <p class="card-text">Dinner Recipe</p>
        </div>
        <img
          class="card-image"
          src="./images/dinner.jpg"
          alt="Card image cap"
        />
        <a class="btn" href="">Details</a>
      </div>`;

  return cardDiv;
}
