// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not((int(str(((int(input_bool('B2')) - input_int('I2')) * int(bool(int(input_bool('B1'))))))) !== int(not(input_bool('B3')))))) then (str((if bool(int(input_bool('B3'))) then len(str(bool(input_int('I1')))) else int(input_bool('B2')))) <= str(not((if input_bool('B2') then (replace(input_string('S2'), "dBV", "lI") != input_string('S3')) else true)))) else input_bool('B1'))

var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");

var fn42 = Function('x33', 'b39', 'b27', "var e34 = \"x33\";var b35 = Boolean(eval(e34));var e37 = \"'' + (b35)\";var x41; if (eval(\"var x30 = ~~(eval(\\\"eval(\\\\\\\"b27\\\\\\\")\\\"));var b31 = !!(x30);b31\")) { x41 = (eval(e37)).length; } else { var x40 = (b39) | 0; x41 = x40; } return x41;");
var fn60 = Function('b1', 'x3', 'b58', 's48', 's50', 'b16', 'x43', "var b6 = b58; var b45 = b16; var b44 = b1; var b47 = b44; var x53; if (b47) { var s49 = (s48).replace(\"dBV\", \"lI\");var b51; if (s49 != s50) { b51 = true; } else { b51 = false; } x53 = b51; } else {  x53 = true; }var b54; if (x53) { b54 = false; } else { b54 = true; }var b56; if ('' + (fn42(x43, b44, b45)) <= '' + (b54)) { b56 = true; } else { b56 = false; }var x59; if (eval(\"var b25 = !(eval(\\\"var x2 = (b1) | 0;x4 = x2 - x3;var b8 = (+(b6)) ? true : false;var e9 = \\\\\\\"b8\\\\\\\";x12 = x4 * eval(\\\\\\\"(eval(e9)) | 0\\\\\\\");var s14 = String(x12);var x15 = Number(s14);var b21 = false; if (x15 !== eval(\\\\\\\"var e17 = \\\\\\\\\\\\\\\"b16\\\\\\\\\\\\\\\";var b18; if (eval(e17)) { b18 = false; } else { b18 = true; }var x19 = +(b18);x19\\\\\\\")) { b21 = true; }var b23; if (b21) { b23 = false; } else { b23 = true; }b23\\\"));b25\")) { x59 = b56; } else { x59 = b58; } return x59;");
fn60(input_B2, input_I2, input_B1, input_S2, input_S3, input_B3, input_I1);
