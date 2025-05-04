const assert = require("assert");
const { sampleProvinceData, Province } = require("./../ch04/sample");

describe("province", function () {
  it("shortfall", function () {
    const asia = new Province(sampleProvinceData());
    assert.equal(asia.shortfall, 5);
  });
});
