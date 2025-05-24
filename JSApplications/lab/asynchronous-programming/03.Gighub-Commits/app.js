function loadCommits() {
  const usernameInputEl = document.querySelector("#username");
  const repoInputEl = document.querySelector("#repo");
  const commitsUlEl = document.querySelector("#commits");

  const username = usernameInputEl.value;
  const repo = repoInputEl.value;

  fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
    .then((result) => result.json())
    .then((data) => {
      for (const commit of data) {
        const newLi = document.createElement("li");
        const author = commit.commit.author.name;
        const message = commit.commit.message;

        newLi.textContent = `${author}: ${message}`;
        commitsUlEl.appendChild(newLi)
      }
    }).catch((err) => {
        const newLi = document.createElement("li");
        newLi.textContent = `Error: ${err.status} (Not Found)`
        commitsUlEl.appendChild(newLi);
    });
}
