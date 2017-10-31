// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((input_int('I2') == len(str(input_bool('B2'))))) then not((if bool(int(input_bool('B3'))) then bool(len(str(int(bool(input_int('I1')))))) else input_bool('B2'))) else not(input_bool('B1')))

var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);

var fn30 = Function('b10', 'x15', 'b23', 'b26', 'x1', "var b4 = b23; var e2 = \"x1\";var e3 = \"eval(e2)\";var s5 = String(b4);var l6 = (s5).length;var b7 = eval(e3) == l6;var b9 = !(b7);var b27 = !(b26);var x29; if (b9) { var e12 = \"var e11 = \\\"b10\\\";eval(e11)\";var x13 = (eval(e12)) ? 1 : 0;var b22 = Boolean((eval(\"(~~(Boolean(eval(\\\"x15\\\")))).toString()\")).length);var b25; if ((Boolean(x13) ? b22 : b23)) { b25 = false; } else { b25 = true; } x29 = b25; } else { x29 = eval(\"b27\"); } return x29;");
fn30(input_B3, input_I1, input_B2, input_B1, input_I2);
