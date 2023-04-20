function convertNumbers() {
  var inputNumber = document.getElementById("inputNumber").value;
  var inputBase = document.getElementById("inputBase").value;
  var outputBase = document.getElementById("outputBase").value;

  var base = {
    binary: 2,
    seximal: 6,
    octal: 8,
    decimal: 10,
    duodecimal: 12,
    hexadecimal: 16,
    vigesimal: 20
  };
  // parseFloat did not give desired functionality
  var toDecimal = parseInt(inputNumber, base[inputBase]);
  var toTargetBase = Number(toDecimal).toString(base[outputBase]).toUpperCase();

  document.getElementById("result1").innerHTML = inputBase + ": " + inputNumber;
  document.getElementById("result2").innerHTML = outputBase + ": " + toTargetBase;
  
}