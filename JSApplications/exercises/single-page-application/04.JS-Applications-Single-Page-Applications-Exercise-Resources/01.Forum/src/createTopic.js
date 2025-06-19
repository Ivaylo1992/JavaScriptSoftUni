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
  // const timestamp = currentTime.getDate();

  formInputs.createdAt = timestamp;

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

  loadTopics();

  clearFromFields(e);
}
