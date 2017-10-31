// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(input_bool('B3')) then ((bool(input_int('I3')) || not(input_bool('B3'))) === (if bool(int((not((not(not(input_bool('B3'))) !== input_bool('B3'))) || input_bool('B1')))) then input_bool('B2') else bool(input_int('I3')))) else input_bool('B3'))

var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn32 = Function('b23', 'x24', 'b18', 'b1', "var b10 = b1; var b30 = b1; var x31; if (!(b1)) {  x31 = eval(\"var b5 = b10; var x3 = x24; var b6 = !(b5);var b7 = false; if (Boolean(x3) || b6) { b7 = true; }var e9 = \\\"b7\\\";var e16 = \\\"var b13 = b10; var b11; if (b10) { b11 = false; } else { b11 = true; }var b12 = !(b11);var b14 = b12; var b15 = b13;b14 !== b15\\\";var b17 = !(eval(e16));var b19 = false; if (b17 || b18) { b19 = true; }var x21 = Number(b19);var b22 = (x21) ? true : false;var x26; if (b22) { x26 = b23; } else {  x26 = (x24) ? true : false; }var b27 = eval(e9) === x26;b27\"); } else {  x31 = b30; } return x31;");
fn32(input_B2, input_I3, input_B1, input_B3);
