function solve() {
    var a = document.getElementById("a-value").value;
    var b = document.getElementById("b-value").value;
    var c = document.getElementById("c-value").value;
    // quadratic formula:
    var x1 = (-b + Math.sqrt((b ** 2) - (4 * a * c))) / (2 * a);
    var x2 = (-b - Math.sqrt((b ** 2) - (4 * a * c))) / (2 * a);
    document.getElementById("solution-1").innerHTML = "x = " + x1;
    document.getElementById("solution-2").innerHTML = "x = " + x2;
}