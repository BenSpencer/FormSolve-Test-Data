// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(str((not(bool(str(((if input_bool('B2') then bool(input_string('S2')) else input_bool('B2')) == not(input_bool('B2')))))) !== input_bool('B1')))) <= input_int('I3')) then not((input_bool('B1') === (input_bool('B3') === bool(input_string('S2'))))) else input_bool('B2'))

var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");

var fn35 = Function('s2', 'b1', 'x20', 'b15', 'b25', "var s26 = s2; var b33 = b1; var b23 = b15; var s18 = String((!(!!('' + (eval(\"var b6 = b1; var b4 = b1; var b3 = !!(s2);var x5; if (b1) { x5 = b3; } else { x5 = b4; }var b8; if (eval(\\\"b6\\\")) { b8 = false; } else { b8 = true; }var b9 = x5 == b8;b9\")))) !== b15));var b27 = (s26) ? true : false;var b30 = eval(\"b23\"); var b31 = (b25 === b27);var b32 = !(b30 === b31);var x34; if ((parseInt(s18, 10) <= x20)) { x34 = b32; } else {  x34 = b33; } return x34;");
fn35(input_S2, input_B2, input_I3, input_B1, input_B3);
