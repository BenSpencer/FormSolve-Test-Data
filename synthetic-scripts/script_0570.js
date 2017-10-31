// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (7 >= input_int('I1')) then bool(int(bool(int((input_string('S3') != (str(input_bool('B3')) + input_string('S2'))))))) else (int(bool(input_int('I3'))) == input_int('I3')))

var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");

var fn23 = Function('x1', 's7', 'x16', 's4', 'b5', "var b2 = 7; var b3 = x1;var b10 = s4; var b11 = ((b5).toString() + s7);var x12 = (b10 != b11) | 0;var x19 = x16; var x18 = Number(!!(x16));var b20; if (x18 == x19) { b20 = true; } else { b20 = false; } return (b2 >= b3 ? Boolean((Boolean(x12)) | 0) : b20);");
fn23(input_I1, input_S2, input_I3, input_S3, input_B3);
