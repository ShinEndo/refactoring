class Account {
	constructor(number, type, interestRate) {
		this._number = number;
		this._type = type;
		this._interesetRate = interestRate;
	}
	get interestRate() { return this.interestRate; }
}

class AccountType {
	constructor(nameString) {
		this._name = nameString;
	}
}