// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(str(input_bool('B1'))) != (len(input_string('S1')) - (input_int('I2') % int(input_string('S3'))))) then int(str((bool(int((if (bool(input_int('I2')) == input_bool('B2')) then input_bool('B2') else false))) == input_bool('B3')))) else input_int('I3'))

var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);

var fn36 = Function('b1', 'x16', 's7', 'b26', 'x34', 'b19', 's4', "var x6 = x16; var x3 = parseInt(String(b1), 10);var l5 = (s4).length;var e11 = \"x9 = x6 % Number(s7);x9\";x12 = l5 - eval(e11);var b14 = false; if (x3 != x12) { b14 = true; }var x33 = parseInt(String(eval(\"var b22 = b19; var b18 = !!(eval(\\\"x16\\\"));var b20; if (b18) { if (b19) { b20 = true; } else { b20 = false; } } else { if (b19) { b20 = false; } else { b20 = true; } }var x23; if (b20) { x23 = b22; } else {  x23 = false; }var b25 = !!((x23) | 0);var b29 = b25 == eval(\\\"var e27 = \\\\\\\"b26\\\\\\\";eval(e27)\\\");b29\")), 10);var x35; if (b14) { x35 = x33; } else {  x35 = x34; } return x35;");
fn36(input_B1, input_I2, input_S3, input_B3, input_I3, input_B2, input_S1);
