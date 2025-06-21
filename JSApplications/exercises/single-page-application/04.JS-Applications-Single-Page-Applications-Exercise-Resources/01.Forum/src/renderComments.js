export async function renderComments(id) {
  const commentsDiv = document.querySelector("div[class=comment]");
  const url = "http://localhost:3030/jsonstore/collections/myboard/comments";
  try {
    const response = await fetch(url);
    const data = await response.json();

    for (const { createdAt, postText, topicId, username, _id } of Object.values(
      data
    )) {
      if (topicId === id && !document.querySelector(`div[data-id="${_id}"]`)) {
        const userComment = document.createElement("div");
        userComment.id = "user-comment";

        userComment.innerHTML = `
              <div class="topic-name-wrapper">
                <div class="topic-name" data-id="${_id}">
                  <p>
                    <strong>${username}</strong> commented on
                    <time>${createdAt}</time>
                  </p>
                  <div class="post-content">
                    <p>
                      ${postText}
                    </p>
                  </div>
                </div>
              </div>
            `;

        commentsDiv.appendChild(userComment);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
