// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((input_string('S2') > input_string('S2'))) then (int(input_bool('B1')) + int(not(input_bool('B1')))) else 3)

var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn16 = Function('b10', 's1', "var e6 = \"var s2 = s1; var b3; if (s1 > s2) { b3 = true; } else { b3 = false; }var e5 = \\\"b3\\\";eval(e5)\";var b7 = !(eval(e6));var b8 = b10; var x9 = (b8) | 0;x13 = x9 + ~~(!(b10));var x15; if (b7) { x15 = x13; } else {  x15 = 3; } return x15;");
fn16(input_B1, input_S2);
