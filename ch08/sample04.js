class Account {
	constructor(number, type, interestRate) {
		this._number = number;
		this._type = type;
		assert(interestRate === this._type.interestRate);
		this._interesetRate = interestRate;
	}
	get interestRate() { return this._type.interestRate; }
}

class AccountType {
	constructor(nameString, interestRate) {
		this._name = nameString;
		this._interesetRate = interestRate;
	}
	get interestRate() { return this._interesetRate; }
}