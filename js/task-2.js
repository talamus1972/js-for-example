// const start = 6;
// const end = 17;

// let number;

// for (let i = start; i < end; i++) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);
// console.log(calculateEvenTotal(6, 17)); //10
// console.log(calculateEvenTotal(17, 25)); //20
// console.log(calculateEvenTotal(2, 11)); //5

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// const values = Object.values(colors);
// console.log(values);
// for (const keys of values) {
//   console.log(hexColors.push(keys.hex));
// }
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// function getProductPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
//     if (product.name === productName) {
//       //   console.log(name.product);
//       return product.price;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice('Radar')); //повертає 1300.
// console.log(getProductPrice('Grip')); //повертає 1200.
// console.log(getProductPrice('Scanner')); //повертає 2700.
// console.log(getProductPrice('Droid')); //повертає 400.
// console.log(getProductPrice('Engine')); //повертає null.

// function getAllPropValues(propName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   const values = [];
//   for (const product of products) {
//     if (propName === 'name') {
//       values.push(product.name);
//     } else if (propName === 'price') {
//       values.push(product.price);
//     } else if (propName === 'quantity') {
//       values.push(product.quantity);
//     }
//   }
//   return values;

// console.log(getAllPropValues('name')); //повертає ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues('quantity')); //повертає [4, 3, 7, 9]
// console.log(getAllPropValues('price')); //повертає [1300, 2700, 400, 1200]
// console.log(getAllPropValues('category')); //повертає []

function calculateTotalPrice(productName) {
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];

  // const values = [];
  //   const names = Object.names(productName);
  for (const product of products) {
    if (productName === product.name) {
      const totalPrice = product.price * product.quantity;
      return totalPrice;
    }
  }
  return `Product ${productName} not found!`;
}

console.log(calculateTotalPrice('Blaster')); //"Product Blaster not found!"
console.log(calculateTotalPrice('Radar')); //5200
console.log(calculateTotalPrice('Droid')); //2800
console.log(calculateTotalPrice('Grip')); //10800
console.log(calculateTotalPrice('Scanner')); //8100
