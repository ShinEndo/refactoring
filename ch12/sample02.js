export class Employee {
	constructor(name) {
		this._name = name;
	}
	toString() {
		return `${this._name} (${this.type})`;
	}
}

class Engineer extends Employee {
	get type() {
		return "engineer";
	}
}

class Manager extends Employee {
	get type() {
		return "manager";
	}
}

class Salesman extends Employee {
	get type() {
		return "salesman";
	}
}

export function createEmployee(name,type) {
	switch (type) {
		case "engineer": return new Engineer(name);
		case "manager": return new Manager(name);
		case "salesman": return new Salesman(name);
		default: throw new Error(`従業員のタイプコードが不正：${type}`);
	} 
}