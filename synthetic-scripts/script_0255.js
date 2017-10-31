// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not((len(str((int(str((len(str((int(input_bool('B1')) * int(input_bool('B1'))))) === input_int('I3')))) <= int(str(input_bool('B2')))))) >= int(bool(input_int('I3')))))) then (if input_bool('B3') then str(int(input_bool('B1'))) else input_string('S3')) else input_string('S1'))

var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);

var fn40 = Function('b32', 'b1', 's36', 'x21', 's38', 'b14', "var b33 = b1; var x39; if (eval(\"var b29 = !(!(eval(\\\"var x9 = x21; var b3 = b1; var x4 = ~~(b3);x5 = Number(b1) * x4;var l8 = (String(x5)).length;var s12 = String((l8 === x9));var x13 = parseInt(s12, 10);var b17 = x13; var b18 = Number('' + (b14));var s19 = '' + (b17 <= b18);var e22 = \\\\\\\"x21\\\\\\\";var b23 = (eval(e22)) ? true : false;var x24 = +(b23);var b25 = (s19).length >= x24;b25\\\")));eval(\\\"b29\\\")\")) { var x37; if (b32) { var x34 = +(b33);var s35 = String(x34); x37 = s35; } else {  x37 = s36; } x39 = x37; } else {  x39 = s38; } return x39;");
fn40(input_B3, input_B1, input_S3, input_I3, input_S1, input_B2);
