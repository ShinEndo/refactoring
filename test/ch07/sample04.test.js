const chai = require("chai");
const { TrackingInformation, Shipment } = require("../../ch07/sample04");

const expect = chai.expect;
describe("ch07 クラスのインライン化", function () {
  it("TrackingInformation", function () {
    const shipment = new Shipment();
    shipment.shippingCompany = 'Amazon';
    shipment.trackingNumber = '00-0000-0000';
    expect(shipment.shippingCompany).equal('Amazon');
    expect(shipment.trackingNumber).equal('00-0000-0000');
    expect(shipment.trackingInfo).equal('Amazon: 00-0000-0000');
  });
});
