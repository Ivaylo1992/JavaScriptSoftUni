const loadBooksBtn = document.querySelector("#loadBooks");
loadBooksBtn.addEventListener("click", loadBooks);

const tableBody = document.querySelector("tbody");
tableBody.innerHTML = "";

let formEl = document.querySelector("form");
renderForm("create");

const baseUrl = "http://localhost:3030/jsonstore/collections/books";

function loadBooks() {
  renderForm("create");
  tableBody.innerHTML = "";

  fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => {
      const dataEntries = Object.entries(data);

      for (const entry of dataEntries) {
        const { author, title } = entry[1];
        const id = entry[0];

        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        `;

        tableBody.appendChild(newRow);

        const editButton = newRow.querySelectorAll("button")[0];
        const deleteButton = newRow.querySelectorAll("button")[1];

        editButton.addEventListener(
          "click",
          renderForm.bind(null, "edit", id, title, author)
        );
        deleteButton.addEventListener("click", deleteRecord.bind(null, id));
      }
    })
    .catch((err) => console.log(err.message));
}

function deleteRecord(id, e) {
  fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  })
    .then(() => loadBooks())
    .catch((err) => console.error(err));
}

function renderForm(formType, id = null, title = null, author = null, e) {
  const formTypeHtml = {
    edit: `
        <h3>Edit FORM</h3>
        <label>TITLE</label>
        <input type="text" name="title" value="${title}">
        <label>AUTHOR</label>
        <input type="text" name="author" value="${author}">
        <button type="submit">Edit</button>
    `,
    create: `
        <h3>FORM</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <button type="submit">Submit</button>
        `,
  };

  const newFormEl = formEl.cloneNode(false);
  newFormEl.innerHTML = formTypeHtml[formType];
  formEl.parentElement.replaceChild(newFormEl, formEl);
  formEl = newFormEl;

  if (formType === "edit") {
    formEl.addEventListener("submit", editRecord.bind(null, id));
  } else if (formType === "create") {
    formEl.addEventListener("submit", createRecord);
  }
}

function createRecord(e) {
  e.preventDefault();
  debugger;
  const formData = new FormData(e.currentTarget);
  const formEntries = Object.fromEntries(formData);

  if (formEntries.title && formEntries.author) {
    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formEntries),
    })
      .then(() => {
        loadBooks();
      })
      .catch((err) => console.error(err));
  }
}

function editRecord(id, e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const formEntries = Object.fromEntries(formData);

  if (formEntries.title && formEntries.author) {
    fetch(`${baseUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formEntries),
    })
      .then(() => {
        loadBooks();
      })
      .catch((err) => console.error(err));
  }
}
