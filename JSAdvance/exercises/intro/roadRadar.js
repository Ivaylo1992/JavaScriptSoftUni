function roadRadar(speed, area) {
  const speedLimit = getAreaSpeedLimit(area);
  const info = getSpeedInfo(speedLimit, speed);

  return info
  // Shows the speed limit depending on the area
  function getAreaSpeedLimit(givenArea) {
    const areasLimits = {
      motorway: 130,
      interstate: 90,
      city: 50,
      residential: 20,
    };

    return areasLimits[givenArea];
  }

  // Gives information about the driving speed
  function getSpeedInfo(givenLimit, currentSpeed) {
    if (givenLimit >= currentSpeed) {
      return `Driving ${currentSpeed} km/h in a ${givenLimit} zone`;
    }

    const kmOverLimit = currentSpeed - givenLimit;
    let status;

    if (kmOverLimit <= 20) {
      status = "speeding";
    } else if (kmOverLimit <= 40) {
      status = "excessive speeding";
    } else {
      status = "reckless driving";
    }

    return `The speed is ${kmOverLimit} km/h faster than the allowed speed of ${givenLimit} - ${status}`;
  }
}

console.log(roadRadar(21, 'residential'))