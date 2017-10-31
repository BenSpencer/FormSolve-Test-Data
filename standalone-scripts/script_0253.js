// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((bool(int(not(not(not(not(not(input_bool('B3')))))))) !== input_bool('B1'))) then (if (if bool(input_int('I1')) then not(bool(len(input_string('S1')))) else bool(input_string('S2'))) then input_bool('B2') else input_bool('B2')) else input_bool('B2'))

var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);

var fn33 = Function('b27', 'b11', 's24', 'x15', 's17', 'b1', "var b30 = b27; var x9 = ~~(eval(\"var b4; if (!(eval(\\\"b1\\\"))) { b4 = false; } else { b4 = true; }var b5 = !(b4);var b6; if (b5) { b6 = false; } else { b6 = true; }var b7; if (b6) { b7 = false; } else { b7 = true; }b7\"));var b12; if (Boolean(x9) !== b11) { b12 = true; } else { b12 = false; }var b14 = !(b12);var b28 = b27; var b25 = Boolean(s24);var x26; if ((x15) ? true : false) { var e23 = \"var e22 = \\\"eval(\\\\\\\"var l18 = (s17).length;var b20; if (!!(l18)) { b20 = false; } else { b20 = true; }b20\\\\\\\")\\\";eval(e22)\"; x26 = eval(e23); } else { x26 = b25; }var x32; if (b14) { x32 = (x26 ? b27 : b28); } else {  x32 = eval(\"b30\"); } return x32;");
fn33(input_B2, input_B1, input_S2, input_I1, input_S1, input_B3);
