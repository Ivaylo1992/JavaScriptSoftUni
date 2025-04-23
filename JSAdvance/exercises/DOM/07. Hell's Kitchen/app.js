function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  const bestRestaurant = document.querySelector("#bestRestaurant > p");
  const workers = document.querySelector("#workers > p");

  function onClick() {
    let restaurants = {};

    const input = JSON.parse(
      document.querySelector("#inputs > textarea").value
    );

    input.forEach((info) => {
      let infoArr = info.split(" - ");
      let restaurantName = infoArr.shift();

      if (!restaurants[restaurantName]) {
        restaurants[restaurantName] = {
          workers: [],
          avgSalary: 0,
        };
      }

      let workersInfo = infoArr.shift().split(", ");

      for (let workerInfo of workersInfo) {
        workerInfo = workerInfo.split(" ");
        let name = workerInfo.shift();
        let salary = Number(workerInfo.shift());

        restaurants[restaurantName].workers.push({ name, salary });
      }

      let workers = restaurants[restaurantName].workers;
      workers.sort((a, b) => b.salary - a.salary);
      restaurants[restaurantName].avgSalary =
        workers.reduce((sum, w) => sum + w.salary, 0) / workers.length;
    });

    let sortedRestaurants = Object.entries(restaurants).sort(
      (a, b) => b[1].avgSalary - a[1].avgSalary
    );

    let bestRestaurantInfo = sortedRestaurants[0];


    bestRestaurant.textContent = `Name: ${bestRestaurantInfo[0]} Average Salary: ${bestRestaurantInfo[1].avgSalary.toFixed(2)} Best Salary: ${bestRestaurantInfo[1].workers[0].salary}`;

    let workersResult = bestRestaurantInfo[1].workers
    .map(w => `Name: ${w.name} With Salary: ${w.salary}`)
    .join(" ");
  

    workers.textContent = workersResult;
  }
}

// ["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]
