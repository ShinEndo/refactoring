export function createBird(data) {
	switch(data.type) {
		case 'NorweigianBlueParrot':
			return new NorweigianBlueParrot(data);
		default:
			return new Bird(data);
	}
}

class Bird {
	constructor(data) {
		this._name = data.name;
		this._plumage = data.plumage;
		this._speciesDeligate = this.selectSpeciesDelegate(data);
	}
	get name() {
		return this._name;
	}
	get plumage() {
		return this._speciesDeligate.plumage;
	}
	get airSpeedVelocity() {
		return this._speciesDeligate.airSpeedVelocity
	}

	selectSpeciesDelegate(data) {
		switch(data.type) {
			case 'EuropeanSwallow':
				return new EuropeanSwallowDelegate(data,this);
			case 'AfricanSwallow':
				return new AfricanSwallowDelegate(data,this);
			case 'NorweigianBlueParrot':
				return new NorweigianBlueParrotDelegate(data,this);
			default:
				return new SpeciesDelegate(data,this); 
		}
	}
}

class SpeciesDelegate {
	constructor(data,bird) {
		this._bird = bird;
	}
	get plumage() {
		return this._bird._plumage || "average";
	}
	get airSpeedVelocity() {
		return null;
	}
}

class EuropeanSwallowDelegate extends SpeciesDelegate {
	get airSpeedVelocity() {
		return 35;
	}
}

class AfricanSwallowDelegate extends SpeciesDelegate {
	constructor(data,bird) {
		super(data,bird);
		this._numberOfCoconuts = data.numberOfCoconuts;
	}
	get airSpeedVelocity() {
		return 40 - 2 * this._numberOfCoconuts;
	}
}

class NorweigianBlueParrot extends Bird {
	constructor(data) {
		super(data);
		this._voltage = data.voltage;
		this._isNailed = data.isNailed;
	}
	get plumage() {
		return this._speciesDeligate.plumage;
	}
	get airSpeedVelocity() {
		return this._speciesDeligate.airSpeedVelocity;
	}
}

class NorweigianBlueParrotDelegate extends SpeciesDelegate {
	constructor(data,bird) {
		super(data,bird)
		this._voltage = data.voltage;
		this._isNailed = data.isNailed;
	}
	get plumage() {
		if(this._voltage > 100) return "scorched";
		else return this._bird._plumage || "beautiful";
	}
	get airSpeedVelocity() {
		return this._isNailed ? 0 : 10 + this._voltage / 10;
	}
}