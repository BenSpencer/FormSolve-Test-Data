// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if true then (bool(input_string('S2')) != bool(str((bool(str(not(input_bool('B1')))) === input_bool('B2'))))) else not((((if bool(str(bool(str(len(str(("" != input_string('S1')))))))) then (if input_bool('B1') then 79 else int(str(input_int('I2')))) else input_int('I2')) + input_int('I1')) < input_int('I3'))))

var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);

var fn42 = Function('b7', 'x33', 's15', 'x36', 's1', 'x27', 'b25', "var b3 = b25; var b2 = Boolean(s1);var b12 = Boolean(eval(\"var b4 = !(b3);var s5 = String(b4);var b8 = (s5) ? true : false; var b9 = b7;(b8 === b9).toString()\"));var b13; if (b2) { b13 = !b12; } else { b13 = b12; }var x41; if (true) { x41 = b13; } else { x41 = eval(\"var x31 = x27; var e16 = \\\"s15\\\";var b17; if (\\\"\\\" != eval(e16)) { b17 = true; } else { b17 = false; }var l20 = ((b17).toString()).length;var s21 = '' + (l20);var b22 = (s21) ? true : false;var s23 = String(b22);var b24 = !!(s23);var x32; if (b24) { var e26 = \\\"b25\\\";var x29 = Number((x27).toString());var x30; if (eval(e26)) { x30 = 79; } else { x30 = x29; } x32 = x30; } else {  x32 = x31; }x34 = x32 + x33;var b39 = !((x34 < x36));b39\"); } return x41;");
fn42(input_B2, input_I1, input_S1, input_I3, input_S2, input_I2, input_B1);
