function attachEvents() {
  const textAreaInput = document.getElementById("messages");
  const authorInputField = document.querySelector("input[name=author]");
  const contentInputField = document.querySelector("input[name=content]");

  const submitButton = document.querySelector("#submit");
  const refreshButton = document.querySelector("#refresh");

  submitButton.addEventListener("click", sendMessage);
  refreshButton.addEventListener("click", refreshContent);

  const requestUrl = "http://localhost:3030/jsonstore/messenger";

  async function sendMessage() {
    const content = contentInputField.value;
    const author = authorInputField.value;

    const messageObj = { author, content };
    try {
      await fetch(requestUrl, {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(messageObj),
      });
    } catch (error) {
      console.error(error);
    }

    contentInputField.value = "";
    authorInputField.value = "";
  }

  function refreshContent() {
    const result = [];

    fetch(requestUrl)
      .then((response) => response.json())
      .then((data) => {
        for (const { author, content } of Object.values(data)) {
          result.push(`${author}: ${content}`);
        }
      })
      .then(() => (textAreaInput.value = result.join("\n")));
  }
}

attachEvents();
