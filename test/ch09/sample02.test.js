const chai = require("chai");
const { discount } = require("../../ch09/sample02");

const expect = chai.expect;
describe("ch09 変数の分離（２）", function () {
  it("discont", function () {
    expect(discount(50,100)).equal(50);
    expect(discount(25,100)).equal(25);
    expect(discount(10,100)).equal(10);
    expect(discount(50,50)).equal(50);
    expect(discount(50,5)).equal(50);
  });
  it("discont - inputValue Than 50", function () {
    expect(discount(51,100)).equal(49);
  });
  it("discont - quantity Than 100", function () {
    expect(discount(50,101)).equal(49);
  });
  it("discont - inputValue Than 50 && quantity Than 100", function () {
    expect(discount(51,101)).equal(48);
  });
});
