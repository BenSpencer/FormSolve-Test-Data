// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if bool(input_string('S3')) then not(not(bool(str(int((bool(input_int('I1')) || bool(input_string('S3')))))))) else bool(str(input_bool('B2')))) then len(input_string('S1')) else input_int('I3'))

var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");

var fn27 = Function('b18', 's1', 'x25', 's23', 'x5', "var s8 = s1; var e3 = \"var b2 = !!(s1);b2\";var e14 = \"var b10; if (eval(\\\"var b6 = Boolean(x5);b6\\\") || !!(s8)) { b10 = true; } else { b10 = false; }var x12 = (b10) | 0;var s13 = String(x12);s13\";var b15 = !!(eval(e14));var b16 = !(b15);var b17 = !(b16);var s19 = (b18).toString();var l24 = (s23).length;var x26; if ((eval(\"eval(e3)\") ? b17 : eval(\"!!(s19)\"))) { x26 = l24; } else {  x26 = x25; } return x26;");
fn27(input_B2, input_S3, input_I3, input_S1, input_I1);
