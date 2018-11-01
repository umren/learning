function timeout(ms) {
  return new Promise(resolve =>
    setTimeout(() => {
      console.log("Should be shown first");
      resolve();
    }, ms)
  );
}

async function getUser(id) {
  await timeout(2000);

  return { id: 1 };
}

async function processUser(id) {
  return id;
}

async function printUser(id) {
  console.log(id);
}

async function main() {
  await getUser(1)
    .then(user => {
      console.log(user);
      return user;
    })
    .then(processUser)
    .then(printUser);

  console.log("It ended, good for all.");
}

main();
