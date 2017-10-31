// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if (input_string('S2') >= input_string('S3')) then not((int(input_bool('B3')) === len(str(int((input_bool('B1') !== not(input_bool('B1')))))))) else bool(str(input_int('I2')))) then input_bool('B1') else input_bool('B1'))

var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);

var fn29 = Function('s1', 'b5', 'b26', 'x21', 's2', "var b27 = b26; var b7 = b26; var b3 = false; if (s1 >= s2) { b3 = true; }var e19 = \"var x6 = +(b5);var b8 = b7; var b9; if (b8) { b9 = false; } else { b9 = true; }var b10 = b7; var b11 = b9;var l15 = ('' + (+(eval(\\\"b10 !== b11\\\")))).length;var e16 = \\\"l15\\\";(x6 === eval(e16))\";var s23 = (eval(\"x21\")).toString();var x25; if (b3) { x25 = !(eval(e19)); } else { x25 = (s23) ? true : false; }var x28; if (x25) {  x28 = b26; } else { x28 = b27; } return x28;");
fn29(input_S2, input_B3, input_B1, input_I2, input_S3);
