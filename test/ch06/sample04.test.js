const chai = require("chai");
const { getDefaultOwner } = require("../../ch06/sample04");

const expect = chai.expect;
describe("ch06 変数のカプセル化", function () {
  it("defaultOwner", function () {
    const spaceship = {};
    spaceship.owner = getDefaultOwner();
    expect(spaceship.owner.firstName).equal("Martin");
    expect(spaceship.owner.lastName).equal("Fowler");
  });
});
