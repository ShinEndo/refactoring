export class HeatingPlan {
	constructor() {
		this._temperatureRange = {
			low: 20,
			high: 25,
		}
	}
	withinRange(bottom,top) {
		return (bottom >= this._temperatureRange.low) && (top <= this._temperatureRange.high);
	}

	xxNEWwithinRange(aNumberRange) {
		return (aNumberRange.low >= this._temperatureRange.low) && (aNumberRange.high <= this._temperatureRange.high);
	}
}