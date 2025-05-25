function solve() {
  const loadingEl = document.querySelectorAll("p")[0];
  const mainBlock = document.querySelector("main");

  fetch("http://localhost:3030/jsonstore/cookbook/recipes")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      loadingEl.parentElement.removeChild(loadingEl);
      Object.entries(data).forEach((recipe) => {
        // Create preview article for the current recipe
        const recipeId = recipe[1]._id;

        const previewArticle = document.createElement("article");
        previewArticle.classList.add("preview");

        // The div for the title
        const titleDiv = document.createElement("div");
        titleDiv.classList.add("title");

        // Title
        const h2 = document.createElement("h2");
        h2.textContent = "Title";

        //The div for the preview img
        const imgDiv = document.createElement("div");
        imgDiv.classList.add("small");

        // Get the image from database
        const imgEl = document.createElement("img");
        const imgPath = `./${recipe[1].img}`;
        imgEl.src = imgPath;

        // Assemble the preview article
        imgDiv.appendChild(imgEl);

        titleDiv.appendChild(h2);

        previewArticle.appendChild(titleDiv);
        previewArticle.appendChild(imgDiv);

        previewArticle.addEventListener("click", (e) => {
          fetch(`http://localhost:3030/jsonstore/cookbook/details/${recipeId}`)
            .then((res) => res.json())
            .then((info) => {
              mainBlock.innerHTML = '';
              
              // Create the main article
              const mainArticle = document.createElement("article");
              const mainArtH2 = document.createElement("h2");
              mainArtH2.textContent = "Title";

              const bandDiv = document.createElement("div");
              bandDiv.classList.add("band");

              const thumbDiv = document.createElement("div");
              thumbDiv.classList.add("thumb");

              const mainArtImgEl = document.createElement("img");
              const mainArtImgPath = `./${info.img}`;
              mainArtImgEl.src = mainArtImgPath;

              thumbDiv.appendChild(mainArtImgEl);
              bandDiv.appendChild(thumbDiv);

              const ingredientsDiv = document.createElement("div");
              ingredientsDiv.classList.add("ingredients");

              const ingredientsH3 = document.createElement("h3");
              ingredientsH3.textContent = "Ingredients:";

              const ingredientsUlEl = document.createElement("ul");
              ingredientsDiv.appendChild(ingredientsH3);

              info.ingredients.forEach((ingredient) => {
                const newLi = document.createElement("li");
                newLi.textContent = ingredient;

                ingredientsUlEl.appendChild(newLi);
              });

              ingredientsDiv.appendChild(ingredientsUlEl);
              bandDiv.appendChild(ingredientsDiv);

              const descriptionDiv = document.createElement("div");
              descriptionDiv.classList.add("description");

              const descriptionH3 = document.createElement("h3");
              descriptionH3.textContent = "Preparation:";

              descriptionDiv.appendChild(descriptionH3);

              info.steps.forEach((step) => {
                const newP = document.createElement("p");
                newP.textContent = step;
                descriptionDiv.appendChild(newP);
              });

              mainArticle.appendChild(bandDiv);
              mainArticle.appendChild(descriptionDiv);

              mainBlock.appendChild(mainArticle);
            });
          
        });
        // Attach the article to the main block
        mainBlock.appendChild(previewArticle);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
