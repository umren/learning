// the sum of a range
function range(start, end, step) {
  if (!step) step = 1;

  let arr = [];

  for (let i = start; i <= end; i = i + step) {
    arr.push(i);
  }

  return arr;
}

function sum(arr) {
  let all = 0;

  for (let i = arr.length; i > 0; i--) {
    all = all + i;
  }

  return all;
}

// reversing an array
function reverseArray(arr) {
  let newArr = [];

  for (let i = arr.length; i > 0; i--) {
    newArr.push(arr[i - 1]);
  }

  return newArr;
}

// reverse in place
function reverseArrayInPlace(arr) {

  for (let i = 1; i <= (Math.floor(arr.length / 2)); i++)  {
    let temp = arr[arr.length - i]
    arr[arr.length - i] = arr[i - 1];
    arr[i - 1] = temp;
  }

  return arr;
}

// array to list
function arrayToList(arr) {

}

console.log(arrayToList[1, 2, 3]);
