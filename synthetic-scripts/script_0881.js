// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (false && ((input_bool('B1') === bool(input_int('I3'))) != bool(int(((len(str((not(input_bool('B1')) === bool(int(str(len(input_string('S3')))))))) === input_int('I1')) && (if bool(str(int(bool(len(str(int(str(bool(input_int('I1')))))))))) then (int(input_bool('B1')) < int(input_bool('B3'))) else input_bool('B1'))))))) then (len(input_string('S2')) - input_int('I1')) else input_int('I2'))

var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");

var fn61 = Function('s8', 'x2', 'b36', 'b1', 'x18', 's52', 'x58', "var x55 = x18; var b33 = b1; var b4 = b1 === Boolean(x2);var x21 = x18; var b6 = b33; var b44; if (eval(\"var b41 = b33; var e28 = \\\"var b27 = !!(((parseInt((!!(x21)).toString(), 10)).toString()).length);b27\\\";var x30 = (eval(\\\"eval(e28)\\\")) ? 1 : 0;var s31 = String(x30);var b32 = Boolean(s31);var x42; if (b32) { var x35 = Number(eval(\\\"b33\\\"));var e37 = \\\"b36\\\";var x38 = Number(eval(e37));var b39 = false; if (x35 < x38) { b39 = true; } x42 = b39; } else {  x42 = b41; }x42\")) { var b7 = !(b6);var l9 = (s8).length;var x11 = parseInt((l9).toString(), 10);var b13 = b7; var b14 = (x11) ? true : false;var e17 = \"('' + (b13 === b14)).length\";var b19; if (eval(e17) === x18) { b19 = true; } else { b19 = false; } b44 = b19; } else { b44 = false; }var b48; if (b4) { b48 = !!!(Number(b44)); } else { b48 = !!(Number(b44)); }var e53 = \"s52\";var l54 = (eval(e53)).length;var x60; if ((false && b48)) { x60 = (l54 - x55); } else { x60 = eval(\"x58\"); } return x60;");
fn61(input_S3, input_I3, input_B3, input_B1, input_I1, input_S2, input_I2);
