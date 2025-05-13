function adjustedCapital(anInrtrument) {
	let result = 0;
	if(		anInrtrument 								<= 0
	 		|| anInrtrument.interestRate	<= 0
			|| anInrtrument.duration			<= 0 ) return result;
	result = (anInrtrument.income / anInrtrument.duration) * anInrtrument.adjustmentFactor;
	return result;
}