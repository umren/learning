// Returns the sum of the object's value with the given Number
function add(other, yet_another) {
  return this.value + other + (yet_another || 0);
}

var one = { value: 1, add: add };
var two = { value: 2, add: add };

console.log(one.add(1, 1)); // 3

console.log(add(1)); // NaN

console.log(add.call(one, 1, 1)); // 3
console.log(add.apply(one, [1, 1])); // 3

let one_add = add.bind(one);

console.log(one_add(2)); // 3
