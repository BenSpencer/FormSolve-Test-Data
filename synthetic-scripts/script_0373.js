// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str(not(bool(len(str((((if input_bool('B3') then input_int('I2') else input_int('I3')) > int(bool(int(bool((int(str(input_int('I2'))) + 99)))))) != not(input_bool('B3')))))))) === str(int(input_bool('B1')))) then not(input_bool('B3')) else bool(len(str(input_bool('B2')))))

var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn41 = Function('b26', 'x2', 'b36', 'x3', 'b1', "var b34 = b1; var b35 = !(b34);var s37 = (b36).toString();var l38 = (s37).length;var b39 = !!(l38);var x40; if (eval(\"var e22 = \\\"var b16 = b1; var x5 = x2; var x4; if (b1) {  x4 = x2; } else { x4 = x3; }var s6 = String(x5);x8 = parseInt(s6, 10); x9 = 99;var x11 = (!!(x8 + x9)) | 0;var b12 = !!(x11);var x13 = (b12) ? 1 : 0;var b17 = !(b16);var b18 = (x4 > x13) != b17;((b18).toString()).length\\\";var b23 = (eval(e22)) ? true : false;var b24; if (b23) { b24 = false; } else { b24 = true; }var s25 = String(b24);(s25 === eval(\\\"var e27 = \\\\\\\"b26\\\\\\\";(~~(eval(e27))).toString()\\\"))\")) { x40 = b35; } else { x40 = b39; } return x40;");
fn41(input_B1, input_I2, input_B2, input_I3, input_B3);
