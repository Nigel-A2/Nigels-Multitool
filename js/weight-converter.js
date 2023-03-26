function convert() {
	// Get input values
	var input_value = document.getElementById("input_value").value;
	var from_unit = document.getElementById("from_unit").value;
	var to_unit = document.getElementById("to_unit").value;

    // 1 ounce converted to grams
    const imperial = 28.34952;

	// Values of each unit. Grams are the default // hw: imperial * 1600
	var units = {
		g: 1,
		mg: 0.001,
		kg: 1000,
        cg: 0.01,
        dg: 0.1,
        dag: 10,
        hg: 100,
		oz: imperial,
		lb: imperial * 16,
		st: imperial * 224,
        long_ton: imperial * 35840,
		short_ton: imperial * 32000,
		mtu: 1000000,
        dram: imperial / 16,
        cwt: imperial * 1600
	};
    // Convert units
	var result = (input_value * units[from_unit]) / units[to_unit];

	// Display result to the nearest hundredth
	document.getElementById("result").innerHTML = input_value + " " + from_unit + " = " + result.toFixed(3) + " " + to_unit;
}