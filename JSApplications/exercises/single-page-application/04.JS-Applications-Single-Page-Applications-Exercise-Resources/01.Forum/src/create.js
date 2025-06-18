export function createTopic() {
  const url = "http://localhost:3030/jsonstore/collections/myboard/posts";
  const createForm = document.querySelector("main form");

  const cancelButton = createForm.querySelector(".cancel");
  cancelButton.addEventListener("click", clearFromFields);

  function clearFromFields(e) {
    e.preventDefault();
    const elements = createForm.querySelectorAll("*");

    elements.forEach((element) => {
      if (element.value) {
        element.value = "";
      }
    });
  }

  createForm.addEventListener("submit", createTopic);

  async function createTopic(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const formInputs = Object.fromEntries(formData);

    for (const value of Object.values(formInputs)) {
      if (!value) {
        return;
      }
    }

    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInputs),
    });

    clearFromFields(e);
  }
}
