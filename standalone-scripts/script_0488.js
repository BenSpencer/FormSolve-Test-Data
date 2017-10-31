// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if true then int(bool(int(bool(input_string('S2'))))) else input_int('I2'))

var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);

var fn8 = Function('x6', 's1', "var x7; if (true) { var x3 = (Boolean(s1)) ? 1 : 0;var x5 = (!!(x3)) | 0; x7 = x5; } else { x7 = x6; } return x7;");
fn8(input_I2, input_S2);
