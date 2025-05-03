function getArticleGenerator(articles) {
  // fetch the content div
  const contentDiv = document.querySelector("#content");

  function getNextArticle() {
    if (articles.length) {
      // create an article and attach content
      const articleEl = document.createElement("article");
      articleEl.textContent = articles.shift();
      // attach the article to the div
      contentDiv.appendChild(articleEl);
    }
  }

  return getNextArticle;
}
