function ConvertToFahrenheit(valNum) {
    document.getElementById("outputFahrenheit").innerHTML = (valNum * 1.8) + 32;
  }

function ConvertToCelsius(valNum) {
    document.getElementById("outputCelsius").innerHTML = ((valNum - 32) * 5) / 9;
  }