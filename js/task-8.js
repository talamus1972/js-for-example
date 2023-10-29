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
console.log(createReversedArray() );//повертає []