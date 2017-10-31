// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then str((if input_bool('B2') then input_int('I3') else int((input_bool('B2') && (if (not(bool(int(not(input_bool('B3'))))) === input_bool('B1')) then false else (if (len(str(input_bool('B3'))) in [0, -84, 1, 41]) then not(bool(input_string('S2'))) else bool(input_int('I2')))))))) else input_string('S3'))

var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");

var fn37 = Function('s35', 'b11', 'x4', 's20', 'b3', 'x24', 'b1', "var b14 = b1; var e2 = \"b1\";var x36; if (eval(e2)) { var s34 = '' + (eval(\"var b5 = b3; var x32; if (b3) { x32 = x4; } else {  x32 = eval(\\\"var b6 = b14; var b7; if (b6) { b7 = false; } else { b7 = true; }var b10 = !(Boolean(+(b7)));var b12 = b10 === b11;var opts18 = [0, -84, 1, 41];var b17 = false; for (var idx19 = 0; idx19 < opts18.length; idx19++) { if (opts18[idx19] == (String(b14)).length) { b17 = true; break; } }var b25 = !!(x24);var x26; if (b17) { var e21 = \\\\\\\"s20\\\\\\\";var b22 = Boolean(eval(e21)); x26 = !(b22); } else { x26 = b25; }var x27; if (b12) {  x27 = false; } else { x27 = x26; }var b28 = b5; var b29 = x27;var x30 = Number(b28 && b29);x30\\\"); }x32\")); x36 = s34; } else { x36 = s35; } return x36;");
fn37(input_S3, input_B1, input_I3, input_S2, input_B2, input_I2, input_B3);
