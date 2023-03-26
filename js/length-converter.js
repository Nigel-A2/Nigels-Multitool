function convert() {
	// Get input values
	var input_value = document.getElementById("input_value").value;
	var from_unit = document.getElementById("from_unit").value;
	var to_unit = document.getElementById("to_unit").value;

	// Values of each unit. Meters are the default
	var units = {
        // metric units
		m: 1,
		km: 1000,
		cm: 0.01,
		mm: 0.001,
        hm: 100,
        dam: 10,
        dm: 0.1,
        μm: 0.000001,
        // imperial units
		mi: 1609.344,
		yd: 0.9144,
		ft: 0.3048,
		in: 0.0254,
        nmi: 1852,
        rod: 5.0292,
        chain: 20.1168,
        link: 0.201168,
        thou: 0.0000254,
        league: 4828.032
	};
    // Convert units
	var result = (input_value * units[from_unit]) / units[to_unit];

	// Display result to the nearest hundredth
	document.getElementById("result").innerHTML = input_value + " " + from_unit + " = " + result.toFixed(3) + " " + to_unit;
}