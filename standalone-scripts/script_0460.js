// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B1') && input_bool('B3')) then bool(len(str(int(str(bool(int(not(input_bool('B2'))))))))) else bool(input_int('I3')))

var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);

var fn20 = Function('b2', 'b1', 'b5', 'x17', "var b3; if (b1 && b2) { b3 = true; } else { b3 = false; }var e16 = \"var e10 = \\\"var b6 = !(b5);var b8 = Boolean(~~(b6));var s9 = String(b8);s9\\\";var x11 = Number(eval(e10));var e12 = \\\"x11\\\";var s13 = (eval(e12)).toString();var b15 = !!((s13).length);b15\"; return (b3 ? eval(e16) : (x17) ? true : false);");
fn20(input_B3, input_B1, input_B2, input_I3);
