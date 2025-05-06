const chai = require("chai");
const { default: Order } = require("../../ch07/sample03");

const expect = chai.expect;
describe("ch07 問い合わせによる一時変数の置き換え", function () {
  it("Order", function () {
    const order = new Order(10, { price: 100 });
    expect(order.price).equal(980);
  });
});
