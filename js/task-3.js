// function getSlice(array, value) {
//     for (let i = 0; i < array.length; i++){
//         if (array[i] === value) {
//             return array.slice(0, i + 1);
//         }

//     }
//    return array.slice(0, 0);
// }

// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));
// //повертає ["Mango", "Poly"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));
// //повертає ["Mango", "Poly", "Ajax"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));
// //повертає ["Mango"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"));
// //повертає []
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey"));
// //повертає []

function calculateTax(amount, taxRate = 0.2) {
  const apple = amount * taxRate;
  return apple;
}

console.log(calculateTax(100, 0.1)); //повертає 10
console.log(calculateTax(200, 0.1)); //повертає 20
console.log(calculateTax(100, 0.2)); //повертає 20
console.log(calculateTax(200, 0.2)); //повертає 40
console.log(calculateTax(100, 0.3)); //повертає 30
console.log(calculateTax(200, 0.3)); //повертає 60
console.log(calculateTax(100)); //повертає 20
console.log(calculateTax(200)); //повертає 40
