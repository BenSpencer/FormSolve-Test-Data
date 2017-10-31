// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B1') === input_bool('B3')) then (int(str((input_int('I2') - (int(input_string('S2')) * int(str((int(bool(int(bool(int(input_string('S2')))))) in [-92, 0, 1, 8, 55, -9, 1, 4, 1, 3]))))))) % len(str((if bool(int(input_string('S3'))) then (int(input_bool('B3')) === input_int('I2')) else bool(int(input_string('S1'))))))) else input_int('I3'))

var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn49 = Function('s6', 'b1', 'x41', 'b2', 'x47', 's40', 's42', "var b39 = b2; var x5 = x41; var s9 = s6; var e7 = \"s6\";var b11 = Boolean(Number(s9));var x12 = +(b11);var b13 = (x12) ? true : false;var opts16 = [-92, 0, 1, 8, 55, -9, 1, 4, 1, 3];var b15 = false; for (var idx17 = 0; idx17 < opts16.length; idx17++) { if (opts16[idx17] == ~~(b13)) { b15 = true; break; } }x20 = parseInt(eval(e7), 10); x21 = Number('' + (b15));x22 = x5 - x20 * x21;var fn38 = function(b29, s34, x31, s26) { var x27 = Number(s26);var b28 = !!(x27);var x30 = ~~(b29);var b32 = x30 === x31;var x37; if (b28) { x37 = b32; } else {  x37 = !!(Number(s34)); } return x37; } var s43 = String(fn38(b39, s40, x41, s42));x45 = Number('' + (x22)) % (s43).length;var x48; if ((b1 === b2)) { x48 = x45; } else { x48 = x47; } return x48;");
fn49(input_S2, input_B1, input_I2, input_B3, input_I3, input_S1, input_S3);
