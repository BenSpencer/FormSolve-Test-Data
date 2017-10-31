// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str(int(str(int(str(input_int('I2')))))) != str((bool(int(input_string('S3'))) == bool(str(len(str(input_bool('B3')))))))) then int(regex-test(input_string('S3'), /^o([-_ ]|l)+l$/)) else input_int('I3'))

var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");

var fn30 = Function('s23', 'x1', 'x28', 'b11', "var s8 = s23; var e2 = \"x1\";var s5 = String(Number((eval(e2)).toString()));var s7 = String(Number(s5));var s20 = (eval(\"var x9 = Number(s8);var e14 = \\\"((b11).toString()).length\\\";var s15 = String(eval(e14));var b17 = false; if (!!(x9) == !!(s15)) { b17 = true; }b17\")).toString();var b21; if (s7 != s20) { b21 = true; } else { b21 = false; }var re26 = /^o([-_ ]|l)+l$/;var x27 = Number(re26.test(eval(\"eval(\\\"s23\\\")\")));var x29; if (b21) { x29 = x27; } else {  x29 = x28; } return x29;");
fn30(input_S3, input_I2, input_I3, input_B3);
