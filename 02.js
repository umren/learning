// Looping a triangle
let num = 1
let str = '#'

while (num < 8) {
  console.log(str)
  str = str + '#'
  num++
}

// FizzBuzz
for (let i = 1; i <= 100; i++) {
  if ((i % 3 == 0) && (i % 5 == 0)) {
    console.log('FizzBuzz')
  } else if (i % 3 == 0) {
    console.log('Fizz')
  } else if (i % 5 == 0)  {
    console.log('Buzz')
  } else {
    console.log(i)
  }
}


// Chessboard
let chess = 8

for (let i = chess; i > 0; i--) {
  if (i % 2 == 0) {
    console.log(' # # # #');
  } else {
    console.log('# # # #')
  }
}
