const pizzaPalace = {
  pizzas: ['Supercheese', 'Smoked', 'Four meats'],
  checkPizza(pizzaName) {
    return pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
};

pizzaPalace.order('Smoked'); //повертає рядок "Order accepted, preparing «Smoked» pizza"
pizzaPalace.order('Four meats'); //повертає рядок "Order accepted, preparing «Four meats» pizza"
pizzaPalace.order('Big Mike'); //повертає рядок "Sorry, there is no pizza named «Big Mike»"
pizzaPalace.order('Viennese'); //повертає рядок "Sorry, there is no pizza named «Viennese»"
console.log('🚀 ~ pizzaPalace;', pizzaPalace);
console.log('🚀 ~ console;', console);
