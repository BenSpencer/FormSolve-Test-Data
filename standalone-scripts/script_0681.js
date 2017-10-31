// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then int(input_string('S3')) else (input_int('I3') % (input_int('I3') + input_int('I3'))))

var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");

var fn12 = Function('s2', 'b1', 'x4', "var x11; if (b1) { var x3 = parseInt(s2, 10); x11 = x3; } else { var x5 = x4; var x6 = x5; x7 = x5; x8 = x6;x9 = x4; x10 = x7 + x8; x11 = x9 % x10; } return x11;");
fn12(input_S3, input_B3, input_I3);
