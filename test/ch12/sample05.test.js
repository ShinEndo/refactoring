const chai = require("chai");
const { createBird } = require("../../ch12/sample05");

const expect = chai.expect;
describe("ch12 委譲によるサブクラスの置き換え（２）", function () {
	it("createBird - Sparrow", function () {
		const data = {
			type: "Sparrow",
			name: "suzume",
			plumage: undefined,
		}
		const bird = createBird(data);
		expect(bird.plumage).equal("average");
		expect(bird.airSpeedVelocity).equal(null);
	});
	it("createBird - EuropeanSwallow", function () {
		const data = {
			type: "EuropeanSwallow",
			name: "swallow",
			plumage: "cool",
		}
		const bird = createBird(data);
		expect(bird.plumage).equal("cool");
		expect(bird.airSpeedVelocity).equal(35);
	});
	it("createBird - AfricanSwallow", function () {
		const data = {
			type: "AfricanSwallow",
			name: "swallow",
			plumage: undefined,
			numberOfCoconuts: 5,
		}
		const bird = createBird(data);
		expect(bird.plumage).equal("average");
		expect(bird.airSpeedVelocity).equal(30);
	});
	it("createBird - NorweigianBlueParrot x not nailed", function () {
		const data = {
			type: "NorweigianBlueParrot",
			name: "parrot",
			plumage: undefined,
			voltage: 250,
			isNailed: false,
		}
		const bird = createBird(data);
		expect(bird.plumage).equal("scorched");
		expect(bird.airSpeedVelocity).equal(35);
	});
	it("createBird - NorweigianBlueParrot x nailed", function () {
		const data = {
			type: "NorweigianBlueParrot",
			name: "parrot",
			plumage: undefined,
			voltage: 100,
			isNailed: true,
		}
		const bird = createBird(data);
		expect(bird.plumage).equal("beautiful");
		expect(bird.airSpeedVelocity).equal(0);
	});
});
