const views = [...document.querySelectorAll(".view-section")];

function hideAll() {
  views.forEach((v) => (v.style.display = "none"));
}

export function showView(section) {
  hideAll();
  section.style.display = "block";
}

export function spinner() {
  const element = document.createElement("p");
  element.innerHTML = "Loading &hellip;";

  return element;
}

export function updateNav() {
  const user = JSON.parse(localStorage.getItem("user"));

  const messageContainer = document.querySelector("#welcome-msg");

  if (user) {
    document
      .querySelectorAll(".user")
      .forEach((e) => (e.style.display = "inline-block"));
    document
      .querySelectorAll(".guest")
      .forEach((e) => (e.style.display = "none"));
    messageContainer.textContent = `Welcome, ${user.email}`;
  } else {
    document.querySelector("#add-movie-button").style.display = "none";
    document
      .querySelectorAll(".user")
      .forEach((e) => (e.style.display = "none"));
    document
      .querySelectorAll(".guest")
      .forEach((e) => (e.style.display = "inline-block"));
    messageContainer.textContent = ``;
  }
}
