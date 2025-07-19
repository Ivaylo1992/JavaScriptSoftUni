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

export function updateNav() {
  const user = localStorage.getItem("user");

  const [dashboard, create, logout, login, register] = Array.from(
    document.querySelectorAll(".nav-item")
  );

  const userOptions = [dashboard, create, logout];
  const guestOptions = [login, register];

  if (user) {
    userOptions.forEach((option) => (option.style.display = "block"));
    guestOptions.forEach((option) => (option.style.display = "none"));
  } else {
    userOptions.forEach((option) => (option.style.display = "none"));
    guestOptions.forEach((option) => (option.style.display = "block"));
  }
}
