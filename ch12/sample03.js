export class Employee {
	constructor(name, type) {
		this.validateType(type);
		this._name = name;
		this._type = type;
	}
	validateType(arg) {
		if(!["engineer","manager","salesman"].includes(arg)) throw new Error(`従業員のタイプコードが不正：${arg}`);
	}
	get typeString() {
		return this._type.toString();
	}
	get type() {
		return this._type;
	}
	set type(arg) {
		this._type = Employee.createEmployeeType(arg);
	}
	get capitalizedType() {
		return this.typeString.charAt(0).toUpperCase() + this.typeString.substr(1).toLowerCase();
	}
	toString() {
		return `${this._name} (${this.capitalizedType})`;
	}
	static createEmployeeType(aString) {
		switch(aString) {
			case "enginner": return new Engineer();
			case "manager": return new Manager();
			case "salesman": return new Salesman();
			default: throw new Error(`従業員のタイプコードが不正：${aString}`);
		}
	}

}

class EmployeeType {
	constructor(aString) {
		this._value = aString;
	}
	toString() {
		return this._value;
	}
}

class Engineer extends EmployeeType {
	toString() { return "engineer"; }
}

class Manager extends EmployeeType {
	toString() { return "manager"; }
}

class Salesman extends EmployeeType {
	toString() { return "salesman"; }
}

