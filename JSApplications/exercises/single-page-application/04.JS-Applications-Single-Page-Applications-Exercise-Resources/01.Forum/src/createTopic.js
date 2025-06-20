import { loadTopics } from "./renderTopics.js";

export async function handleCreate(url, createForm, e) {
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

  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const formInputs = Object.fromEntries(formData);
  const timestamp = new Date();

  formInputs.createdAt = timestamp;

  for (const value of Object.values(formInputs)) {
    if (!value) {
      return;
    }
  }

  try {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInputs),
    });
  } catch (err) {
    console.log(err);
  }

  loadTopics();

  clearFromFields(e);
}
