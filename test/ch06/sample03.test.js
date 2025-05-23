const chai = require("chai");
const { price, Order } = require("../../ch06/sample03");

const expect = chai.expect;
describe("ch06 変数の抽出", function () {
  it("price", function () {
    const order = { quantity: 5, itemPrice: 100 };
    expect(price(order)).equal(550);
  });

  it("price - quantity than 500", function () {
    const order = { quantity: 1000, itemPrice: 100 };
    expect(price(order)).equal(97600);
  });

  it("price - itemPrice equal 0", function () {
    const order = { quantity: 500, itemPrice: 0 };
    expect(price(order)).equal(0);
  });

  it("Order", function () {
    const order = new Order({ quantity: 5, itemPrice: 100 });
    expect(price(order)).equal(550);
  });

  it("Order - quantity than 500", function () {
    const order = new Order({ quantity: 1000, itemPrice: 100 });
    expect(price(order)).equal(97600);
  });

  it("Order - itemPrice equal 0", function () {
    const order = new Order({ quantity: 500, itemPrice: 0 });
    expect(price(order)).equal(0);
  });
});
