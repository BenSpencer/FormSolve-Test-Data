// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (bool(str(input_bool('B1'))) != bool(input_string('S3'))) then str((not(input_bool('B2')) === not(input_bool('B3')))) else input_string('S1'))

var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);

var fn20 = Function('s18', 'b9', 'b12', 'b1', 's4', "var s2 = '' + (b1);var e5 = \"s4\";var b6 = Boolean(eval(e5));var b7 = !!(s2); var b8 = b6;var e11 = \"var b10; if (b9) { b10 = false; } else { b10 = true; }b10\";var b14 = eval(e11) === !(b12);var e16 = \"b14\";var x19; if (b7 != b8) { x19 = '' + (eval(e16)); } else { x19 = s18; } return x19;");
fn20(input_S1, input_B2, input_B3, input_B1, input_S3);
