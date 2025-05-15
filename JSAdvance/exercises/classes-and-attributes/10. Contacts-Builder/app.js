class Contact {
  constructor(firstName, lastName, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this._online = false;
    this.element = null; // Reference to the DOM element
  }

  get online() {
    return this._online;
  }

  set online(value) {
    this._online = value;
    if (this.element) {
      const titleDiv = this.element.querySelector(".title");
      if (this._online) {
        titleDiv.classList.add("online");
      } else {
        titleDiv.classList.remove("online");
      }
    }
  }

  render(id) {
    const container = document.getElementById(id);

    const article = document.createElement("article");

    const titleDiv = document.createElement("div");
    titleDiv.className = "title";
    titleDiv.innerHTML = `${this.firstName} ${this.lastName}<button>&#8505;</button>`;

    const infoDiv = document.createElement("div");
    infoDiv.className = "info";
    infoDiv.style.display = "none";
    infoDiv.innerHTML = `
        <span>\u260E ${this.phone}</span>
        <span>&#9993; ${this.email}</span>
      `;

    // Toggle visibility of contact info
    const button = titleDiv.querySelector("button");
    button.addEventListener("click", () => {
      infoDiv.style.display =
        infoDiv.style.display === "none" ? "block" : "none";
    });

    article.appendChild(titleDiv);
    article.appendChild(infoDiv);
    container.appendChild(article);

    this.element = article;

    // Apply "online" class if already online
    if (this._online) {
      titleDiv.classList.add("online");
    }
  }
}

let contacts = [
  new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),

  new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),

  new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com"),
];

contacts.forEach((c) => c.render("main"));

// After 1 second, change the online status to true

setTimeout(() => (contacts[1].online = true), 2000);
