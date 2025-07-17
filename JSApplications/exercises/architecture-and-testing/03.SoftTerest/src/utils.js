export function hideAll() {
  const containers = [
    ...document.querySelectorAll("div.container.home, #dashboard-holder"),
  ];

  containers.forEach((c) => {
    c.style.display = "none";
  });
}

export function showView(section) {
  hideAll();
  section.style.display = "block";
}
