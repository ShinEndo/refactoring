const chai = require("chai");
const { default: priceOrder } = require("../../ch06/sample05");

const expect = chai.expect;
describe("ch06 フェーズの分離", function () {
  it("priceOrder", function () {
    const product = {
      basePrice: 1000,
      discountThreshold: 100,
      discountRate: 0.1,
    };
    const quantity = 90;
    const shippingMehod = {
      discountedFee: 1000,
      freePerCase: 300,
    };
    const price = priceOrder(product, quantity, shippingMehod);
    expect(price).equal(117000);
  });
  it("priceOrder - quantity than discountThreshold", function () {
    const product = {
      basePrice: 1000,
      discountThreshold: 100,
      discountRate: 0.1,
    };
    const quantity = 110;
    const shippingMehod = {
      discountedFee: 1000,
      freePerCase: 300,
    };
    const price = priceOrder(product, quantity, shippingMehod);
    expect(price).equal(142000);
  });
});
