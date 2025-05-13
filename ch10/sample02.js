function adjustedCapital(anInrtrument) {
	let result = 0;
	if(anInrtrument.capital > 0) {
		if(anInrtrument.interestRate > 0 && anInrtrument.duration > 0) {
			result = (anInrtrument.income / anInrtrument.duration) * anInrtrument.adjustmentFactor;
		}
		return result;
	}
}