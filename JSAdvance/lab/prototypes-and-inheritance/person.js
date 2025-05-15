function createPerson(firstName, lastName) {
  const p = {
    firstName,
    lastName,
  };

  Object.defineProperty(p, "fullName", {
    get () {
        return `${this.firstName} ${this.lastName}`
    },
    set (value) {
        if (value.split(' ').length === 2) {
            const [firstName, lastName] = value.split(' ');
            this.firstName = firstName;
            this.lastName = lastName;
        }

        return this.fullName
    }
  })

  return p;
}

let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
