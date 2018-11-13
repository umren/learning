// what's the value of foo.x?
// bullshit bingo!!! https://stackoverflow.com/questions/32342809/javascript-code-trick-whats-the-value-of-foo-x
var foo = { n: 1 };
var bar = foo;
foo.x = foo = { n: 2 };

// write addition fucntion add(num1)(num2)... that works with any number of integers
function add(num1) {
  let sum = num1;

  return (func = function(num2) {
    if (num2) {
      sum += num2;
      return func;
    }

    return sum;
  });
}

// what will be value of a[b]
let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 123;
a[c] = 456;

// write simple function that checks if one parameter equals 3
function checkParam() {
  let args = Array.prototype.slice.call(arguments);

  args.forEach(val => {
    if (val === 3) {
      console.log("yes");
    }
  });
}

// combine two arrays [1, [1, 2, [3, 4]], [2, 4]] -> [1, 1, 2, 3, 4, 2, 4]

function compact(arr) {
  arr.forEach(val => {
    if (Array.isArray(val)) {
      console.log("Array");
    } else {
      console.log("Not Array");
    }
  });
}

compact([1, 2, [3, 4]]);
