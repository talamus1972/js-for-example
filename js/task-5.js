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

// =======================================================

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
];

// // --------------------------------------
// function getUserEmails(users) {
//     const sum = [];
//     const values = Object.values(users);
//     for (const value of values) {
//         sum.push(value.email);
//     }
// return sum;
// }
// console.log(getUserEmails(users));

// // ---------------------OR-------------------

const getUserEmails = users => {
  return users.map(user => user.email);
};

// const userEmails = getUserEmails(users);
// console.log(userEmails);

// -------------------------------------------------------------------------
// const getUserEmails = (users) => {
//   return users.map(user => user.email);
// };

// ----------------------------------------------------

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 === 1);

// console.log(oddNumbers);

// ------------------------------------------------------

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// // const getUsersWithEyeColor = (users, color) =>
// //   users.filter(user => user.eyeColor === color);

// // console.log(getUsersWithEyeColor(users, 'blue'));

// const getUsersWithAge = (users, minAge, maxAge) =>
//   users.filter(user => user.age > minAge && user.age < maxAge);

// console.log(getUsersWithAge(users, 20, 30));

// ------------------------------------------------------------------------------------------

// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce(
//   (acc, player) => acc + player.playtime / player.gamesPlayed,
//   0
// );

// console.log(totalAveragePlaytimePerGame); //1023

// Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця,
// і отримати загальну суму цих значень часу у змінній totalAveragePlaytimePerGame.
// Розрахувати час для кожного з гравців можна, розділивши його час(властивість playtime) на кількість ігор(властивість gamesPlayed).

// Поради:

// Використовуй метод reduce() для ітерації по масиву players та обчислення загальної суми середнього часу на одну гру.
// Усередині колбек функції reduce(), поділи playtime гравця на gamesPlayed, щоб отримати середній час, витрачений на одну гру кожним гравцем.
// Накопичуй результат у змінній acc і повертай його в кінці кожної ітерації.
// Ініціалізуй параметр acc методу reduce() початковим значенням 0, щоб уникнути отримання NaN при виконанні обчислень.
// В результаті змінна totalAveragePlaytimePerGame міститиме загальну суму середнього часу на одну гру для всіх гравців.

// -------------------------------------------------------------------------------------

// const calculateTotalBalance = users =>
//   users.reduce((acc, user) => acc + user.balance, 0);

// console.log(calculateTotalBalance(users)); //20916

// -------------------------------------------------------------------------------------------------
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
// ];

// const ascendingReleaseDates = releaseDates.toSorted();
// console.log(ascendingReleaseDates);
// const alphabeticalAuthors = authors.toSorted();
// console.log(alphabeticalAuthors);

// ------------------------------------------------------------------------

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     rating: 7.94,
//   },
//   {
//     title: 'Enemy of God',
//     author: 'Bernard Cornwell',
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = books.toSorted((a, b) =>
//   a.author.localeCompare(b.author)
// );
// console.log(
//   '🚀 ~ file: task-10.js:179 ~ sortedByAuthorName:',
//   sortedByAuthorName
// );

// const sortedByReversedAuthorName = books.toSorted((a, b) =>
//   b.author.localeCompare(a.author)
// );
// console.log(
//   '🚀 ~ file: task-10.js:187 ~ sortedByReversedAuthorName:',
//   sortedByReversedAuthorName
// );

// const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);
// console.log(
//   '🚀 ~ file: task-10.js:185 ~ sortedByAscendingRating:',
//   sortedByAscendingRating
// );

// const sortedByDescentingRating = books.toSorted((a, b) => b.rating - a.rating);
// console.log(
//   '🚀 ~ file: task-10.js:201 ~ sortedByDescentingRating:',
//   sortedByDescentingRating
// );

// ------------------------------------------------------------------------

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];

// Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку,
//   рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.

// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .toSorted((a, b) => a.localeCompare(b));
// console.log('🚀 ~ file: task-10.js:240 ~ names:', names);
// ------------------------------------------------------------------------------
