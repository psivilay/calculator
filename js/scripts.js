var add = function(number1, number2) {
	return number1 + number2;
};

var subtract = function(number1, number2) {
	return number1 - number2;
};

// thinking about if else, if number1 is >= number2, then do number1-number2

var multiply = function(number1, number2) {
	return number1 * number2;
};

var divide = function(number1, number2) {
	return number1 / number2;
};

// thinking about var whichOperation = prompt("Do you want to multiply") for yes or no true/false return
// or if have array and can select and type in which operation that will point to corresponding function

var number1  = parseInt(prompt("Please enter a number:"));
var number2 = parseInt(prompt("And now please enter another number:"));
var result = divide(number1, number2)

alert("The answer is " + result + ".");

// can change generic to the multiplication of number1 and number2 is, etc.
