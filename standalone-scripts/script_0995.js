// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (not(input_bool('B3')) === not(bool(int(bool(str((if input_bool('B1') then not(bool(input_string('S2'))) else input_bool('B3')))))))) then bool(int(not(bool(len(input_string('S3')))))) else bool(int((len(input_string('S2')) !== input_int('I2')))))

var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn33 = Function('b3', 's25', 'x27', 'b1', 's19', "var s5 = s25; var l20 = (s19).length;var b22; if (!!(l20)) { b22 = false; } else { b22 = true; }var x23 = ~~(b22);var x32; if (eval(\"var b8 = b1; var b2; if (b1) { b2 = false; } else { b2 = true; }var b14 = !!((eval(\\\"var e4 = \\\\\\\"b3\\\\\\\";var x9; if (eval(e4)) { x9 = !((s5) ? true : false); } else { x9 = b8; }var s10 = (x9).toString();var b11 = Boolean(s10);b11\\\")) | 0);var b16 = b2; var b17 = !(b14);b16 === b17\")) { x32 = Boolean(x23); } else { var l26 = (s25).length;var b28 = l26 !== x27;var x30 = +(b28); x32 = Boolean(x30); } return x32;");
fn33(input_B1, input_S2, input_I2, input_B3, input_S3);
