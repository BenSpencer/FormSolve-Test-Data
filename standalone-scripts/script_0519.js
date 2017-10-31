// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((bool(str((int(input_bool('B2')) in [0, 1, 21, 172, 1, 0, 7, 12, 31, 1]))) === input_bool('B2')) != input_bool('B3')) then input_int('I1') else input_int('I2'))

var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);

var fn21 = Function('x18', 'x17', 'b12', 'b1', "var b9 = b1; var b13; if ((eval(\"var x2 = +(b1);var opts4 = [0, 1, 21, 172, 1, 0, 7, 12, 31, 1];var b3 = false; for (var idx5 = 0; idx5 < opts4.length; idx5++) { if (opts4[idx5] == x2) { b3 = true; break; } }var b7 = (String(b3)) ? true : false;b7\") === b9) != b12) { b13 = true; } else { b13 = false; }var e16 = \"eval(\\\"b13\\\")\";var x20; if (eval(e16)) {  x20 = x17; } else {  x20 = eval(\"x18\"); } return x20;");
fn21(input_I2, input_I1, input_B3, input_B2);
