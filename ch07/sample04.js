export class TrackingInformation {
	get shippingCompany() {
		return this._shippingCompany
	}
	set shippingCompany(arg) {
		this._shippingCompany = arg;
	}
	get trackingNumber() {return this._trackingNumber;}
	set trackingNumber(arg) {this._trackingNumber = arg;}
	get display() {
		return `${this._shippingCompany}: ${this._trackingNumber}`;
	}
}

export class Shipment {
	get trackingInfo() {
		return `${this._shippingCompany}: ${this._trackingNumber}`;
	}
	get shippingCompany() {
		return this._shippingCompany;
	}
	set shippingCompany(arg) {
		this._shippingCompany = arg;
	}
	get trackingNumber() {
		return this._trackingNumber;
	}
	set trackingNumber(arg) {
		this._trackingNumber = arg;
	}
}
