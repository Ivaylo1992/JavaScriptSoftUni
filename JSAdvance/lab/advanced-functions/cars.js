function solve(input) {
  const cars = {};

  const createCar = (name) => cars[name] = {} 

  const factory = {
    create: (args) => {
      let name = args.shift();
      createCar(name)
    },
    inherit: (name, proto) => {
      createCar(name);
      Object.setPrototypeOf(cars[name], cars[proto]);
    },
    set: (args) => {
      let [name, key, value] = args;
      cars[name][key] = value;
    },
    print: (args) => {
      let name = args.shift();
      let result = [];
      for (let key in cars[name]) {
        result.push(`${key}:${cars[name][key]}`);
      }
      console.log(result.join(","));
    },
  };

  input.forEach((el) => {
    const commands = el.split(" ");
    if (commands.includes("inherit")) {
      const [_, newModelName, command, parentModelName] = commands;
      factory[command](newModelName, parentModelName);
    } else {
      let [command, ...otherArgs] = commands;
      factory[command](otherArgs);
    }
  });
}

solve([
  "create c1",

  "create c2 inherit c1",

  "set c1 color red",

  "set c2 model new",

  "print c1",

  "print c2",
]);
