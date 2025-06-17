import { renderYear } from "./views/years.js";

function calendar() {
  const yearsCalendar = document.querySelector("#years");

  function hideSections() {
    // hides all sections without the first one

    const sections = document.querySelectorAll("section");

    for (let i = 1; i < sections.length; i++) {
      const section = sections[i];
      section.style.display = "none";
    }
  }
  hideSections();

  const years = yearsCalendar.querySelectorAll("td");

  Array.from(years).forEach((year) => {
    const currentYear = year.querySelector("div").textContent;

    year.addEventListener(
      "click",
      renderYear.bind(null, currentYear, yearsCalendar)
    );
  });
}

calendar();
