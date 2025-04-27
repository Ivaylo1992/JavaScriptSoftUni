function solve() {
  const [generateButton, buyButton] = document.getElementsByTagName("button");
  const textAreaElement = document.querySelector("textarea");
  const tableElement = document.querySelector("tbody");
  const checkboxEl = document.querySelector("input[type=checkbox]");
  const furnitureList = {};

  generateButton.addEventListener("click", generateProductsList);
  buyButton.addEventListener("click", checkout);

  function generateProductsList() {
    const furnitureInput = JSON.parse(textAreaElement.value);

    furnitureInput.forEach((furniture) => {
      const newTr = document.createElement("tr");
      const checkboxTd = document.createElement("td");
      const newCheckbox = document.createElement("input");
      newCheckbox.setAttribute("type", "checkbox");
      checkboxTd.appendChild(newCheckbox);

      for (const [key, value] of Object.entries(furniture)) {
        const newTd = document.createElement("td");
        let newElement;

        if (key === "img") {
          newElement = document.createElement("img");
          newElement.src = value;
        } else {
          newElement = document.createElement("p");
          newElement.textContent = value;
        }

        newTd.appendChild(newElement);

        key === "img" ? newTr.prepend(newTd) : newTr.appendChild(newTd);
      }

      newTr.appendChild(checkboxTd);
      tableElement.appendChild(newTr);
    });
  }

  function checkout() {

  }

  function updateFurnitureList () {

  }
}
