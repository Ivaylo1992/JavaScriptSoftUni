function solution() {
  const mainSection = document.querySelector("#main");

  const url = "http://localhost:3030/jsonstore/advanced/articles/list";

  fetch(url).then((response) =>
    response
      .json()
      .then((articles) => {
        Object.entries(articles).forEach((article) => {
          const articleId = article[1]._id;
          const articleUrl = `http://localhost:3030/jsonstore/advanced/articles/details/${articleId}`;
          fetch(articleUrl)
            .then((response) => response.json())
            .then((articleInfo) => {
              const accordionDiv = document.createElement("div");
              accordionDiv.classList.add("accordion");
              mainSection.appendChild(accordionDiv);

              const headDiv = document.createElement("div");
              headDiv.classList.add("head");
              accordionDiv.appendChild(headDiv);

              const headingSpan = document.createElement("span");
              headingSpan.textContent = articleInfo.title;
              headDiv.appendChild(headingSpan);

              const toggleButton = document.createElement("button");
              toggleButton.classList.add("button");
              toggleButton.id = articleInfo._id;
              toggleButton.textContent = "More";
              headDiv.appendChild(toggleButton);

              const extraDiv = document.createElement("div");
              extraDiv.classList.add("extra");
              extraDiv.style.display = "none";
              accordionDiv.appendChild(extraDiv);

              const articleContentPTag = document.createElement("p");
              articleContentPTag.textContent = articleInfo.content;
              extraDiv.appendChild(articleContentPTag);

              toggleButton.addEventListener("click", (e) => {
                if (toggleButton.textContent === "More") {
                  toggleButton.textContent = "Less";
                  extraDiv.style.display = "block";
                } else {
                  toggleButton.textContent = "More";
                  extraDiv.style.display = "none";
                }
              });
            });
        });
      })
      .catch((err) => console.log(err))
  );
}

solution();
