export function renderCommentForm(container) {
  const formDivEl = document.createElement("div");
  formDivEl.className = "answer-comment";

  formDivEl.innerHTML = `
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
    `;

  container.appendChild(formDivEl);
}

export async function addComment(e, postID) {
  e.preventDefault();
  const url = "http://localhost:3030/jsonstore/collections/myboard/comments";

  const formData = new FormData(e.currentTarget);
  //{postText: 'sad', username: 'Ivaylo1992'}

  const text = formData.get("postText");
  const username = formData.get("username");

  if (!text || !username || !postID) {
    return;
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, username, postID }),
    });

    if (response.status != 200 && !response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
  } catch (error) {
    alert(error.message);
  }
}
