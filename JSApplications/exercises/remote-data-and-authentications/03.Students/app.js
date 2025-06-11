const url = "http://localhost:3030/jsonstore/collections/students";
const tableBody = document.querySelector("tbody");

async function renderStudentsList() {
  tableBody.innerHTML = "";
  try {
    const response = await fetch(url);
    const data = await response.json();

    for (const { firstName, lastName, facultyNumber, grade } of Object.values(
      data
    )) {
      const newRow = document.createElement("tr");
      tableBody.appendChild(newRow);

      newRow.innerHTML = `
          <td>${firstName}</td>
          <td>${lastName}</td>
          <td>${facultyNumber}</td>
          <td>${Number(grade).toFixed(2)}</td>
      `;
    }
  } catch (err) {
    console.error(err);
  }
}

renderStudentsList();

const formEl = document.querySelector("form");
formEl.addEventListener("submit", handleForm);

async function handleForm(e) {
  e.preventDefault();
  const formData = new FormData(formEl);

  const formEntries = Object.fromEntries(formData);

  for (const entry of Object.values(formEntries)) {
    if (!entry) {
      return;
    }
  }

  try {
    await fetch(url, {
      method: "POST",
      "Content-Type": "application/json",
      body: JSON.stringify(formEntries),
    });
  } catch (err) {
    console.error(err);
  }

  renderStudentsList();
}
