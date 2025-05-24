function solve() {
  const loadingEl = document.querySelectorAll("p")[0];
  const mainBlock = document.querySelector("main");

  fetch("../server/data/cookbook.json")
    .then((res) => res.json())
    .then((data) => {
      loadingEl.parentElement.removeChild(loadingEl);
      Object.entries(data.details).forEach((recipe) => {
        // Create preview article for the current recipe
      
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

        // Attach the article to the main block
        mainBlock.appendChild(previewArticle);

        // Create the main article
        const mainArticle = document.createElement("article");
        const mainArtH2 = document.createElement("h2");
        mainArtH2.textContent = "Title";

        const bandDiv = document.createElement("div");
        bandDiv.classList.add("band");

        const thumbDiv = document.createElement("div");
        thumbDiv.classList.add("thumb");
        
        const mainArtImgEl = document.createElement("img");
        const mainArtImgPath = `./${recipe[1].img}`;
        mainArtImgEl.src = mainArtImgPath;

        thumbDiv.appendChild(mainArtImgEl);
        bandDiv.appendChild(thumbDiv);

        const ingredientsDiv = document.createElement("div");
        ingredientsDiv.classList.add("ingredients");

        const ingredientsH3 = document.createElement("h3");
        ingredientsH3.textContent = "Ingredients:";

        const ingredientsUlEl = document.createElement("ul");
        ingredientsDiv.appendChild(ingredientsH3);

        recipe[1].ingredients.forEach((ingredient) => {
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

        recipe[1].steps.forEach((step) => {
          const newP = document.createElement("p");
          newP.textContent = step;
          descriptionDiv.appendChild(newP);
        });

        mainArticle.appendChild(bandDiv);
        mainArticle.appendChild(descriptionDiv);

        mainBlock.appendChild(mainArticle);
      });
    });
}

{
  /* 
    <article>
        <h2>Title</h2>
        <div class="band">
            <div class="thumb">
                <img src="assets/lasagna.jpg">
            </div>
            <div class="ingredients">
                <h3>Ingredients:</h3>
                <ul>
                    <li>Ingredient 1</li>
                    <li>Ingredient 2</li>
                    <li>Ingredient 3</li>
                    <li>Ingredient 4</li>
                </ul>
            </div>
        </div>
        <div class="description">
            <h3>Preparation:</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, quaerat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia ipsam nulla vitae nobis
                reprehenderit pariatur aut dolor exercitationem impedit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorem odit officiis numquam
                corrupti? Quam.</p>
        </div>
    </article> */
}
