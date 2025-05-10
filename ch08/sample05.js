function renderPerson(outStream, person) {
	const result = [];
	result.push(`<p>${person.name}</p>`);
	result.push(renderPhoto(person.photo));
	result.push(zznew(person.photo));
	return result.join("\n");
}

function photoDiv(p) {
	return [
		"<div>",
		zznew(p),
		"</div>",
	].join("\n");
}

function zznew(p) {
	return [
		`<p>title: ${p.title}</p>`,
		emitPhotoData(p),
	]
}


function emitPhotoData(aPhoto) {
	const result = [];
	result.push(`<p>location: ${aPhoto.location}</p>`);
	result.push(`<p>date: ${aPhoto.toDateString()}</p>`);
	return result.join("\n");
}