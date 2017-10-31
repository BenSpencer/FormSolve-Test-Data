// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((input_int('I1') in [0, 6, 84, 124, 5, 94, 1, 173]) !== not(not((input_bool('B3') === bool(input_string('S2')))))) then input_bool('B2') else (if not(bool(input_int('I2'))) then (str(bool(input_string('S3'))) in ['YADzu', 'G', 'fFlUI', 'MCK1r', 'uAh', 'WvVTj', 'ESvx', '5r', 'pL']) else (if (input_int('I1') > int(input_string('S1'))) then bool(str(input_bool('B3'))) else not((len(input_string('S1')) > input_int('I2'))))))

var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);

var fn48 = Function('b16', 'x17', 'x1', 's27', 's6', 'b31', 's20', "var x26 = x1; var b5 = b31; var opts3 = [0, 6, 84, 124, 5, 94, 1, 173];var b2 = false; for (var idx4 = 0; idx4 < opts3.length; idx4++) { if (opts3[idx4] == x1) { b2 = true; break; } }var b7 = (s6) ? true : false;var e8 = \"b7\";var b11; if ((b5 === eval(e8))) { b11 = false; } else { b11 = true; }var b12 = !(b11);var e13 = \"b12\";var x37 = x17; var opts24 = ['YADzu', 'G', 'fFlUI', 'MCK1r', 'uAh', 'WvVTj', 'ESvx', '5r', 'pL'];var b23 = opts24.indexOf(String(!!(s20))) > -1;var x45; if (!(!!(x17))) { x45 = b23; } else { var s35 = s27; var x28 = Number(s27);var b29; if (x26 > x28) { b29 = true; } else { b29 = false; }var e33 = \"var s32 = '' + (b31);s32\";var b43 = !(eval(\"var e41 = \\\"eval(\\\\\\\"var l36 = (s35).length;(l36 > x37)\\\\\\\")\\\";eval(e41)\"));var x44; if (b29) { x44 = Boolean(eval(e33)); } else { x44 = b43; } x45 = x44; }var x47; if ((b2 !== eval(e13))) {  x47 = b16; } else { x47 = eval(\"x45\"); } return x47;");
fn48(input_B2, input_I2, input_I1, input_S1, input_S2, input_B3, input_S3);
