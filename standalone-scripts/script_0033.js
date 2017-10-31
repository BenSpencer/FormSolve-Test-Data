// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((if bool(str(not((if (input_int('I3') === int(bool(int(str(input_int('I3')))))) then not(input_bool('B3')) else bool((if (input_int('I2') != int(input_string('S2'))) then int(input_string('S3')) else input_int('I1'))))))) then (int(bool(int(input_bool('B1')))) < int(str(bool(str(bool(str(input_int('I1')))))))) else input_bool('B3'))) then (input_bool('B3') && (input_bool('B2') && false)) else bool(int((input_string('S3') <= input_string('S3')))))

var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);

var fn62 = Function('b47', 'x19', 'b27', 's17', 'x12', 'b10', 'x1', 's13', "var s54 = s17; var b46 = b10; var x31 = x19; var b43 = b10; var x2 = x1; var e7 = \"var x4 = parseInt('' + (x2), 10);Number((x4) ? true : false)\";var b8 = x1 === eval(e7);var b11 = !(b10);var e21 = \"var b15 = x12 != parseInt(s13, 10);var x18 = parseInt(s17, 10);(b15 ? x18 : x19)\";var b22 = Boolean(eval(e21));var x44; if (((!((b8 ? b11 : b22))).toString()) ? true : false) { x44 = eval(\"var e41 = \\\"var x30 = (!!(+(b27))) | 0;var s32 = String(x31);var e33 = \\\\\\\"s32\\\\\\\";var b34 = !!(eval(e33));var s35 = '' + (b34);var b36 = Boolean(s35);var s37 = String(b36);var x38 = Number(s37);var b39 = false; if (x30 < x38) { b39 = true; }b39\\\";eval(e41)\"); } else { x44 = b43; }var b45 = !(x44);var s55 = s54; var b57 = false; if (s54 <= eval(\"s55\")) { b57 = true; }var b60 = !!(+(b57));var x61; if (b45) {  x61 = eval(\"eval(\\\"var b48; if (b47) {  b48 = false; } else { b48 = false; }var b50; if (b48) { b50 = b46; } else { b50 = false; }b50\\\")\"); } else { x61 = b60; } return x61;");
fn62(input_B2, input_I1, input_B1, input_S3, input_I2, input_B3, input_I3, input_S2);
