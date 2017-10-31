// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(((int((if bool(input_string('S2')) then (not((if (int((input_bool('B1') !== input_bool('B1'))) === int(str(not(bool(str(input_bool('B1'))))))) then bool(replace(str(input_int('I1')), "ctCi", "")) else input_bool('B2'))) != input_bool('B1')) else true)) >= int(bool(input_int('I2')))) === input_bool('B2'))) then input_string('S3') else str(input_int('I1')))

var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);

var fn46 = Function('x33', 'b22', 'x18', 's42', 'b26', 's1', "var x43 = x18; var b38 = b22; var b34 = (x33) ? true : false;var b36 = ~~(eval(\"var e3 = \\\"(s1) ? true : false\\\";var b4 = b26; var b25 = !(eval(\\\"var b9 = b4; var b5 = b4; var b6 = b4 !== b5;var b11 = !!('' + (b9));var b12; if (b11) { b12 = false; } else { b12 = true; }var s13 = String(b12);var x14 = Number(s13);var x23; if ((+(b6) === eval(\\\\\\\"x14\\\\\\\"))) { var s19 = String(x18);var s20 = (s19).replace(\\\\\\\"ctCi\\\\\\\", \\\\\\\"\\\\\\\"); x23 = (s20) ? true : false; } else {  x23 = b22; }x23\\\"));var b28; if (b25 != eval(\\\"b26\\\")) { b28 = true; } else { b28 = false; }var x30; if (eval(e3)) { x30 = b28; } else {  x30 = true; }x30\")); var b37 = (b34) | 0;var b39 = b36 >= b37 === b38;var b41 = !(b39);var x45; if (b41) { x45 = s42; } else { var s44 = String(x43); x45 = s44; } return x45;");
fn46(input_I2, input_B2, input_I1, input_S3, input_B1, input_S2);
