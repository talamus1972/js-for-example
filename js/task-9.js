// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {

//      let totalPrice = 0;

//     for (const book of this.potions) {
//      totalPrice += book.price;
//       }
//       return totalPrice;
//   },
// };

// console.log(atTheOldToad.getPotions()); //
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.getTotalPrice());

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (const key of this.potions) {
//       if (key.name === oldName){
//           key.name = newName;
//     //    return this.potions;
//         }
       
//       }
    
//   },
// };

// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));
// //[{ name: "Speed potion", price: 460 }, { name: "Invisibility", price: 520 } ]
// console.log(atTheOldToad.updatePotionName("Speed potion", "Polymorth"));
// //[{ name: "Polymorth", price: 460 }, { name: "Invisibility", price: 520 } ]


// function add(...args) {
//   let sum = 0;
//   for (let i = 0; i < args.length; i += 1) {
//     sum += args[i];
//   }
//   return sum;
// }

// console.log(add(15, 27)); //повертає 42
// console.log(add(12, 4, 11, 48)); //повертає 75
// console.log(add(32, 6, 13, 19, 8)); //повертає 78

// function addOverNum(first, ...args) {

//      let sum = 0;
//     for (let i = 0; i < args.length; i += 1) {
//         if (args[i] > first) {
//          sum += args[i];
//      }
        
//   }
//   return sum;
// }

// console.log(addOverNum(50, 15, 27)); //повертає 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); //повертає 71
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); //повертає 51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); //повертає 218

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//     orderedItems.forEach(function (number) {
//         totalPrice += number
        
//     }
//     )
//     return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); //повертає 138
// console.log(calculateTotalPrice([164, 48, 291])); //повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //повертає 1116



// function filterArray(numbers, value) {
//     let newNumbers = [];
    
//     numbers.forEach(function (number) {
//         if (number > value) {
//             newNumbers.push(number);
//         }
//     });
    
//     return newNumbers;
// }





// console.log(filterArray([1, 2, 3, 4, 5], 3)); //повертає [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); //повертає [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); //повертає []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); //повертає [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); //повертає [24, 41, 76]

// function changeEven(numbers, value) {
//     let newNumbers = [];
//     numbers.forEach(number => {
//         if (number % 2 === 0) {
//            newNumbers.push(number + value);
//         }
//         else {
//             newNumbers.push(number);
// }
//     }  )
//     return newNumbers;
//     }




// console.log(changeEven([1, 2, 3, 4, 5], 10));
// //повертає новий масив [1, 12, 3, 14, 5]

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];


// const planetsLengths = planets.map(planet =>
// planet.length
// );

// console.log(planetsLengths);

const users = [ 
 {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

const getUserEmails = (users) => {
   return users.map(student.email);
 };

console.log(getUserEmails(users));