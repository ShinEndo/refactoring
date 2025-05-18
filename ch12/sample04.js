export class Booking {
	constructor(show,date) {
		this._show = show;
		this._date = date;
	}
	get hasTalkBack() {
		return (this._premiumDelegate) ? this._premiumDelegate.hasTalkBack : this._show.hasOwnProperty('talkback') && !this.isPeakDay;
	}
	get basePrice() {
		let result = this._show.price;
		if(this.isPeakDay) result += Math.round(result * 0.15);
		return result;
	}
}

export class PremiumBooking extends Booking {
	constructor(show,date,extras) {
		super(show, date);
		this._extras = extras;
	}
	_bePremium(extras) {
		this._premiumDelegate = new PremiumBookingDelegate(this, extras);
	}
	get basePrice() {
		return Math.round(super.basePrice + this._extras.premiumFee)
	}
	get hasDinner() {
		return this._extras.hasOwnProperty('dinner') && !this.isPeakDay;
	}
}

export class PremiumBookingDelegate {
	constructor(hostBooking,extras) {
		this._host = hostBooking;
		this._extras = extras;
	}
	get hasTalkBack() {
		return this._host._show.hasOwnProperty('talkback');
	}
}

export function createBooking(show,date) {
	return new Booking(show,date);
}

export function createPremiumBooking(show,date,extras) {
	const result = new PremiumBooking(show,date,extras);
	result._bePremium(extras);
	return result;
}