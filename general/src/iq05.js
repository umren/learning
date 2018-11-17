/* this */
var f = function() {
  this.x = 5;
  (function() {
    this.x = 3;
  })();
  console.log(this.x);
};

var obj = {
  x: 4,
  m: function() {
    console.log(this.x);
  }
};

f(); // 3
new f(); // 5
obj.m(); // 4
new obj.m(); // undef
f.call(f); // 5
obj.m.call(f); // 5

// kek 1
function f2() {
  this.x = 355;
  console.log(this === global); // true
  console.log(this.x); // 355
}
f2();

// kek 2
function f3() {
  this.x = 553;
  console.log(this === global); // false
  console.log(this.x);
}
var o = new f3();
console.log(o.x === 5); // true

///////////////

var value = 5;

function returnValue() {
  return value;
}

function applyCallback(callback) {
  var value = 10;
  return callback();
}

let n = applyCallback(returnValue);

console.log(n); // 5

do {
  console.log(1);
} while (false);
while (0) {
  console.log(2);
}

// output = 1
