// decimal to hexadecimal
function decimalToHexadecimal(decimal) {
    // explicit cast as number so it actually converts to hexadecimal
    return Number(decimal).toString(16).toUpperCase();
  }
  
function convertDecimalToHexadecimal() {
    var decimalInput = document.getElementById("decimal-input").value;
    var hexadecimalOutput = decimalToHexadecimal(decimalInput);
    document.getElementById("hexadecimal-output").innerHTML = hexadecimalOutput;
  }

// hexadecimal to decimal
function hexadecimalToDecimal(hexadecimal) {
    // parseInt(variable, numerical-base), this parses the entered value in base 16
    return parseInt(hexadecimal, 16);
  }
  
function convertHexadecimalToDecimal() {
    var hexadecimalInput = document.getElementById("hexadecimal-input").value;
    var decimalOutput = hexadecimalToDecimal(hexadecimalInput);
    document.getElementById("decimal-output").innerHTML = decimalOutput;
  }