class Organization {
	constructor(data) {
		this._title = data.title;
		this._country = data.country;
	}
	get name() { return this._title; }
	set name(aString) { this._title = aString; }
	get title() { return this.name; }
	set title(aString) { this.name(aString); }
	get country() { return this._country; }
	set country(aCountryCode) { this._country = aCountryCode; }  
}

const organization = new Organization({title: "Acme GooseBerries", country: "GB"});
export {organization}