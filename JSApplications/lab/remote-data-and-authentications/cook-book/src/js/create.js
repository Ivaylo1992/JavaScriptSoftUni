const createForm = document.querySelector("form");
const baseUrl = `http://localhost:3030/data/recipes`;

createForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const data = Object.entries(formData);
  `http://localhost:3030/data/recipes`;

  data.ingredients = data.ingredients.split("\n");
  data.steps = data.steps.split("\n");

  const accessToken = localStorage.getItem("accessToken");

  fetch(`${baseUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "Application-JSON",
      "X-Authorisation": accessToken,
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      location.href = "index.html";
    })
    .catch((err) => console.log(err.message));
});
