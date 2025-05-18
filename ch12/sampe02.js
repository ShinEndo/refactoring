export class Employee {
	constructor(name, type) {
		this.validateType(type);
		this._name = name;
	}
	validateType(arg) {
		if(!["engineer","manager","salesman"].includes(arg)) throw new Error(`従業員のタイプコードが不正：${arg}`);
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
		case "engineer": return new Engineer(name,type);
		case "manager": return new Manager(name,type);
		case "salesman": return new Salesman(name,type);
	} 
	return new Employee(name,type);
}