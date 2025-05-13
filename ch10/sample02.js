function adjustedCapital(anInrtrument) {
	if(		anInrtrument 								<= 0
	 		|| anInrtrument.interestRate	<= 0
			|| anInrtrument.duration			<= 0 ) return result;
	return (anInrtrument.income / anInrtrument.duration) * anInrtrument.adjustmentFactor;
}