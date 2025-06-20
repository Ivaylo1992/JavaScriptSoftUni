import { createComment } from "./createComment.js";

const container = document.querySelector("div[class=container]");

export function renderTopicDetails(
  postText,
  topicName,
  username,
  id,
  createdAt,
  e
) {
  e.preventDefault();

  container.innerHTML = "";

  const themeContent = document.createElement("div");
  themeContent.classList.add("theme-content");

  themeContent.innerHTML = `
    <div class="theme-title">
        <div class="theme-name-wrapper">
            <div class="theme-name">
                <h2>${topicName}</h2>
            </div>
        </div>
    </div>
    <div class="comment">
    </div>
    <div class="answer-comment">
        <p><span>currentUser</span> comment:</p>
        <div class="answer">
            <form>
                <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                <div>
                    <label for="username">Username <span class="red">*</span></label>
                    <input type="text" name="username" id="username">
                </div>
                <button>Post</button>
            </form>
        </div>
    </div>
  `;

  container.appendChild(themeContent);

  const commentDivEl = document.querySelector("div[class=comment]");

  const postHeaderEL = document.createElement("div");
  postHeaderEL.classList.add("header");

  postHeaderEL.innerHTML = `
    <img src="./static/profile.png" alt="avatar" />
    <p><span>${username}</span> posted on <time>${createdAt}</time></p>

    <p class="post-content">
      ${postText}
    </p>
  `;

  commentDivEl.appendChild(postHeaderEL);

  renderComments(commentDivEl);

  const commentForm = themeContent.querySelector("form");

  commentForm.addEventListener("submit", createComment);
}

async function renderComments(comentsDiv) {
  const url = "http://localhost:3030/jsonstore/collections/myboard/comments";
  try {
    const response = await fetch(url);
    const data = await response.json();
  } catch (error) {
    console.log(error);
  }
}
