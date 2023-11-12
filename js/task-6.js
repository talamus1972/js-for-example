// const pizzaPalace = {
//   pizzas: ['Supercheese', 'Smoked', 'Four meats'],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// pizzaPalace.order('Smoked'); //повертає рядок "Order accepted, preparing «Smoked» pizza"
// console.log("🚀  pizzaPalace.order('Smoked');", pizzaPalace.order('Smoked'));

// pizzaPalace.order('Four meats'); //повертає рядок "Order accepted, preparing «Four meats» pizza"
// console.log(
//   "🚀  pizzaPalace.order('Four meats');",
//   pizzaPalace.order('Four meats')
// );

// pizzaPalace.order('Big Mike'); //повертає рядок "Sorry, there is no pizza named «Big Mike»"
// console.log(
//   "🚀  pizzaPalace.order('Big Mike');",
//   pizzaPalace.order('Big Mike')
// );

// pizzaPalace.order('Viennese'); //повертає рядок "Sorry, there is no pizza named «Viennese»"
// console.log(
//   "🚀  pizzaPalace.order('Viennese');",
//   pizzaPalace.order('Viennese')
// );

// ===============================================================================================


class Car {
    #brand;
    

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
      this.price = price;
      console.log(this.#brand);
  }

    

  getPrice() {
    return this.price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
  getBrand(){
    return this.#brand;
  }
  changeBrand(newBrand){
    this.#brand = newBrand;
    }
    
}

console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));
//утвориться об'єкт { model: "Q3", price: 36000 }

// console.log(changeBrand("Honda"));