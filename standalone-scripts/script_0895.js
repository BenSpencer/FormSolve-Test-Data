// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (not(input_bool('B1')) != input_bool('B3')) then (str(input_bool('B3')) + str(bool(input_string('S3')))) else str(input_bool('B2')))

var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);

var fn18 = Function('s8', 'b3', 'b15', 'b1', "var b6 = b3; var b2; if (b1) { b2 = false; } else { b2 = true; }var b4; if (b2) { b4 = !b3; } else { b4 = b3; }var s16 = String(b15);var x17; if (b4) { var s7 = String(b6);var x13 = s7; var x14 = String(Boolean(eval(\"var e9 = \\\"s8\\\";eval(e9)\"))); x17 = x13 + x14; } else { x17 = s16; } return x17;");
fn18(input_S3, input_B3, input_B2, input_B1);
