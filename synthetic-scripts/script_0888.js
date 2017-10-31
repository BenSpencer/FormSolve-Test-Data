// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(len(str((str(input_bool('B3')) > str(input_bool('B3')))))) then int((if not(bool(input_string('S3'))) then input_bool('B1') else (if not((input_int('I1') == input_int('I2'))) then (input_bool('B2') && bool(str(input_int('I3')))) else (if input_bool('B1') then input_bool('B2') else (str(int((regex-replace(input_string('S1'), /([a-z]|UWW)?/, "XA") == str(int(input_bool('B3')))))) in ['tPGe', '1', 'B', '2lOg', 'lg9D', 'p', '9en', 'LPl', 'pmvqG', '5Jx']))))) else input_int('I2'))

var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");

var fn56 = Function('b13', 'x15', 's10', 'b1', 's48', 'x20', 'b19', 'x14', "var x54 = x15; var b49 = b1; var b3 = b1; var s2 = (b1).toString();var s4 = '' + (b3);var b5; if (s2 > s4) { b5 = true; } else { b5 = false; }var s7 = String(b5);var l8 = (s7).length;var x55; if (!!(l8)) {  x55 = Number(eval(\"var b47 = b13; var b12 = !(!!(s10));var b46 = b19; var b16 = false; if (x14 == x15) { b16 = true; }var b18 = !(b16);var e23 = \\\"var s22 = (eval(\\\\\\\"x20\\\\\\\")).toString();s22\\\";var b25 = false; if (b19 && (eval(e23)) ? true : false) { b25 = true; }var fn45 = Function('b28', 'b27', 's30', 'b33', \\\"var re32 = new RegExp(\\\\\\\"([a-z]|UWW)?\\\\\\\");var s35 = ((b33) | 0).toString();var b37; if ((s30).replace(re32, \\\\\\\"XA\\\\\\\") == eval(\\\\\\\"s35\\\\\\\")) { b37 = true; } else { b37 = false; }var x39 = +(b37);var s40 = '' + (x39);var opts42 = ['tPGe', '1', 'B', '2lOg', 'lg9D', 'p', '9en', 'LPl', 'pmvqG', '5Jx'];var b41 = opts42.indexOf(s40) > -1;var x44; if (b27) {  x44 = eval(\\\\\\\"b28\\\\\\\"); } else { x44 = b41; } return x44;\\\"); var x50; if (b18) { x50 = b25; } else { x50 = fn45(b46, b47, s48, b49); }var x51; if (b12) { x51 = b13; } else { x51 = x50; }x51\")); } else { x55 = x54; } return x55;");
fn56(input_B1, input_I2, input_S3, input_B3, input_S1, input_I3, input_B2, input_I1);
