function attachEvents() {
  const locationInput = document.querySelector("#location");
  const submitButton = document.querySelector("#submit");
  const forecastDiv = document.querySelector("#forecast");
  const currentDiv = document.querySelector("#current");
  const upcomingForecastDiv = document.querySelector("#upcoming");

  submitButton.addEventListener("click", (e) => {
    // currentDiv.innerHTML = '<div class="label">Current conditions</div>';
    // upcomingForecastDiv.innerHTML =
    //   '<div class="label">Three-day forecast</div>';

    const locationUrl = `http://localhost:3030/jsonstore/forecaster/locations`;
    const locationName = locationInput.value;

    fetch(locationUrl)
      .then((result) => result.json())
      .then((locationsInfo) => {

        const location = locationsInfo.find((loc) => loc.name === locationName);

        const locationCode = location.code;
        const todayForecastUrl = `http://localhost:3030/jsonstore/forecaster/today/${locationCode}`;
        const upcomingForecastUrl = `http://localhost:3030/jsonstore/forecaster/upcoming/${locationCode}`;

        return Promise.all([
          fetch(todayForecastUrl).then((res) => res.json()),
          fetch(upcomingForecastUrl).then((res) => res.json()),
        ]);
      })
      .then(([todayData, upcomingData]) => {
        const todayHighTemp = todayData.forecast.high;
        const todayLowTemp = todayData.forecast.low;
        const condition = todayData.forecast.condition;

        icons = {
          Sunny: "&#x2600",
          "Partly sunny": "&#x26C5",
          Overcast: "&#x2601",
          Rain: "&#x2614",
          degrees: "&#176;",
        };

        forecastDiv.style.display = "block";

        const currentForecastDiv = document.createElement("div");
        currentForecastDiv.classList.add("forecast");
        currentDiv.appendChild(currentForecastDiv);

        const conditionSymbolSpan = document.createElement("span");
        conditionSymbolSpan.setAttribute("class", "condition symbol");
        conditionSymbolSpan.innerHTML = icons[condition];
        currentForecastDiv.appendChild(conditionSymbolSpan);

        const mainConditionSpan = document.createElement("span");
        mainConditionSpan.classList.add("condition");
        currentForecastDiv.appendChild(mainConditionSpan);

        const locationSpan = document.createElement("span");
        locationSpan.classList.add("forecast-data");
        locationSpan.textContent = todayData.name;
        mainConditionSpan.appendChild(locationSpan);

        const degreesSpan = document.createElement("span");
        degreesSpan.classList.add("forecast-data");
        degreesSpan.textContent = `${todayLowTemp}\u00B0/${todayHighTemp}\u00B0`;
        mainConditionSpan.appendChild(degreesSpan);

        const conditionSpan = document.createElement("span");
        conditionSpan.classList.add("forecast-data");
        conditionSpan.textContent = condition;
        mainConditionSpan.appendChild(conditionSpan);

        const forecastInfoDiv = document.createElement("div");
        forecastInfoDiv.classList.add("forecast-info");
        upcomingForecastDiv.appendChild(forecastInfoDiv);

        upcomingData.forecast.forEach((forecast) => {
          const currentCondition = forecast.condition;
          const currentHighTemp = forecast.high;
          const currentLowTemp = forecast.low;

          const upcomingSpan = document.createElement("span");
          upcomingSpan.classList.add("upcoming");
          forecastInfoDiv.appendChild(upcomingSpan);

          const symbolSpan = document.createElement("span");
          symbolSpan.classList.add("symbol");
          symbolSpan.innerHTML = icons[currentCondition];
          upcomingSpan.appendChild(symbolSpan);

          const currentDegreesSpan = document.createElement("span");
          currentDegreesSpan.classList.add("forecast-data");
          currentDegreesSpan.innerHTML = `${currentLowTemp}${icons.degrees}/${currentHighTemp}${icons.degrees}`;
          upcomingSpan.appendChild(currentDegreesSpan);

          const currentConditionSpan = document.createElement("span");
          currentConditionSpan.classList.add("forecast-data");
          currentConditionSpan.textContent = forecast.condition;
          upcomingSpan.appendChild(currentConditionSpan)

        });
      })
      // .catch((err) => {
      //   forecastDiv.style.display = "block";

      //   currentDiv.innerHTML = '<div class="label">Error</div>';
      //   upcomingForecastDiv.innerHTML = '<div class="label">Error</div>';
      // });
  });
}

attachEvents();
