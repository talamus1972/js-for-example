// function createArrayOfNumbers(min, max) {
//     const result = [];
//     for (let i = min; i <= max; i++) {
//         result.push(i);
//     }
//     return result;
// }
// console.log(createArrayOfNumbers(1, 3));
// // // //повертає [1, 2, 3]
// console.log(createArrayOfNumbers(14, 17));
// // // //повертає [14, 15, 16, 17]
// console.log(createArrayOfNumbers(29, 34));
// // // //повертає [29, 30, 31, 32, 33, 34]

// =======================================================================

// function checkStorage(storage, item) {
//   const items = item.toLowerCase();
//   // console.log(items);
//   if (storage.includes(items)) {
//     return `${items} is available to order!`;
//   } else {
//     return `Sorry! We are out of stock!`;
//   }
// }

// console.log(checkStorage(['apple', 'plum', 'pear'], 'plum')); //повертає "plum is available to order!"
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pLuM')); //повертає "plum is available to order!"
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pear')); //повертає "pear is available to order!"
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pEAr')); //повертає "pear is available to order!"
// console.log(checkStorage(['apple', 'plum', 'pear'], 'orange')); //повертає "Sorry! We are out of stock!"
// console.log(checkStorage(['apple', 'plum', 'pear'], 'carrot')); //повертає "Sorry! We are out of stock!"

// ====================================================================================

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";

// ===================================================================================

// console.log(apartment);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (let key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
// }

// console.log(keys); // logs ["descr", "rating", "price"]
// console.log(values); // logs ["Spacious apartment in the city center", 4, 2153]

// =============================================================================================

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

// ============================================================================

// function countProps(object = {}) {
//   const keys = Object.keys(object);
//   let count = 0;

//   for (const key of keys) {
//     count += 1;
//   }

//   return count;
// }

// console.log(countProps({})); //повертає 0
// console.log(countProps({ name: "Mango", age: 2 })); //повертає 2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); ///повертає 3

// =================================================================================

// function countTotalSalary(salaries) {
//     let totalSalary = 0;

//     const values = Object.values(salaries);
//     for (const key of values) {

//         totalSalary += key;
//   }

//     return totalSalary;

// }

// console.log(countTotalSalary({})); //повертає 0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); //повертає 330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) );//повертає 400

// -----------------------------------------------

// function createReversedArray() {

//     for (const number of arguments) {
//         const number = Array.from(arguments);
//    return number.toReversed();
//   }

// }

function createReversedArray() {
  const reversedArray = Array.from(arguments).toReversed();
  return reversedArray;
}

console.log(createReversedArray(12, 85, 37, 4)); //повертає [4, 37, 85, 12]
console.log(createReversedArray(164, 48, 291)); //повертає [291, 48, 164]
console.log(createReversedArray(412, 371, 94, 63, 176)); //повертає [176, 63, 94, 371, 412]
console.log(createReversedArray()); //повертає []

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
