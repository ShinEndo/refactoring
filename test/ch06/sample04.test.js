const chai = require("chai");
const { defaultOwner, setDefaultOwner } = require("../../ch06/sample04");

const expect = chai.expect;
describe("ch06 変数のカプセル化", function () {
  it("defaultOwner - get", function () {
    const spaceship = {};
    spaceship.owner = defaultOwner();
    expect(spaceship.owner.firstName).equal("Martin");
    expect(spaceship.owner.lastName).equal("Fowler");
  });
  it("defaultOwner - set", function () {
    setDefaultOwner({ firstName: "Rebecca", lastName: "Persons" });
    const spaceship = {};
    spaceship.owner = defaultOwner();
    expect(spaceship.owner.firstName).equal("Rebecca");
    expect(spaceship.owner.lastName).equal("Persons");
  });
});
