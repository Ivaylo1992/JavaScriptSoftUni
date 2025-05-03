function solve() {
  const taskInput = document.querySelector("#task");
  const descriptionInput = document.querySelector("#description");
  const dueDateInput = document.querySelector("#date");
  const addButton = document.querySelector("#add");

  const openTasksDiv = document.querySelector(
    "section:nth-of-type(2) > div:last-of-type"
  );

  const completedSection = document.querySelector(
    "section:nth-of-type(4) > div:last-of-type"
  );

  const inProgressSection = document.querySelector("#in-progress");

  addButton.addEventListener("click", addTask);

  function addTask(e) {
    e.preventDefault();

    if (
      !taskInput.value.length ||
      !descriptionInput.value.length ||
      !dueDateInput.value.length
    ) {
      return;
    }

    const newArticle = document.createElement("article");

    const h3 = document.createElement("h3");
    h3.textContent = taskInput.value;
    newArticle.appendChild(h3);

    const descP = document.createElement("p");
    descP.textContent = `Description: ${descriptionInput.value}`;
    newArticle.appendChild(descP);

    const dateP = document.createElement("p");
    dateP.textContent = `Due Date: ${dueDateInput.value}`;
    newArticle.appendChild(dateP);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.setAttribute("class", "flex");
    newArticle.appendChild(buttonsDiv);

    const startButton = createButton('start')
    buttonsDiv.appendChild(startButton)

    const deleteButton = createButton('delete')
    buttonsDiv.appendChild(deleteButton);

    openTasksDiv.appendChild(newArticle);

    deleteButton.addEventListener("click", deleteTask.bind(null, newArticle));
    startButton.addEventListener(
      "click",
      startTask.bind(null, startButton, newArticle, buttonsDiv)
    );

    taskInput.value = "";
    descriptionInput.value = "";
    dueDateInput.value = "";
  }

  function deleteTask(article) {
    article.remove();
  }

  function startTask(startBtn, article, divB) {
    inProgressSection.appendChild(article);
    const finishButton = createButton('finish')

    startBtn.remove();
    divB.appendChild(finishButton);

    finishButton.addEventListener(
      "click",
      finishTask.bind(null, article, divB)
    );
  }

  function finishTask(art, btnDiv) {
    completedSection.appendChild(art);
    btnDiv.remove();
  }

  // helper function
  function createButton(buttonType) {
    const buttonAttributes = {
      finish: { className: "orange", textContent: "Finish" },
      start: { className: "green", textContent: "Start" },
      delete: { className: "red", textContent: "Delete" },
    };

    const newButton = document.createElement("button");

    for (let [key, value] of Object.entries(buttonAttributes[buttonType])) {
      newButton[key] = value;
    }
    return newButton
  }
}
