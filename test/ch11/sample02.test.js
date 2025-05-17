const chai = require("chai");
const { deliveryDate } = require("../../ch11/sample02");

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
    expect(deliveryDate(anOrder,isRush)).equal(1);

    anOrder.deliveryState = "";
    expect(deliveryDate(anOrder,isRush)).equal(1);
  });
  it("deliveryDate - isRush = false", function () {
    const isRush = false;
    expect(deliveryDate(anOrder,isRush)).equal(2);

    anOrder.deliveryState = "";
    expect(deliveryDate(anOrder,isRush)).equal(2);

    anOrder.deliveryState = "MA";
    expect(deliveryDate(anOrder,isRush)).equal(1);
  });
});
