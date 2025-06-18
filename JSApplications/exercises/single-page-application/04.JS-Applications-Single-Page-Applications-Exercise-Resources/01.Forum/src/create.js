export function createTopic(url) {
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
    const timestamp = new Date();
    // const timestamp = currentTime.getDate();

    formInputs.createdAt = timestamp;

    for (const value of Object.values(formInputs)) {
      if (!value) {
        return;
      }
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInputs),
    });

    const data = await response.json();

    console.log(data);

    clearFromFields(e);
  }
}
