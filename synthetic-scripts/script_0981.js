// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((int(input_bool('B1')) == input_int('I2'))) then (if (if not(bool((1 % input_int('I2')))) then bool(input_int('I1')) else input_bool('B1')) then bool(input_int('I1')) else bool(input_int('I1'))) else (if bool(input_string('S2')) then not(bool(input_string('S3'))) else input_bool('B2')))

var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);

var fn34 = Function('b1', 's23', 'x5', 'x14', 's26', 'b31', "var b16 = b1; var x9 = x5; var x3 = (eval(\"b1\")) | 0;var b6; if (eval(\"x3\") == x5) { b6 = true; } else { b6 = false; }var e25 = \"!!(s23)\";var x32; if (eval(e25)) { var b29 = !(eval(\"var b27 = (s26) ? true : false;b27\"));var e30 = \"b29\"; x32 = eval(e30); } else { x32 = b31; }var x33; if (!(b6)) { var x18 = x14; var x20 = x14; x10 = 1; x11 = x9;var x17; if (!(Boolean(x10 % x11))) {  x17 = (x14) ? true : false; } else { x17 = b16; }var x22; if (x17) { x22 = Boolean(x18); } else {  x22 = Boolean(x20); } x33 = x22; } else { x33 = x32; } return x33;");
fn34(input_B1, input_S2, input_I2, input_I1, input_S3, input_B2);
