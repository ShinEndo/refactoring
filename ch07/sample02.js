export default class Order {
  constructor(data) {
    this.priority = data.priority;
  }
  get priority() {
    return this.priority;
  }
  set priority(aString) {
    this.priority = aString;
  }
}
