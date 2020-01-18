module.exports = class shoppingCart {
  constructor() {
    this.cart = [];
  }

  getItems() {
    return this.cart;
  }

  addItem(itemName, quantity, price) {
    this.cart.push({ name: itemName, pricePerUnit: price, quantity: quantity });
    //console.log(this.cart);
  }

  clear() {
    this.cart = [];
  }

  total() {
    const cartTotal = this.cart.reduce(function(totalSum, item) {
      totalSum += item.pricePerUnit * item.quantity;

      return totalSum;
    }, 0);

    return cartTotal;
  }
};
