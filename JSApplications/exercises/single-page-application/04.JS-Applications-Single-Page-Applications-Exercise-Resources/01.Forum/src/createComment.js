import { renderComments } from "./renderComments.js";

export async function createComment(topicId, e) {
  const url = "http://localhost:3030/jsonstore/collections/myboard/comments";
  e.preventDefault();
  const form = e.currentTarget;

  const formData = new FormData(form);
  const formInputs = Object.fromEntries(formData);
  const timestamp = new Date();

  formInputs.createdAt = timestamp;
  formInputs.topicId = topicId;

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
  } catch (error) {
    console.log(error);
  }

  const elements = form.querySelectorAll("*");

  elements.forEach((element) => {
    if (element.value) {
      element.value = "";
    }
  });

  renderComments(topicId);
}
