const chai = require("chai");
const { acquireData } = require("../../ch08/sample08");

const expect = chai.expect;
describe("ch08 パイプラインによるループの置き換え", function () {

  const csvData = `
  office, country, telephone
  Chicago, USA, +1 312 373 1000
  Beijing, China, +86 4008 900 505
  Bangalore, India, +91 80 4064 9570
  Porto Alegre, Brazil, +55 51 3079 3550
  Chennai, India, +91 44 660 44766
  `;
  const corerctResult = [
    { city: 'Bangalore', phone: '+91 80 4064 9570' },
    { city: 'Chennai', phone: '+91 44 660 44766' },
  ];
  it("acquireData", function () {
    expect(acquireData(csvData)[0].city).equal('Bangalore');
    expect(acquireData(csvData)[0].phone).equal('+91 80 4064 9570');
    expect(acquireData(csvData)[1].city).equal('Chennai');
    expect(acquireData(csvData)[1].phone).equal('+91 44 660 44766');
  });
});
