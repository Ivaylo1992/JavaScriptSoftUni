export function renderMonth(year, month, yearSection) {
  const monthSection = document.querySelector(`#month-${year}-${month}`);

  yearSection.style.display = "none";
  monthSection.style.display = "block";
}
