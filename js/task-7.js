// function getCommonElements(array1, array2) {
//   const array3 = [];

//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       array3.push(array1[i]);
//     }
//   }

//   return array3;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); //повертає [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //повертає [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //повертає [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); //повертає [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); //повертає []

// function findNumber(start, end, divisor) {
//   for (let i = start; i < end; i++) {
//     if (start % divisor = 0) {
//           }

//   return i;
// }

// console.log(findNumber(2, 6, 5)); //повертає 5
// console.log(findNumber(8, 17, 3)); //повертає 9
// console.log(findNumber(6, 9, 4)); //повертає 8
// console.log(findNumber(16, 35, 7)); //повертає 21

function calculateEvenTotal(start, end) {
  let total = 0;
  for (let i = start; i < end; i++) {
    if (i % 2 === 0) {
      total += i;
    }
  }
  return total;
}
