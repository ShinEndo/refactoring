export default class Order {
  constructor(data) {
    this.priority = data.priority;
  }
  priorityString() {
    return this._priority.toString();
  }
  get priority() {
    return this._priority;
  }
  set priority(aString) {
    this._priority = new Priority(aString);
  }
}

class Priority {
  constructor(value) {
    this._value = value;
  }
  toString() {
    return this._value;
  }
}
