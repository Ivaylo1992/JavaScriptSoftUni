import { renderMonth } from "./months.js";

export function renderYear(year, calendar) {
  const monthsNumbersMapper = {
    Jan: "1",
    Feb: "2",
    Mar: "3",
    Apr: "4",
    May: "5",
    Jun: "6",
    Jul: "7",
    Aug: "8",
    Sep: "9",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  const yearSection = document.querySelector(`#year-${year}`);

  calendar.style.display = "none";
  yearSection.style.display = "block";

  const months = yearSection.querySelectorAll("td");

  Array.from(months).forEach((month) => {
    const currentMonth = month.querySelector("div").textContent;
    const monthNumber = monthsNumbersMapper[currentMonth];
    month.addEventListener(
      "click",
      renderMonth.bind(null, year, monthNumber, yearSection)
    );
  });
}
