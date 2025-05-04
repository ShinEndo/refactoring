const chai = require("chai");
const { sampleProvinceData, Province } = require("./../ch04/sample");

const expect = chai.expect;
describe("province", function () {
  it("shortfall", function () {
    const asia = new Province(sampleProvinceData());
    expect(asia.shortfall).equal(5);
  });
});
