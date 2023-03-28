function convert() {
	// Get input values
	var input_value = document.getElementById("input_value").value;
	var from_unit = document.getElementById("from_unit").value;
	var to_unit = document.getElementById("to_unit").value;

    // 1 square foot converted to square meters
    const imperial = 0.09290304;

	// Values of each unit. Square meters are the default
	var units = {
        // metric
		m2: 1,
		dm2: 0.01,
        cm2: 0.0001,
        mm2: 0.000001,
        hm2: 10000,
        km2: 1000000,
        // imperial
        ft2: imperial,
        in2: imperial / 144,
        yd2: imperial * 9,
        rod2: imperial * 272.75,
        mi2: imperial * 43560 * 640,
        rood: imperial * 10890,
        acre: imperial * 43560
	};
    // Convert units
	var result = (input_value * units[from_unit]) / units[to_unit];

	// Display result to the nearest thousandth
	document.getElementById("result").innerHTML = input_value + " " + from_unit + " = " + result.toFixed(4) + " " + to_unit;
}