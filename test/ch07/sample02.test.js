const chai = require("chai");
const { default: Order } = require("../../ch07/sample02");

const expect = chai.expect;
describe("ch07 オブジェクトによるプリミティブの置き換え", function () {
  it("Order", function () {
    const datas = [
      {
        priority: "high",
      },
      {
        priority: "rush",
      },
      {
        priority: "low",
      },
      {
        priority: "high",
      },
      {
        priority: "rush",
      },
      {
        priority: "low",
      },
    ];
    const orders = datas.map((data) => new Order(data));
    const highPriorityCount = orders.filter(
      (o) => "high" === o.priorityString() || "rush" === o.priorityString()
    ).length;
    expect(highPriorityCount).equal(4);
  });
});
