const createTopicForm = document.querySelector("form");
const cancelButton = createTopicForm.querySelector(".cancel");

createTopicForm.addEventListener("submit", createTopic);

cancelButton.addEventListener("click", (e) => {
  e.preventDefault();
  const inputs = createTopicForm.querySelectorAll('[type="text"]');

  inputs.forEach((input) => {
    input.value = "";
  });
});

export async function createTopic(e) {
  e.preventDefault();
  const formData = new FormData(createTopicForm);

  const title = formData.get("topicName");
  const username = formData.get("username");
  const content = formData.get("postText");

  const url = `http://localhost:3030/jsonstore/collections/myboard/posts`;

  if (title != "" && username != "" && content != "") {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, username, content }),
      });

      if (response.status != 200 && !response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      const responseData = await response.json();

      console.log(responseData);
    } catch (error) {
      alert(error.message);
    }
  }
}
