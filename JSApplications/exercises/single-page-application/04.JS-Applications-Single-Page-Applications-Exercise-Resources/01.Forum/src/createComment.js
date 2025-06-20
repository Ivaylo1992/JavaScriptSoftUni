export async function createComment(e) {
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
}
