function ConvertToFahrenheit(valNum) {
    document.getElementById("outputFahrenheit").innerHTML = ((valNum * 1.8) + 32).toFixed(3);
  }

function ConvertToCelsius(valNum) {
    document.getElementById("outputCelsius").innerHTML = (((valNum - 32) * 5) / 9).toFixed(3);
  }