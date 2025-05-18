const chai = require("chai");
const { Employee, Department } = require("../../ch12/sample01");

const expect = chai.expect;
describe("ch12 コンストラクタ本体の引き上げ", function () {

  it("Employee", function () {
    const employee = new Employee('taro',1,80);
    expect(employee.name).equal('taro');
    expect(employee.id).equal(1);
    expect(employee.monthlyCost).equal(80);
  });
  it("Department", function () {
    const department = new Department('sales',12);
    expect(department.name).equal('sales');
    expect(department.staff).equal(12);
  });
});
