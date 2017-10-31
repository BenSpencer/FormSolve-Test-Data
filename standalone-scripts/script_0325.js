// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(input_bool('B3')) then str(input_int('I3')) else str(input_int('I2')))

var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);

var fn8 = Function('b1', 'x3', 'x5', "var x7; if (!(b1)) { x7 = (x3).toString(); } else {  x7 = String(x5); } return x7;");
fn8(input_B3, input_I3, input_I2);
