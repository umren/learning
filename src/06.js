function applyForVisa(documents, resolve, reject) {
  console.log("Working on visa...");

  return new Promise((resolve, reject) => {
    setTimeout(function() {
      Math.random() > 0.5 ? resolve({}) : reject("Visa rejected.");
    }, 2000);
  });
}

function getVisa(visa) {
  console.log("Visa issued.");

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(visa), 2000);
  });
}
function bookHotel(visa) {
  console.log(`Booking a hotel. for ${visa}`);

  return Promise.resolve(visa);
}

function buyTickets() {
  console.log("Buying a ticket.");
}

applyForVisa({})
  .then(getVisa)
  .then(bookHotel)
  .then(buyTickets)
  .catch(err => {
    console.error(err);
    console.log("WTF!!");
  });
