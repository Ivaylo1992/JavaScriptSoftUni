function ticketSystem(arr, sortBy) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  const sortingMapper = {
    destination: (arr) => arr.sort((a, b) => a.destination.localeCompare(b.destination)),
    status: (arr) => arr.sort((a, b) => a.status.localeCompare(b.status)),
    price: (arr) => arr.sort((a, b) => a.price - b.price),
  };

  let result = [];

  arr.forEach((element) => {
    const [destination, price, status] = element.split("|");
    const priceAsNum = Number(price);

    const newTicket = new Ticket(destination, priceAsNum, status);
    result.push(newTicket);

    result.push();
  });

  sortingMapper[sortBy](result);
  return result
  
}

console.log(
  ticketSystem(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
  )
);
