// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if false then int((input_bool('B3') == (not(input_bool('B3')) || not(not((if (input_int('I3') in [6, 18, 0, 6, 1, 1, 0, 0, 0, 6]) then not(bool((int(input_string('S3')) - int(input_string('S3'))))) else input_bool('B2'))))))) else int(input_bool('B1')))

var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn29 = Function('b1', 'b16', 'x4', 'b26', 's10', "var x28; if (false) { var b2 = b1; var b3 = !(b2);var opts6 = [6, 18, 0, 6, 1, 1, 0, 0, 0, 6];var b5 = false; for (var idx7 = 0; idx7 < opts6.length; idx7++) { if (opts6[idx7] == x4) { b5 = true; break; } }var x17; if (b5) { var s8 = s10; var x9 = parseInt(s8, 10);x12 = x9; x13 = parseInt(s10, 10);var b14 = Boolean(x12 - x13);var b15; if (b14) { b15 = false; } else { b15 = true; } x17 = b15; } else {  x17 = b16; }var b19 = !(eval(\"x17\"));var b20; if (b19) { b20 = false; } else { b20 = true; }var b21; if (b20) { b21 = true; } else { b21 = b3; }var b23 = false; if (b1 == b21) { b23 = true; } x28 = (b23) | 0; } else {  x28 = ~~(b26); } return x28;");
fn29(input_B3, input_B2, input_I3, input_B1, input_S3);
