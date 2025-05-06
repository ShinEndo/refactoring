const chai = require("chai");
const { Order, Priority } = require("../../ch07/sample02");

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
      (o) =>
        "high" === o.priority.toString() || "rush" === o.priority.toString()
    ).length;
    expect(highPriorityCount).equal(4);
  });
  it("Order - higherThan ", function () {
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
    const highPriorityCount = orders.filter((o) =>
      o.priority.higherThan(new Priority("normal"))
    ).length;
    expect(highPriorityCount).equal(4);
  });
});
