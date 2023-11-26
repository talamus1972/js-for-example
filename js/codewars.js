// function areYouPlayingBanjo(name) {
//   if (name.startsWith('R') || name.startsWith('r')) {
//     return name + ' plays banjo';
//   }
//   return name + ' does not play banjo';
// }

// console.log(areYouPlayingBanjo('rsRrtyty'));

// =====================================================================

// function neutralise(s1, s2) {
//   if (s1.includes('+') && s2.includes('+')) {
//     return `"+" against a "+" returns another "+"`;
//   } else if (s1.includes('-') && s2.includes('-')) {
//     return `"-" against a "-" returns another "-"`;
//   } else if (s1.includes('-') && s2.includes('+')) {
//     s1.reduce('-', '0');
//     return `"+" against a "-" returns "0"`;
//     //   } else (s1.includes('+') && s2.includes('-')) {
//     //     s1.reduce('+', '0');
//     //     return `"+" against a "-" returns "0"`;
//     //   }
//   }
// }
// console.log(neutralise('--++--', '++--++'));

// function countPositivesSumNegatives(input) {
//   let sum = [];
//   for (let i = 0; i < input.length; i++) {
//     if (i > 0) {
//       i++;
//     }
//     else (
//       r
//     )
//   }
//   return i;
// }

// const pop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// console.log(countPositivesSumNegatives(pop));


// ==========================================================



// function abbrevName(name) {
//   const nameToUpperCase = name.toUpperCase();
//   const nameParts = nameToUpperCase.split(" ");
  

  
//   const abbreviatedName = nameParts.map(word => word[0]).join('.');

//   return abbreviatedName;
// }

// console.log(abbrevName('Sam Harris')); // S.H
// console.log(abbrevName('patrick feeney')); // P.F

// function cockroachSpeed(s) {
//   const speed = s * 100000 / 3600;
  
//   return Math.round(speed);
// }

// console.log(cockroachSpeed(1.08));// 30

// const countSheep = function (num) {
//   const count = Number(num.split(' ')[0]);
//   console.log(count);
//   let result = '';

//   for (let i = 1; i <= count; i++) {
//     result += i + ' sheep...';
//   }

//   return result;
// }

// console.log(countSheep('1 sheep...')); // "1 sheep..."
// console.log(countSheep('3 sheep...')); // "1 sheep...2 sheep...3 sheep..."

// function smash(words) {
//   const word = words.join(' ');
//    return word
// };

// console.log(smash(['hello', 'world', 'this', 'is', 'great']));
// // =>  'hello world this is great'

// function digitize(n) {
// let digitsArray = [];
//   const res = String(n);
//   const res1 = res.split('').reverse();

  
//   for (const number of res1) {
//     digitsArray.push(Number(number));
//     console.log(Number(number));
//   }
//   return digitsArray;
// }


// console.log(digitize(35231));//[1,3,2,5,3]

// ================================================================

// function opposite(number) {
//   return -number;
// }
   

// console.log(opposite(1));//-1
// console.log(opposite(14));//-14
// console.log(opposite(-34));//34

// ==================================================
// const arr = ["Keep", "Remove", "Keep", "Remove", "Keep"];

// function removeEveryOther(arr){
//   return arr.filter((str, index) => index % 2 === 0);
// }

// console.log(removeEveryOther(arr));

// ============================================================

// function updateLight(current) {
//   if (current === 'green') {
//     return 'yellow'
//   }
//   else if (current === 'yellow') {
//     return 'red'
//   }
       
   
//   else if (current === 'red'){
//     return 'yellow'
//   }

// }

// console.log(updateLight('red'));

// function sum (numbers) {
//   const numToStr = numbers.reduce((acc, number) => number + acc, 0)
    
//     return numToStr
// };

// console.log(sum([1, 5.2, 4, 0, -1]));//9.2
// console.log(sum([-2.398]));//9.2

// function testEven(n) {
//     if(n*100 % 2 === 0){
//       return true;
//     }
  
//   return false;
// }

// console.log(testEven(0.1));

// function removeExclamationMarks(s) {
//   const strToArr = s.split('');
//   const str = strToArr.filter(value => value !== '!');
//   return str.join('');
// }

// console.log(removeExclamationMarks("Hello World!"));//"Hello World"
// console.log(removeExclamationMarks("TSoeSZpsJX!ARFVkPe!Fwd"));
// //"TSoeSZpsJXARFVkPeFwd"

// ================================================

// const arrSheep = [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true, true]
  
// function countSheeps(sheep) {

//   const str = sheep.filter((value) => value === true).reduce((acc, val) => acc + val, 0);

//   return str;

// }

// console.log(countSheeps(arrSheep));//17

// function rentalCarCost(d) {
//   let rentCarForDay = 40;
//   if(d < 3){
//     return rentCarForDay * d;
//   }
//   else if (d >= 3 && d < 7) {
//     return rentCarForDay * d - 20;
//   }
//   else if (d >= 7) {
//     return rentCarForDay * d - 50;
//   }
// }
// console.log(rentalCarCost(1));// 40
// console.log(rentalCarCost(2));// 80
// console.log(rentalCarCost(3));// 100
// console.log(rentalCarCost(4));// 140
// console.log(rentalCarCost(7));// 230

// =================================================================

String.prototype.toAlternatingCase = function () {
  // Define your method here :)
}



console.log(toAlternatingCase("hello world")); // "HELLO WORLD"
console.log(toAlternatingCase("HELLO WORLD")); // "hello world"
console.log(toAlternatingCase("hello WORLD")); // "HELLO world"
console.log(toAlternatingCase("HeLLo WoRLD")); // "hEllO wOrld"
console.log(toAlternatingCase("12345"));       // "12345"  // Non-alphabetical characters are unaffected
console.log(toAlternatingCase("1a2b3c4d5e"));  // "1A2B3C4D5E"
console.log(toAlternatingCase("String.prototype.toAlternatingCase")); // "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

 function strUpAndDown(str){
      var newStr = '';
    for(var i =0; i < str.length;i++){
      if(str[i].toLowerCase() === str[i]){
       newStr += str[i].toUpperCase();       
     }else {
       newStr += str[i].toLowerCase();
     }
   }
    return newStr;
  } 