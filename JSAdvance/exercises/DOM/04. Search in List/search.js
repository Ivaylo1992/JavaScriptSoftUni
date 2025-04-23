function search() {
  const townsList = Array.from(
    document.querySelectorAll("article ul#towns li")
  );
  const searchText = document.querySelector("article input#searchText");
  const result = document.querySelector("article div#result");

  const searchTextValue = searchText.value.toLowerCase();
  let matches = 0;

  townsList.forEach((town) => {
    if (town.textContent.toLowerCase().includes(searchTextValue)) {
      town.style.textDecoration = "underline";
      matches++; // Increment the counter when the condition is true
    } else {
      town.style.textDecoration = "none";
    }
  });

  if (matches) {
    document.querySelector("article div#result").textContent =
      `${matches} matches found`;
  }
}
