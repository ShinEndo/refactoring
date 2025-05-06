const chai = require("chai");
const { TrackingInformation, Shipment } = require("../../ch07/sample04");

const expect = chai.expect;
describe("ch07 クラスのインライン化", function () {
  it("TrackingInformation", function () {
    const shipment = new Shipment();
    shipment.shippingCompany = 'Amazon';
    shipment.trackingInformation.trackingNumber = '00-0000-0000';
    expect(shipment.trackingInformation.shippingCompany).equal('Amazon');
    expect(shipment.trackingInformation.trackingNumber).equal('00-0000-0000');
    expect(shipment.trackingInformation.display).equal('Amazon: 00-0000-0000');
  });
});
