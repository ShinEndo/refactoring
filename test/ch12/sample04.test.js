const chai = require("chai");
const { Booking, PremiumBooking, createBooking, createPremiumBooking } = require("../../ch12/sample04");

const expect = chai.expect;
describe("ch12 委譲によるサブクラスの置き換え", function () {
	it("Booking", function () {
		const show = { price: 100, talkback: true };
		const date = '2025-05-18';
		// const booking = new Booking(show,date);
		const booking = createBooking(show,date);
		booking.isPeakDay = true;
		expect(booking.basePrice).equal(115);
		expect(booking.hasTalkBack).equal(false);
	});
	it("Booking - Not PeakDay", function () {
		const show = { price: 100, talkback: true };
		const date = '2025-05-18';
		// const booking = new Booking(show,date);
		const booking = createBooking(show,date);
		expect(booking.basePrice).equal(100);
		expect(booking.hasTalkBack).equal(true);
	});
	it("PremiumBooking", function () {
		const show = { price: 100, talkback: true };
		const date = '2025-05-18';
		const extras = { premiumFee: 50,}
		// const booking = new PremiumBooking(show,date,extras);
		const booking = createPremiumBooking(show,date,extras);
		booking.isPeakDay = true;
		expect(booking.basePrice).equal(165);
		expect(booking.hasTalkBack).equal(true);
		expect(booking.hasDinner).equal(false);
	});
	it("PremiumBooking - Not PeakDay", function () {
		const show = { price: 100, talkback: true };
		const date = '2025-05-18';
		const extras = { premiumFee: 50, dinner: true}
		// const booking = new PremiumBooking(show,date,extras);
		const booking = createPremiumBooking(show,date,extras);
		booking.isPeakDay = false;
		expect(booking.basePrice).equal(150);
		expect(booking.hasTalkBack).equal(true);
		expect(booking.hasDinner).equal(true);
	});
});
