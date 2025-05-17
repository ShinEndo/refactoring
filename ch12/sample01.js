class Party{
	constructor(name) {
		this._name = name;
	}
}

export class Employee extends Party {
	constructor(name,id,monthlyCost) {
		super(name);
		this._id = id;
		this._monthlyCost = monthlyCost;
	}
	get name() {
		return this._name;
	}
	get id() {
		return this._id;
	}
	get monthlyCost() {
		return this._monthlyCost;
	}
}

export class Department extends Party {
	constructor(name,staff) {
		super(name);
		this._staff = staff;
	}
	get name() { 
		return this._name;
	}
	get staff() {
		return this._staff;
	}
}