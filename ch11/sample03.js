export class HeatingPlan {
	constructor() {
		this._temperatureRange = {
			low: 20,
			high: 25,
		}
	}
	withinRange(bottom,top) {
		console.log(top <= this._temperatureRange.high);
		return (bottom >= this._temperatureRange.low) && (top <= this._temperatureRange.high);
	}

	xxNEWwithinRange(aNumberRange) {
		return this.withinRange(aNumberRange.low,aNumberRange.high);
	}
}