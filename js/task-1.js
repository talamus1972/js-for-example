// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;
// }

// calculateTotal(1); //повертає 1
// console.log(calculateTotal(3)); //повертає 6
// calculateTotal(0); //повертає 0
// console.log(calculateTotal(18)); //повертає 171
// calculateTotal(24); //повертає 300
// calculateTotal();

// function calculateTotalPrice(order) {
//   let sum = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     sum += order[i];
//   }
//   return sum;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); //повертає 138
// calculateTotalPrice([164, 48, 291]); //повертає 503
// calculateTotalPrice([412, 371, 94, 63, 176]); //повертає 1116

// function getEvenNumbers(start, end) {
//   for (let i = start; i < end.length; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//       //   return [index];
//       // } else {
//       //   return [];
//       // }
//     }
//   }
// }
// // console.log(getEvenNumbers(2, 5)); //[2, 4]

// -----------------------------------------------------------------------
// function getFileName(file) {
//     let lastDotPosition = file.lastIndexOf(".");

//     return lastDotPosition === -1 ? file.slice(0) :
//         file.slice(0, lastDotPosition);

//     }

console.log(getFileName('styles.css')); // "styles"
console.log(getFileName('app.js')); // "app"
console.log(getFileName('app')); // "app"
console.log(getFileName('index.js')); // "index"
console.log(getFileName('index.html')); // "index"
console.log(getFileName('index.css')); // "index"
console.log(getFileName('index')); //iпdex

// -------------------------------------------------------------------------------------
// function calculateEvenTotal(number) {
//     let sum = 0;
// for (let i = 0; i <= number; i += 2) {
//      sum += i;
// }

//       return sum;
// }

console.log(calculateEvenTotal(1)); //0
console.log(calculateEvenTotal(3)); //2
console.log(calculateEvenTotal(7)); //12
console.log(calculateEvenTotal(18)); //90
console.log(calculateEvenTotal(27)); //182
