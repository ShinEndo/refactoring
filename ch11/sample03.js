export class HeatingPlan {
	constructor() {
		this._temperatureRange = {
			low: 20,
			high: 25,
		}
	}

	xxNEWwithinRange(aNumberRange) {
		return (aNumberRange.low >= this._temperatureRange.low) && (aNumberRange.high <= this._temperatureRange.high);
	}
}