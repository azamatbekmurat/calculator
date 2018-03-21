
// Business (or back-end) logic:

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
	$("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
		var result = add(number1, number2);
    $("#output-add").text(result);
  });

	$("form#subtract").submit(function(event) {
		event.preventDefault();
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
		var result = subtract(number1, number2);
    $("#output-subtract").text(result);
  });

	$("form#multiply").submit(function(event) {
		event.preventDefault();
    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val());
		var result = multiply(number1, number2);
    $("#output-multiply").text(result);
  });

	$("form#divide").submit(function(event) {
		event.preventDefault();
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());
		var result =  divide(number1, number2);
    $("#output-divide").text(result);
  });



});


/*
function getName(name) { return "hi " + name ; }
getName("John");
document.write(getName("John Doe") );
var greeting = alert(getName("John"));

var window = "Hello " + getName(prompt("Please Enter Your Name:"));
var greeting2 = alert(window);
*/

// this function will subtract 2 numbers
/*
var number1 = parseInt(prompt("Enter numbers: ") );
var number2 = parseInt( prompt("Enter numbers: ") );
function subtract(number1, number2) {
	return number2 - number1;
}

var window2 = alert( subtract(number1,number2) );
*/

/*
// function for multiplying

var input1 = prompt("enter number1: ");
var number1 = parseInt(input1);
var input2 = prompt("enter number2: ");
var number2 = parseInt(input2);
var input3 = prompt("enter number3: ");
var number3 = parseInt(input3);

function multiply(a, b) {
	return a * b;
};
function threeTimes(a,b,c) {
	return a * b * c;
};

var window = alert(multiply(number1,number2));
var window2 = alert(threeTimes(number1, number2, number3));
*/

/*
// function for dividing
function remainder (a,b) {
	return a % b;
};

var input1 = parseFloat(prompt("Enter number1: "));
var input2 = parseFloat(prompt("Enter number2: "));

var result = alert(remainder(input1,input2));
*/

//function age

/*
var age = prompt("[+] Please Enter yourr age: " );
var name = prompt("[+] Please Enter your name: ");
var food = prompt("[+] Please Enter your favorite food: ") ;

function getInfo(name, age ,food ) {
	return "[+] The information that you've entered: " + name + " " + age + " " + food;
}

alert(getInfo(name,age,food) );
*/
/*
//Body Mass index calculator

var calculateBMI = function(number1,number2) {
	return (number1/(number2*number2));
};

var weight = parseFloat(prompt("Enter your weight in kg: "));
var height = parseFloat(prompt("Enter your height in meters: "));

var showBMI = parseInt(calculateBMI(weight,height));

//function to convert Fahrenheit and Celcius

var Fahrenheit = function(input1) {
  return ((1.8*input1)+32);
};

var CelciusToFahr = parseInt(prompt("Enter Celcius to see in Fahrenheit: "));
var showFahr = "Fahrenheit is " + parseInt(Fahrenheit(CelciusToFahr));

var Celcius = function(input1) {
	return ((input1-32)/1.8);
};
var FahtToCelcius = parseInt(prompt("Enter Fahrenheit value to see in Celcius: "));
var showCelcius = "Celcius is " + parseInt(Celcius(FahtToCelcius));

// function to convert gallon to liter

var convertor = function(gallon) {
	return (gallon * 3.78541);
};

var gallon = parseInt(prompt("Enter gallon value: "));

var liter = "Liter value is: " + parseInt(convertor(gallon));

*/
