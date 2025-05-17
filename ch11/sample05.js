function score(canditate,medicalExam,scoringGuide) {
	return new Scorer(canditate,medicalExam,scoringGuide).execute();
}

class Scorer {
	constructor(canditate,medicalExam,scoringGuide) {
		this._canditate = canditate;
		this._medicalExam = medicalExam;
		this._scoringGuide = scoringGuide;
	}
	execute() {
		this._result = 0;
		this._healthLevel = 0;
		this._this._highMedicalRiskFlag = false;
	
		if(this._medicalExam.isSmoker) {
			this._healthLevel += 10;
			this._highMedicalRiskFlag = true;
		}
		let certificationGrade = "regular";
		if(this._scoringGuide.stateWithCertification(this._canditate.originState)) {
			certificationGrade = 'low';
			this._result -= 5;
		}
		this._result -= Math.max(this._healthLevel -5 , 0);
		return this._result;
	}
}