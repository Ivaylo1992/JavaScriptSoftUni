window.addEventListener("load", solve);

function solve() {
  const snowmanNameElement = document.querySelector("#snowman-name");
  const snowmanHeightElement = document.querySelector("#snowman-height");
  const locationElement = document.querySelector("#location");
  const creatorNameElement = document.querySelector("#creator-name");
  const specialAttributeElement = document.querySelector("#special-attribute");
  const snowmanPreviewUlEl = document.querySelector(".snowman-preview");
  const snowListEl = document.querySelector(".snow-list");
  const mainElement = document.querySelector("main");
  const backImg = document.querySelector("#back-img");
  const bodyEl = document.querySelector("body");

  const addButton = document.querySelector(".add-btn");

  addButton.addEventListener("click", dataHandler);

  function dataHandler(e) {
    // prevent page reloading
    e.preventDefault();

    if (hasEmptyInput()) {
      return;
    }

    // create the list element
    const snowInfoList = document.createElement("li");
    snowInfoList.setAttribute("class", "snowman-info");

    // create the info paragraphs

    const articleEl = document.createElement("article");

    const nameParagraph = document.createElement("p");
    const nameValue = snowmanNameElement.value;
    nameParagraph.textContent = `Name: ${nameValue}`;

    const heightParagraph = document.createElement("p");
    const heightValue = snowmanHeightElement.value;
    heightParagraph.textContent = `Height: ${heightValue}`;

    const locationParagraph = document.createElement("p");
    const locationValue = locationElement.value;
    locationParagraph.textContent = `Location: ${locationValue}`;

    const creatorNameParagraph = document.createElement("p");
    const creatorNameValue = creatorNameElement.value;
    creatorNameParagraph.textContent = `Creator: ${creatorNameValue}`;

    const attributeParagraph = document.createElement("p");
    const attributeValue = specialAttributeElement.value;
    attributeParagraph.textContent = `Attribute: ${attributeValue}`;

    const btnContainer = document.createElement("div");
    btnContainer.setAttribute("class", "btn-container");

    const editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit-btn");
    editBtn.textContent = "Edit";

    const nextBtn = document.createElement("button");
    nextBtn.setAttribute("class", "next-btn");
    nextBtn.textContent = "Next";

    appendElements(
      articleEl,
      nameParagraph,
      heightParagraph,
      locationParagraph,
      creatorNameParagraph,
      attributeParagraph
    );

    appendElements(btnContainer, editBtn, nextBtn);

    appendElements(snowInfoList, articleEl, btnContainer)

    snowmanPreviewUlEl.appendChild(snowInfoList);

    addButton.setAttribute("disabled", "disabled");

    clearInputFields(
      snowmanNameElement,
      snowmanHeightElement,
      locationElement,
      creatorNameElement,
      specialAttributeElement
    );

    editBtn.addEventListener("click", (e) => {
      editEventHandler(
        e,
        nameValue,
        heightValue,
        locationValue,
        creatorNameValue,
        attributeValue,
        snowInfoList
      );
    });

    nextBtn.addEventListener("click", (e) => {
      nextEventHandler(
        e,
        nameValue,
        heightValue,
        locationValue,
        creatorNameValue,
        attributeValue,
        snowInfoList
      );
    });
  }

  function editEventHandler(
    e,
    name,
    height,
    location,
    creatorName,
    attribute,
    listEl
  ) {
    addButton.removeAttribute("disabled");

    snowmanNameElement.value = name;
    snowmanHeightElement.value = height;
    locationElement.value = location;
    creatorNameElement.value = creatorName;
    specialAttributeElement.value = attribute;

    listEl.remove();
  }

  function nextEventHandler(
    e,
    name,
    height,
    location,
    creatorName,
    attribute,
    listEl
  ) {
    listEl.remove();

    const newListEl = document.createElement("li");
    newListEl.setAttribute("class", "snowman-content");

    const articleEl = document.createElement("article");

    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = `Name: ${name}`;

    const heightParagraph = document.createElement("p");
    heightParagraph.textContent = `Height: ${height}`;

    const locationParagraph = document.createElement("p");
    locationParagraph.textContent = `Location: ${location}`;

    const creatorNameParagraph = document.createElement("p");
    creatorNameParagraph.textContent = `Creator: ${creatorName}`;

    const attributeParagraph = document.createElement("p");
    attributeParagraph.textContent = `Attribute: ${attribute}`;

    const sendBtn = document.createElement("button");
    sendBtn.setAttribute("class", "send-btn");
    sendBtn.textContent = "Send";

    appendElements(
      articleEl,
      nameParagraph,
      heightParagraph,
      locationParagraph,
      creatorNameParagraph,
      attributeParagraph,
      sendBtn
    );

    newListEl.appendChild(articleEl);

    snowListEl.appendChild(newListEl);

    sendBtn.addEventListener("click", (e) => {
      sendEventHandler(e);
    });
  }

  function sendEventHandler(e) {
    mainElement.remove();
    backImg.removeAttribute("hidden");

    const backBtn = document.createElement("button");
    backBtn.textContent = "Back";

    bodyEl.appendChild(backBtn);

    backBtn.addEventListener("click", (e) => {
      location.reload();
    });
  }

  // checks if there is an empty input
  function hasEmptyInput() {
    return (
      snowmanNameElement.value === "" ||
      snowmanHeightElement.value === "" ||
      locationElement.value === "" ||
      creatorNameElement.value === "" ||
      specialAttributeElement.value === ""
    );
  }

  // clears all the input fields
  function clearInputFields(...elements) {
    for (const element of elements) {
      element.value = "";
    }
  }

  // append n child elements to the parent one
  function appendElements(parent, ...children) {
    for (const child of children) {
      parent.appendChild(child);
    }
  }
}
