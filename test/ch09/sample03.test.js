const chai = require("chai");
const { organization } = require("../../ch09/sample03");

const expect = chai.expect;
describe("ch09 フィールド名の変更", function () {
  it("organization", function () {
    expect(organization.title).equal('Acme GooseBerries');
    expect(organization.country).equal('GB');
  });
});
