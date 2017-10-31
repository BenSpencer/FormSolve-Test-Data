// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (len(str((input_int('I1') % int(bool(str(int(not((bool(str(int(str(input_int('I1'))))) != input_bool('B2')))))))))) !== input_int('I2')) then (if bool(input_string('S2')) then bool(str((len(str(input_bool('B1'))) * int((int((bool(input_string('S2')) === (if bool(int(not(input_bool('B2')))) then input_bool('B3') else input_bool('B2')))) >= input_int('I2')))))) else not(bool(input_string('S3')))) else bool(input_string('S1')))

var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);

var fn62 = Function('b28', 'x1', 's58', 'b37', 's25', 's54', 'x21', 'b33', "var x45 = x21; var b8 = b33; var x2 = x1; var s3 = String(x2);var s5 = '' + (Number(s3));var e6 = \"s5\";var b7 = Boolean(eval(e6));var e9 = \"b8\";var b10; if (b7 != eval(e9)) { b10 = true; } else { b10 = false; }var b12 = !(b10);var x13 = (b12) ? 1 : 0;var s14 = '' + (x13);var b15 = !!(s14);x17 = x1 % Number(b15);var b23 = ('' + (x17)).length !== eval(\"x21\");var e60 = \"Boolean(s58)\";var x61; if (b23) { var s31 = s25; var e26 = \"s25\";var x57; if (!!(eval(e26))) { var l30 = (String(b28)).length;var b32 = !!(s31);var b40 = b33; var x35 = +(!(b33));var b36 = Boolean(x35);var e39 = \"var e38 = \\\"b37\\\";eval(e38)\";var x41; if (b36) { x41 = eval(e39); } else { x41 = b40; }var b42 = b32; var b43 = x41;var b47; if (+(b42 === b43) >= eval(\"x45\")) { b47 = true; } else { b47 = false; }x50 = l30; x51 = (b47) ? 1 : 0;var s52 = String(x50 * x51); x57 = Boolean(s52); } else {  x57 = !(!!(s54)); } x61 = x57; } else { x61 = eval(e60); } return x61;");
fn62(input_B1, input_I1, input_S1, input_B3, input_S2, input_S3, input_I2, input_B2);
