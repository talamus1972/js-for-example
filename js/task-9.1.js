//TODO: № 8 ================================================================
// Потрібно написати функцію, яка приймає 2 параметри key та obj,
// яка буде перебирати об'єкт
// Якщо у об'єкта є такий ключ - поверне true
// Є 2 варіанти рішення, спочатку напишемо функцію,
// потім вирішимо простим способом





//TODO: № 9 ==============================================================
// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

//TODO: № 10 ==============================================================
// Напиши функцію яка приймає массив чисел і повертає новий массив,
// унікальних чисел, які не півторюються

// const numbers = [1, 1, 1, 2, 3, 4, 7, 7, 6, 6, 5, 4, 23, 22, 22, 111, 1, 5];


//TODO: =============================================
//Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email


//TODO: № 9 на class ✅ ==============================
//  Написати клас, який буде представляти зоопарк тварин.
//  Створити загальний клас Animal для тварин.
// У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// Кожен тип тварин повинен мати свої властивості та методи, наприклад,
//  методи для отримання інформації про тварину та для годівлі тварин.
//  Крім того, зоопарк повинен мати метод для додавання тварин до списку та
// метод для виведення списку всіх тварин у зоопарку.

// =========================================================================

// https://www.freecodecamp.org/news/lets-learn-javascript-closures-66feb44f6a44

// https://bystock.me/b27142663a?subid1=39765&subid2=457595&subid3=6502&utm_source=mixadvert&utm_medium=cpc&utm_campaign=39765&utm_term=6502&utm_content=457595#0#1#0#1

// Функція checkForName(fullName, firstName) приймає два параметри та повертає буль true
// або false - результат перевірки входження підрядка firstName у рядок fullName.

// fullName - рядок, що містить повне ім'я
// firstName - рядок, що містить ім'я для перевірки його входження в повне ім'я
// Доповни тіло функції таким чином, щоб вона повертала результат
// перевірки входження імені(параметр firstName), у повне ім'я (параметр fullName).
// Врахуй, що регістр символів в параметрах fullName і firstName наперед не відомий.
// Перед перевіркою входження не забудь прирівняти їх до однакового регістру.

// function checkForName(fullName, firstName) {
//     const upperFullName = fullName.toUpperCase();
//      const upperFirstName = firstName.toUpperCase();
//     if (upperFullName.includes(upperFirstName)) {
//         return true;
//     }
//     else {
//         return false;
//         }
    
// }

// function checkForName(fullName, firstName) {
//   return fullName.toUpperCase().includes(firstName.toUpperCase()) ? true : false;
// }




// console.log(checkForName("Jason Neis", "Jason"));  //повертає true
// console.log(checkForName("Jason Neis", "jAsOn"));  //повертає true
// console.log(checkForName("Jason Neis", "Jacob"));  //повертає false
// console.log(checkForName("Caty Stars", "Caty") ); //повертає true
// console.log(checkForName("Caty Stars", "cAtY"));  //повертає true
// console.log(checkForName("Caty Stars", "Andromeda"));  //повертає false


  console.log('' || 0);
