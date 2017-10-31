// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((int(input_bool('B2')) === len(input_string('S2')))) then true else (input_int('I1') != input_int('I1')))

var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");

var fn13 = Function('s3', 'b1', 'x8', "var b5 = (b1) | 0; var b6 = (s3).length;var b7 = !(b5 === b6);var x9 = x8; var b10 = x8; var b11 = x9;var x12; if (b7) { x12 = true; } else { x12 = b10 != b11; } return x12;");
fn13(input_S2, input_B2, input_I1);
