function juiceFactory(input) {
  const flavors = {};
  const madeBottles = new Map();
  setData();
  return print();

  function print() {
    const result = [];
    for (const [juice, qty] of madeBottles) {
      result.push(`${juice} => ${qty}`);
    }

    return result.join("\n");
  }

  function setData() {
    input.forEach((flavorInfo) => {
      let [flavor, quantity] = flavorInfo.split(" => ");
      quantity = Number(quantity);

      if (!flavors[flavor]) {
        flavors[flavor] = 0;
      }

      flavors[flavor] += quantity;

      if (flavors[flavor] >= 1000) {
        bottlesMade = parseInt(flavors[flavor] / 1000);
        flavors[flavor] = flavors[flavor] % 1000;

        if (!madeBottles.get(flavor)) {
          madeBottles.set(flavor, 0);
        }

        madeBottles.set(flavor, bottlesMade + madeBottles.get(flavor));
      }
    });
  }
}

console.log(
  juiceFactory([
    "Kiwi => 234",

    "Pear => 2345",

    "Watermelon => 3456",

    "Kiwi => 4567",

    "Pear => 5678",

    "Watermelon => 6789",
  ])
);
