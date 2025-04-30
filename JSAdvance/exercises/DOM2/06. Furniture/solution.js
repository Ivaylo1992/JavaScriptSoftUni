function solve() {
  const [generateButton, buyButton] = document.getElementsByTagName("button");
  const textAreaElement = document.querySelector("textarea");
  const tableElement = document.querySelector("tbody");
  const checkboxEl = document.querySelector("input[type=checkbox]");
  let furnitureList = {};

  generateButton.addEventListener("click", generateProductsList);
  buyButton.addEventListener("click", checkout);

  function generateProductsList() {
    const furnitureInput = JSON.parse(textAreaElement.value);

    furnitureInput.forEach((furniture) => {
      let infoFurniture = Object.entries(furniture);

      const newTr = document.createElement("tr");
      const checkboxTd = document.createElement("td");
      const newCheckbox = document.createElement("input");
      newCheckbox.setAttribute("type", "checkbox");
      checkboxTd.appendChild(newCheckbox);

      for (const [key, value] of infoFurniture) {
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

      furnitureList = updateFurnitureList(infoFurniture, furnitureList);
      console.log(furnitureList);
    });
  }

  function checkout() {
   
  }

  function updateFurnitureList (furnitureInfo, furnitureListObj) {
    const nameInfo = furnitureInfo.shift().pop();
    if (!furnitureListObj[nameInfo]) {
      furnitureListObj[nameInfo] = {};
    }

    furnitureInfo.forEach(info => {
      furnitureListObj[nameInfo][info[0]] = info[1];
    });
    
    return furnitureListObj;
  }
}
