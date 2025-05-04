const chai = require("chai");
const { beforeEach } = require("mocha");
const { sampleProvinceData, Province } = require("./../ch04/sample");

const expect = chai.expect;
describe("province", function () {
  let asia;
  beforeEach(function () {
    asia = new Province(sampleProvinceData());
  });

  it("shortfall", function () {
    expect(asia.shortfall).equal(5);
  });
  it("profit", function () {
    expect(asia.profit).equal(230);
  });
});
