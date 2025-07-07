const form = document.querySelector("form");

export function getFormData(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const title = formData.get("topicName");
  const username = formData.get("username");
  const content = formData.get("postText");

  if (e.submitter.textContent === "Post") {
    if (title != "" && username != "" && content != "") {
      createTopic(title, username, content);
    } else {
      alert("All fields are required !!");
      return;
    }
  }
  form.reset();
}

async function createTopic(title, username, content) {
  try {
    const url = "http://localhost:3030/jsonstore/collections/myboard/posts";
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        username,
        content,
        date: new Date(),
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message);
    }
    // TODO: Render the topics
  } catch (error) {
    alert(error.message);
  }
}
