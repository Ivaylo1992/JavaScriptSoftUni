function solution() {
    const recipes = {
      apple: [['carbohydrate', 1], ['flavour', 2]],
      lemonade: [['carbohydrate', 10], ['flavour', 20]],
      burger: [['carbohydrate', 5], ['fat', 7], ['flavour', 3]],
      eggs: [['protein', 5], ['fat', 1], ['flavour', 1]],
      turkey: [['protein', 10], ['carbohydrate', 10], ['fat', 10], ['flavour', 10]]
    };
  
    const ingredients = {
      protein: 0,
      carbohydrate: 0,
      fat: 0,
      flavour: 0
    };
  
    function restock(data) {
      const nutrient = data[0];
      const quantity = Number(data[1]);
      ingredients[nutrient] += quantity;
      return "Success";
    }
  
    function report() {
      return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
    }
  
    function prepare(data) {
      const recipe = data[0];
      const qty = Number(data[1]);
      const clone = structuredClone(ingredients);
  
      for (const [nutrient, amount] of recipes[recipe]) {
        const required = amount * qty;
        if (clone[nutrient] < required) {
          return `Error: not enough ${nutrient} in stock`;
        }
        clone[nutrient] -= required;
      }
  
      Object.assign(ingredients, clone);
      return "Success";
    }
  
    const actions = {
      restock,
      prepare,
      report
    };
  
    function main(input) {
      const parts = input.split(' ');
      const command = parts[0];
      const args = parts.slice(1);
      return actions[command](args);
    }
  
    return main;
  }
  



let manager = solution();

console.log(manager("prepare turkey 1")); // Success
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));









