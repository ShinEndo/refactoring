const chai = require("chai");
const { deliveryDate, rushDeliveryDate, regularDeliveryDate } = require("../../ch11/sample02");

const expect = chai.expect;
describe("ch11 フラグパラメータの削除", function () {
  let anOrder;
  beforeEach(function () {
    anOrder = {
      deliveryState: "NY",
      placedOn: {
        baseDay: 2,
        plusDays: function(deliveryTime) {
          return deliveryTime <= 4 ? this.baseDay - 1 : this.baseDay; 
        }
      }
    };
  });
  it("deliveryDate - isRush = true", function () {
    const isRush = true;
    expect(rushDeliveryDate(anOrder)).equal(1);

    anOrder.deliveryState = "";
    expect(rushDeliveryDate(anOrder)).equal(1);
  });
  it("deliveryDate - isRush = false", function () {
    const isRush = false;
    expect(regularDeliveryDate(anOrder)).equal(2);

    anOrder.deliveryState = "";
    expect(regularDeliveryDate(anOrder)).equal(2);

    anOrder.deliveryState = "MA";
    expect(regularDeliveryDate(anOrder)).equal(1);
  });
});
