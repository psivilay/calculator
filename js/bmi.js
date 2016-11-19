//var convertWeight = function(weightAsk) {
	//return weightAsk * 0.45;
//};

//var convertHeight = function(heightAsk) {
	//return heightAsk * 0.025;
//};

var weightAsk = parseInt(prompt("If it's not too personal, how much do you weigh in pounds?"));
var heightAsk = parseInt(prompt("And how tall are you in inches?"));

var calculatedBmi = weightAsk*0.45 / (heightAsk*0.025 * heightAsk*0.025)

alert("Congratulations! Your BMI is " + (calculatedBmi).toPrecision(3) + " or about " + calculatedBmi.toPrecision(2) + ".")
