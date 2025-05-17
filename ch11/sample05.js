function score(canditate,medicalExam,scoringGuide) {
	return new Scorer(canditate,medicalExam,scoringGuide).execute();
}

class Scorer {
	constructor(canditate,medicalExam,scoringGuide) {
		this._canditate = canditate;
		this._medicalExam = medicalExam;
		this._scoringGuide = scoringGuide;
	}
	execute(scoringGuide) {
		this._result = 0;
		let healthLevel = 0;
		let highMedicalRiskFlag = false;
	
		if(this._medicalExam.isSmoker) {
			healthLevel += 10;
			highMedicalRiskFlag = true;
		}
		let certificationGrade = "regular";
		if(this._scoringGuide.stateWithCertification(this._canditate.originState)) {
			certificationGrade = 'low';
			this._result -= 5;
		}
		this._result -= Math.max(healthLevel -5 , 0);
		return this._result;
	}
}