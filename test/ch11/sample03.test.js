const chai = require("chai");
const { HeatingPlan } = require("../../ch11/sample03");

const expect = chai.expect;
describe("ch11 オブジェクトそのものの受け渡し", function () {

  let aPlan;
  beforeEach(function () {
    aPlan = new HeatingPlan();
  });

  it("withinRange - True", function () {
    const aRoom = {daysTempRange: {low: 22, high: 24}};
    const low = aRoom.daysTempRange.low;
    const high = aRoom.daysTempRange.high;
    expect(aPlan.withinRange(low,high)).equal(true);
  });

  it("withinRange - False", function () {
    const aRoom = {daysTempRange: {low: 18, high: 25}};
    const low = aRoom.daysTempRange.low;
    const high = aRoom.daysTempRange.high;
    expect(aPlan.withinRange(low,high)).equal(false);
  });
});
