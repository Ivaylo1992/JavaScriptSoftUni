const topicContainerEl = document.querySelector(".topic-container");
const postsUrl = "http://localhost:3030/jsonstore/collections/myboard/posts";

export async function loadTopics() {
  const response = await fetch(postsUrl);
  const data = await response.json();

  const topics = Object.values(data);

  for (const topic of topics) {
    const { postText, topicName, username, _id, createdAt } = topic;

    // Check if topic already exists
    if (!document.querySelector(`a[data-id="${_id}"]`)) {
      const topicWrapper = document.createElement("div");
      topicWrapper.classList.add("topic-name-wrapper");

      topicWrapper.innerHTML = `
        <div class="topic-name">
          <a href="#" class="normal" data-id="${_id}">
            <h2>${topicName}</h2>
          </a>
          <div class="columns">
            <div>
              <p>Date: <time>${createdAt}</time></p>
              <div class="nick-name">
                <p>Username: <span>${username}</span></p>
              </div>
            </div>
          </div>
        </div>
      `;
      topicContainerEl.appendChild(topicWrapper);
    }
  }
}

loadTopics();
