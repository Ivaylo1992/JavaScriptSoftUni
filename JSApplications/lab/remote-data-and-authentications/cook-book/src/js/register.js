function register() {
  const baseUrl = `http://localhost:3030/users`;
  const registerForm = document.querySelector("form");

  registerForm.addEventListener("submit", handleRegisterForm);

  function handleRegisterForm(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    fetch(`${baseUrl}/register`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    })
      .then((result) => result.json())
      .then((data) => {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("email", data.email);

        location.href = "index.html";
      })
      .catch((err) => console.log(err.message));
  }
}

register();
