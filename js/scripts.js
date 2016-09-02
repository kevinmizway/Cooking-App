var convertToLiters = function(gallons) {
  return "This is equal to " + (gallons * 3.78541) + " liters.";
}

var gallons = parseInt(prompt("Please provide how many gallons you wish to convert to liters."));
var convertedResult = convertToLiters(gallons);

alert(convertedResult);
