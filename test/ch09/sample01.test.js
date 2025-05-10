const chai = require("chai");
const { distanceTravelled } = require("../../ch09/sample01");

const expect = chai.expect;
describe("ch09 変数の分離", function () {
  const scenario = {
    primaryForce: 100,
    secondaryForce:200,
    mass: 10,
    delay:5,
  };
  const time = 10;
  it("distanceTravelled", function () {
    expect(distanceTravelled(scenario,time)).equal(750);
  });
});
