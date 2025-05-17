function score(canditate,medicalExam,scoringGuide) {
	return new Scorer(canditate,medicalExam).execute(scoringGuide);
}

class Scorer {
	constructor(canditate,medicalExam) {
		this._canditate = canditate;
		this._medicalExam = medicalExam;
	}
	execute(scoringGuide) {
		let result = 0;
		let healthLevel = 0;
		let highMedicalRiskFlag = false;
	
		if(this._medicalExam.isSmoker) {
			healthLevel += 10;
			highMedicalRiskFlag = true;
		}
		let certificationGrade = "regular";
		if(scoringGuide.stateWithCertification(this._canditate.originState)) {
			certificationGrade = 'low';
			result -= 5;
		}
		result -= Math.max(healthLevel -5 , 0);
		return result;
	}
}