let minutes = process.argv[2];
if (!Number.isInteger(parseInt(minutes))) return;
let seconds = minutes * 60;

const interval = setInterval(() => {
  seconds -= 10;
  if (seconds <= 0) {
    clearInterval(interval);
    console.log(`Time's up!`);
    return;
  }

  console.log(`Time left: ${Math.ceil(seconds / 60)}`);
}, 10000);
