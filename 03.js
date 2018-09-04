// minimum
function min(a, b) {
  if (a <= b) {
    return a;
  }

  return b;
}

// recursion
function isEven(num) {
  if (num < 0) {
    isEven(Math.abs(num));
  }

  if (num % 2 == 0) {
    return true
  }

  return false;
}


// bean counting
function countChar(str, find) {
  let b = 0;

  for (let i = 0; i != str.length; i++) {
    if (str[i] == find) {
      b++;
    }
  }

  return b;
}

console.log(countChar("BhellobbBb", "h"));
