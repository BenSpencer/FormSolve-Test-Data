// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not(bool(str(((if input_bool('B2') then input_int('I3') else int(str(int(bool(int((input_string('S3') == str(bool(int(input_bool('B2'))))))))))) <= 1))))) then ((input_int('I3') % (if not((if not((str((input_bool('B3') == not(bool(input_int('I1'))))) == input_string('S3'))) then bool(input_string('S2')) else input_bool('B1'))) then input_int('I1') else int(input_string('S1')))) > len(input_string('S2'))) else (input_int('I2') > len(str(input_int('I1')))))

var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");

var fn61 = Function('x2', 's44', 'b40', 'x27', 's3', 'b1', 'x54', 's38', 'b26', "var s34 = s3; var x55 = x27; var x25 = x2; var b4 = b1; var e7 = \"var b6 = ((b4) ? 1 : 0) ? true : false;b6\";var s8 = String(eval(e7));var b9 = false; if (s3 == s8) { b9 = true; }var x14 = (eval(\"!!(~~(b9))\")) | 0;var s15 = '' + (x14);var x16 = Number(s15);var x18; if (b1) {  x18 = x2; } else { x18 = eval(\"x16\"); }var b23; if ((((x18 <= 1)).toString()) ? true : false) { b23 = false; } else { b23 = true; }var b24 = !(b23);var s50 = s38; x48 = x25; x49 = eval(\"var x43 = x27; var b29 = !(Boolean(x27));var s32 = ((b26 == b29)).toString();var b35 = eval(\\\"s32\\\") == s34;var b37 = !(b35);var b39 = Boolean(s38);var x41; if (b37) { x41 = b39; } else { x41 = b40; }var b42 = !(x41);var x46; if (b42) {  x46 = x43; } else {  x46 = parseInt(s44, 10); }x46\");var l51 = (s50).length;var b52 = false; if (x48 % x49 > l51) { b52 = true; }var l57 = (String(x55)).length;var b58 = x54 > l57;var x60; if (b24) { x60 = b52; } else { x60 = b58; } return x60;");
fn61(input_I3, input_S1, input_B1, input_I1, input_S3, input_B2, input_I2, input_S2, input_B3);
