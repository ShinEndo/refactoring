const chai = require("chai");
const { Employee } = require("../../ch12/sample03");

const expect = chai.expect;
describe("ch12 サブクラスによるタイプコードの置き換え（２）", function () {

  it("Employee - engineer", function () {
    const employee = new Employee('taro','engineer');
    expect(employee.toString()).equal('taro (Engineer)');
  });
  it("Employee - manager", function () {
    const employee = new Employee('taro','manager');
    expect(employee.toString()).equal('taro (Manager)');
  });
  it("Employee - salesman", function () {
    const employee = new Employee('taro','salesman');
    expect(employee.toString()).equal('taro (Salesman)');
  });
  it("Employee - part-time", function () {
    expect(function(){ new Employee('taro','part-time'); }).to.throw(Error, '従業員のタイプコードが不正：part-time');
  });
});
