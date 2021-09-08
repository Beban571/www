// let i = 0;
// do {
//   i += 2;
//   console.log(i);
// } while (i < 6);

// let n = 0;
// let x = 0;
// while (n < 3) {
//   n++;
//   x += n;
// }

// console.log(n)
// console.log(x)

let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log('Outer loops: ' + x);
  x += 1;
  z = 1;
  while (true) {
    console.log('Inner loops: ' + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}