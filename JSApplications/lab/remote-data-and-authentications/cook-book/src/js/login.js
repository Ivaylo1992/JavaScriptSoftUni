function login() {
  const loginForm = document.querySelector("form");
  const baseUrl = "http://localhost:3030/users";

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const { email, password } = Object.entries(formData);

    fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: { "Content-Type": "application-json" },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.conde >= 400) {
          return alert(data.message);
        }

        localStorage.setItem("accessToken", data);
        localStorage.setItem("email", data.email);

        location.href = "index.html";
      })
      .catch((err) => console.log(err.message));
  });
}

login();
