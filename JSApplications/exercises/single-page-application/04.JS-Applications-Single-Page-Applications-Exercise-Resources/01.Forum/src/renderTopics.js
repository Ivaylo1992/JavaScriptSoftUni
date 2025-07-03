const topicTitleContainer = document.querySelector(".topic-title");

export async function renderTopics() {
  const url = "http://localhost:3030/jsonstore/collections/myboard/posts";

  try {
    const response = await fetch(url);

    if (response.status != 200 && !response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
    const data = await response.json();
    console.log(data);

    Object.entries(data).forEach((topic) => {
      const { content, title, username, _id } = topic[1];

      const topicContainer = document.createElement("div");
      topicContainer.className = "topic-container";

      topicContainer.innerHTML = `
            <div class="topic-name-wrapper">
                <div class="topic-name">
                    <a href="#" class="normal" dataset.id="${_id}">
                        <h2>${title}</h2>
                    </a>
                    <div class="columns">
                        <div>
                            <p>Date: <time>2024-10-10T12:08:28.451Z</time></p>
                            <div class="nick-name">
                                <p>Username: <span>${username}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
      topicTitleContainer.appendChild(topicContainer);

      const ATagEl = document.querySelector("a");
      ATagEl.addEventListener("click");
    });
  } catch (error) {
    alert(error.message);
  }
}
