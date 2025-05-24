function loadRepos() {
  const username = document.querySelector("#username").value;
  const reposUlEl = document.querySelector("#repos");
  reposUlEl.innerHTML = "";

  const url = `https://api.github.com/users/${username}/repos`;
  console.log(url);

  fetch(url)
    .then((result) => result.json())
    .then((data) => {
      data.forEach((repo) => {
        const newLi = document.createElement("li");
        const newA = document.createElement("a");
		console.log(repo);
		
        newA.href = repo.clone_url;
        newA.textContent = repo.full_name;

		newLi.appendChild(newA);
		reposUlEl.appendChild(newLi);
      });
    });
}
