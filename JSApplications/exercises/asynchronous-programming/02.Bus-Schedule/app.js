function solve() {
  const departButton = document.querySelector("#depart");
  const arriveButton = document.querySelector("#arrive");
  const infoSpan = document.querySelector("span");

  let currentStopId = "depot";
  let nextStopId = "";
  let currentStopName = "";

  function depart() {
    const url = `http://localhost:3030/jsonstore/bus/schedule/${currentStopId}`;
    fetch(url)
      .then((result) => result.json())
      .then((info) => {
        currentStopName = info.name;
        nextStopId = info.next;
        infoSpan.textContent = `Next stop ${currentStopName}`;
        arriveButton.removeAttribute("disabled");
        departButton.setAttribute("disabled", true);
      })
      .catch((err) => {
        arriveButton.setAttribute("disabled", true);
        departButton.setAttribute("disabled", true);
      });
  }

  function arrive() {
    infoSpan.textContent = `Arriving at ${currentStopName}`;
    currentStopId = nextStopId;

    departButton.removeAttribute("disabled");
    arriveButton.setAttribute("disabled", true);
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
