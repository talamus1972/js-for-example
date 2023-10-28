// function createArrayOfNumbers(min, max) {
//   let i = min;
//   for (; i <= max; i++) {
//     break;
//   }
//   console.log([i]);
// }

// console.log(createArrayOfNumbers(1, 3));
// // //повертає [1, 2, 3]
// // console.log(createArrayOfNumbers(14, 17));
// // //повертає [14, 15, 16, 17]
// // console.log(createArrayOfNumbers(29, 34));
// // //повертає [29, 30, 31, 32, 33, 34]
function checkStorage(storage, item) {
  const items = item.toLowerCase();
  // console.log(items);
  if (storage.includes(items)) {
    return `${items} is available to order!`;
  } else {
    return `Sorry! We are out of stock!`;
  }
}

console.log(checkStorage(['apple', 'plum', 'pear'], 'plum')); //повертає "plum is available to order!"
console.log(checkStorage(['apple', 'plum', 'pear'], 'pLuM')); //повертає "plum is available to order!"
console.log(checkStorage(['apple', 'plum', 'pear'], 'pear')); //повертає "pear is available to order!"
console.log(checkStorage(['apple', 'plum', 'pear'], 'pEAr')); //повертає "pear is available to order!"
console.log(checkStorage(['apple', 'plum', 'pear'], 'orange')); //повертає "Sorry! We are out of stock!"
console.log(checkStorage(['apple', 'plum', 'pear'], 'carrot')); //повертає "Sorry! We are out of stock!"
