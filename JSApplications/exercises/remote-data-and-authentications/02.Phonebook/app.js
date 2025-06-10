function attachEvents() {
  const loadButton = document.querySelector("#btnLoad");
  const createButton = document.querySelector("#btnCreate");
  const phonebookUl = document.querySelector("#phonebook");

  const personInput = document.querySelector("#person");
  const phoneInput = document.querySelector("#phone");

  const baseUrl = "http://localhost:3030/jsonstore/phonebook";

  loadButton.addEventListener("click", load);
  createButton.addEventListener("click", createRecord);

  async function load() {
    phonebookUl.innerHTML = "";
    const response = await fetch(`${baseUrl}`);

    const data = await response.json();

    for (const { person, phone, _id } of Object.values(data)) {
      const newLiEl = document.createElement("li");
      newLiEl.textContent = `${person}: ${phone}`;
      phonebookUl.appendChild(newLiEl);

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", deleteRecord.bind(null, _id));
      newLiEl.appendChild(deleteBtn);
    }
  }

  async function createRecord() {
    const person = personInput.value;
    const phone = phoneInput.value;

    const record = { person, phone };

    await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(record),
    });
  }

  async function deleteRecord(id) {
    await fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

attachEvents();
