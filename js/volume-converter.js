function convert() {
	// Get input values
	var input_value = document.getElementById("input_value").value;
	var from_unit = document.getElementById("from_unit").value;
	var to_unit = document.getElementById("to_unit").value;

    const US = 3.785412; // 1 US gallon in liters
    const Imperial = 4.54609; // 1 Imperial gallon in liters
    const CubicMetric = 1000; // 1 cubic meter in liters
    const CubicImperial = 0.01638706; // 1 cubic inch in liters

	// Values of each unit. Meters are the default
	var units = {
        // metric units
		L: 1,
		mL: 0.001,
		cL: 0.01,
		dL: 0.1,
        daL: 10,
        hL: 100,
        // US units
		usgal: US,
		uspt: US / 8,
		usqt: US / 4,
		uscupC: US / 16,
        uscupL: US / 15.77255,
        ustsp: US / 768,
        ustbsp: US / 256,
        usfloz: US / 128,
        beerbarrel: US * 31,
        oilbarrel: US * 42,
        fldr: US / 1024,
        drop: US / 75708.24,
        gill: US / 32,
        minim: US / 61440,
        hhd: US * 63,
        // Imperial units
        impgal: Imperial,
		imppt: Imperial / 8,
		impqt: Imperial / 4,
		impcup: Imperial / 16,
        imptsp: Imperial / 768,
        imptbsp: Imperial / 256,
        impfloz: Imperial / 160,
        // cubic units
        cm3: CubicMetric / 1000000,
        m3: CubicMetric,
        in3: CubicImperial,
        ft3: CubicImperial * 1728,
        yd3: CubicImperial * 46656
	};
    // Convert units
	var result = (input_value * units[from_unit]) / units[to_unit];

	// Display result to the nearest hundredth
	document.getElementById("result").innerHTML = input_value + " " + from_unit + " = " + result.toFixed(3) + " " + to_unit;
}