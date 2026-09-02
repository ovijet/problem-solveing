function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let fare = 50;

  if (distance > 2) {
    fare += (distance - 2) * 15;
  }

  fare += waitingMinutes * 2;

  if (isNight) {
    fare = fare * 1.2;
  }

  return fare;
}

console.log(getCngFare(10, true, 5)); // Example usage