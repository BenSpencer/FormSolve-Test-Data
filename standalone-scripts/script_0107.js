// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I1')) then bool(str(input_bool('B3'))) else input_bool('B1'))

var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);

var fn9 = Function('b7', 'b3', 'x1', "var b2 = (x1) ? true : false;var e6 = \"('' + (b3)) ? true : false\";var x8; if (b2) { x8 = eval(e6); } else {  x8 = b7; } return x8;");
fn9(input_B1, input_B3, input_I1);
