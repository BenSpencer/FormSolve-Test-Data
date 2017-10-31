// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(input_bool('B1')) then input_int('I1') else int(input_bool('B3')))

var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);

var fn10 = Function('b7', 'b1', 'x3', "var x9; if (!(b1)) { x9 = eval(\"eval(\\\"var e4 = \\\\\\\"x3\\\\\\\";eval(e4)\\\")\"); } else { var x8 = (b7) | 0; x9 = x8; } return x9;");
fn10(input_B3, input_B1, input_I1);
