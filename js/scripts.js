//Business Logic
var gallonsToLiters = function(gallons) {
  return gallons * 3.78541;
}

var squareFeetToSquareMeters = function(feet) {
  return feet * .093;
}

var inchToCM = function (inch) {
  return inch * 2.54;
}

var fahrenheitToCelsius = function(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
}

//Front-End Logic

$(function() {
  $("form#gallonsToLiters").submit(function(event) {
    event.preventDefault();

    var gallons = parseInt($("#gallons").val());
    var liters = gallonsToLiters(gallons);

    $(".gallons").text(gallons);
    $(".liters").text(liters);
    $("#gallons-solution").show();
  });

  $("form#squareFeetToSquareMeters").submit(function(event) {
    event.preventDefault();

    var feet = parseInt($("#feet").val());
    var meters = squareFeetToSquareMeters(feet);

    $(".feet").text(feet);
    $(".meters").text(meters);
    $("#meters-solution").show();
  });

  $("form#inchToCM").submit(function(event) {
    event.preventDefault();

    var inch = parseInt($("#inch").val());
    var centimeters = inchToCM(inch);

    $(".inch").text(inch);
    $(".centimeters").text(centimeters);
    $("#centimeters-solution").show();
  });

  $("form#fahrenheitToCelsius").submit(function(event) {
    event.preventDefault();

    var fahrenheit = parseInt($("#fahrenheit").val());
    var centimeters = fahrenheitToCelsius(fahrenheit);

    $(".fahrenheit").text(fahrenheit);
    $(".celsius").text(centimeters);
    $("#celsius-solution").show();
  });
});
