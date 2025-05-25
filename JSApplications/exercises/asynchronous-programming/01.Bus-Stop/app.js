function getInfo() {
  const stopIdInputEl = document.querySelector("#stopId");
  const stopNameDivEl = document.querySelector("#stopName");
  const bussesListEl = document.querySelector("#buses");

  const stopId = stopIdInputEl.value;

  const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

  fetch(url)
    .then((result) => result.json())
    .then((busStopInfo) => {
      bussesListEl.innerHTML = "";
      stopIdInputEl.value = "";
      stopNameDivEl.textContent = busStopInfo.name;

      const buses = busStopInfo.buses;

      Object.entries(buses).forEach((bus) => {
        const busId = bus[0];
        const time = bus[1];

        const newLiEl = document.createElement("li");
        newLiEl.textContent = `Bus ${busId} arrives in ${time} minutes`;

        bussesListEl.appendChild(newLiEl);
      });
    })
    .catch((err) => {
      stopNameDivEl.textContent = "Error";
      bussesListEl.innerHTML = "";
    });
}
