export class Order {
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

export class Priority {
  constructor(value) {
    if (value instanceof Priority) return value;
    if (Priority.legalValues().includes(value)) this._value = value;
    else throw new Error(`<${value}> is invalid for Priprity`);
  }
  toString() {
    return this._value;
  }
  get _index() {
    return Priority.legalValues().findIndex((s) => s === this._value);
  }
  static legalValues() {
    return ["low", "normal", "high", "rush"];
  }

  equals(other) {
    return this._index === other._index;
  }
  higherThan(other) {
    return this._index > other._index;
  }
  lowerThan(other) {
    return this._index < other._index;
  }
}
