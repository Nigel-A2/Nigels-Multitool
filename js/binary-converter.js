// decimal to binary
function decimalToBinary(decimal) {
    // explicit cast as a number so it actually converts to binary
    return Number(decimal).toString(2);
  }
  
function convertDecimalToBinary() {
    var decimalInput = document.getElementById("decimal-input").value;
    var binaryOutput = decimalToBinary(decimalInput);
    document.getElementById("binary-output").innerHTML = binaryOutput;
  }

// binary to decimal
function binaryToDecimal(binary) {
    // parseInt(variable, numerical-base), this parses the entered value in base 2
    return parseInt(binary, 2);
  }
  
function convertBinaryToDecimal() {
    var binaryInput = document.getElementById("binary-input").value;
    var decimalOutput = binaryToDecimal(binaryInput);
    document.getElementById("decimal-output").innerHTML = decimalOutput;
  }