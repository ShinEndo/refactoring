export function acquireData(input) {
	const lines = input.split("\n");
	return lines
		.slice(1)
		.filter(line => line.trim() !== '')
		.map(line => line.split(","))
		.filter(fileds => fileds[1].trim() === "India")
		.map(fileds => ({city: fileds[0].trim(), phone: fileds[2].trim()}));
}