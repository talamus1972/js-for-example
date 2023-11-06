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

// function getExtremeScores(scores) {
//   const best = Math.max(...scores);
//   const worst = Math.min(...scores);
//   return { best, worst };
// }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26])); //повертає об'єкт { best: 93, worst: 17 }
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24])); //повертає об'єкт { best: 81, worst: 4 }
// //Math.max() і Math.min() використовується синтаксис ... на масиві scores
