function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const searchInput = document.querySelector("input#searchField").value.toLowerCase();
    const studentsInfo = document.querySelectorAll("table tbody tr");

    for (let student of studentsInfo) {
      if (
        student.textContent.toLowerCase().includes(searchInput)
      ) {
        student.className = "select";
      } else {
        student.className = "none";
      }
      
    } 
  }
}
