// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(not(not(not(input_bool('B3')))))) then (if (str(input_int('I2')) === input_string('S2')) then (str(input_bool('B2')) >= input_string('S1')) else (if bool(str(int(input_string('S3')))) then not(bool(len(str(input_int('I2'))))) else input_bool('B1'))) else (bool(input_int('I2')) === true))

var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");

var fn40 = Function('b13', 'x24', 's17', 'b29', 's10', 's20', 'b1', "var x35 = x24; var e4 = \"var b2 = !(b1);var b3; if (b2) { b3 = false; } else { b3 = true; }b3\";var b5 = !(eval(e4));var x6 = Number(b5);var b7 = !!(x6);var e33 = \"var x8 = x24; var b11 = (x8).toString() === s10;var b18 = false; if (eval(\\\"var e14 = \\\\\\\"b13\\\\\\\";var s15 = (eval(e14)).toString();s15\\\") >= s17) { b18 = true; }var x21 = parseInt(s20, 10);var b23 = !!('' + (x21));var s25 = (x24).toString();var b28; if (Boolean((s25).length)) { b28 = false; } else { b28 = true; }var x30; if (b23) { x30 = b28; } else { x30 = b29; }var e32 = \\\"(b11 ? b18 : x30)\\\";eval(e32)\";var x39; if (b7) { x39 = eval(\"eval(e33)\"); } else { x39 = ((x35) ? true : false === true); } return x39;");
fn40(input_B2, input_I2, input_S1, input_B1, input_S2, input_S3, input_B3);
