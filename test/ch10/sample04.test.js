const chai = require("chai");
const { rating } = require("../../ch10/sample04");

const expect = chai.expect;
describe("ch10 ポリモーフィズムによる条件記述の置き換え", function () {
  it("rating", function () {
    const voyage = { zone: "west-indies", length: 10 };
    const history = [
      { zone: "east-indies", profit: 5 },
      { zone: "west-indies", profit: 15 },
      { zone: "china", profit: -2 },
      { zone: "west-africa", profit: 7 },
    ];
    expect(rating(voyage, history)).equal("B");
  });
});
