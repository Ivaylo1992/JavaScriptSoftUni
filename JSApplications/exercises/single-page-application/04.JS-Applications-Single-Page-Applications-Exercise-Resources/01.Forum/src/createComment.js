export async function createComment(e) {
  const url = "http://localhost:3030/jsonstore/collections/myboard/comments";
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

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formInputs),
  });
}
