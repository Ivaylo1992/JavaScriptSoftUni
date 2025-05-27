function lockedProfile() {
  const mainBlock = document.querySelector("main");
  let userCount = 0;

  async function handleUsersRequest() {
    mainBlock.innerHTML = "";
    const url = "http://localhost:3030/jsonstore/advanced/profiles";

    const profilesResponse = await fetch(url);
    const profilesInfo = await profilesResponse.json();

    Object.entries(profilesInfo).forEach((info) => {
      const profile = info[1];
      userCount += 1;

      const profileDiv = document.createElement("div");
      profileDiv.classList.add("profile");
      mainBlock.appendChild(profileDiv);

      const imgEl = document.createElement("img");
      imgEl.classList.add("userIcon");
      imgEl.src = "./iconProfile2.png";
      profileDiv.appendChild(imgEl);

      const lockLabelEl = document.createElement("label");
      lockLabelEl.textContent = "Lock";
      profileDiv.appendChild(lockLabelEl);

      const lockRadioInput = document.createElement("input");
      lockRadioInput.type = "radio";
      lockRadioInput.checked = true;
      lockRadioInput.name = `user${userCount}Locked`;
      lockRadioInput.value = "lock";
      profileDiv.appendChild(lockRadioInput);

      const unlockLabelEl = document.createElement("label");
      unlockLabelEl.textContent = "Unlock";
      profileDiv.appendChild(unlockLabelEl);

      const unlockRadioInput = document.createElement("input");
      unlockRadioInput.type = "radio";
      unlockRadioInput.name = `user${userCount}Locked`;
      unlockRadioInput.value = "unlock";
      profileDiv.appendChild(unlockRadioInput);

      const brEl = document.createElement("br");
      profileDiv.appendChild(brEl);

      const hrEl = document.createElement("hr");
      profileDiv.appendChild(hrEl);

      const usernameLabelEl = document.createElement("label");
      usernameLabelEl.textContent = "Username";
      profileDiv.appendChild(usernameLabelEl);

      const usernameInputEl = document.createElement("input");
      usernameInputEl.type = "text";
      usernameInputEl.name = "user1Username";
      usernameInputEl.setAttribute("disabled", true);
      usernameInputEl.setAttribute("readonly", true);
      usernameInputEl.value = profile.username;
      profileDiv.appendChild(usernameInputEl);

      const userInfoDiv = document.createElement("div");
      userInfoDiv.style.display = "none";
      userInfoDiv.classList.add("user1Username");
      profileDiv.appendChild(userInfoDiv);

      const secondHrEl = document.createElement("hr");
      userInfoDiv.appendChild(secondHrEl);

      const emailLabelEl = document.createElement("label");
      emailLabelEl.textContent = "Email:";
      userInfoDiv.appendChild(emailLabelEl);

      const emailInputEl = document.createElement("input");
      emailInputEl.type = "email";
      emailInputEl.name = "user1Email";
      emailInputEl.setAttribute("disabled", true);
      emailInputEl.setAttribute("readonly", true);
      emailInputEl.value = profile.email;
      userInfoDiv.appendChild(emailInputEl);

      const ageLabelEl = document.createElement("label");
      ageLabelEl.textContent = "Age:";
      userInfoDiv.appendChild(ageLabelEl);

      const ageInputEl = document.createElement("input");
      ageInputEl.type = "number";
      ageInputEl.name = "user1Age";
      ageInputEl.setAttribute("disabled", true);
      ageInputEl.setAttribute("readonly", true);
      ageInputEl.value = profile.age;
      userInfoDiv.appendChild(ageInputEl);

      const toggleButton = document.createElement("button");
      toggleButton.textContent = "Show more";
      profileDiv.appendChild(toggleButton);

      toggleButton.addEventListener("click", () => {
        if (lockRadioInput.checked) return;

        if (userInfoDiv.style.display === "none") {
          userInfoDiv.style.display = "block";
          toggleButton.textContent = "Hide it";
        } else {
          userInfoDiv.style.display = "none";
          toggleButton.textContent = "Show more";
        }
      });
    });
  }

  handleUsersRequest();
}
