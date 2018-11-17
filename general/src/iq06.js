// q1
let str = "fgfggg";
// console.log(str[0]); // f

// q2
Number.prototype.plus = function(n) {
  return this + n;
};

Number.prototype.minus = function(n) {
  return this - n;
};

let n = (2).plus(2).minus(3);
// console.log(n); // 1

// q3
// let promise = new Promise(function(res, rej) {
//   setTimeout(function() {
//     console.log("Yeah");
//     res();
//   }, 5000);
// });

let promisesImages = [];
let count = promisesImages.length;

for (let i = 0; i < count; i++) {
  promisesImages.push(
    new Promise((resolveImg, rejectImg) => {
      let img = new Image();
      let startTime = Date.now();

      img.src = this.imgUrl + "?" + Math.floor(Math.random() * 100000000);

      img.onload = () => {
        resolveImg(Date.now() - startTime);
      };
      img.onerror = rejectImg;
    })
  );
}

//Promise.all(promisesImages).then(() => console.log("All Good"));
