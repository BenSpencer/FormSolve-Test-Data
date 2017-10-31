// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if true then (input_int('I1') == (if bool(input_int('I1')) then input_int('I1') else len(input_string('S2')))) else not(input_bool('B1')))

var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");

var fn10 = Function('s5', 'x2', "var x4 = x2; var b3 = !!(x2);var x9; if (b3) { x9 = x4; } else { var e7 = \"var e6 = \\\"s5\\\";eval(e6)\";var l8 = (eval(e7)).length; x9 = l8; } return x9;");
var fn18 = Function('b15', 's11', 'x1', "var x12 = x1; var b13 = false; if (x1 == fn10(s11, x12)) { b13 = true; }var b16; if (b15) { b16 = false; } else { b16 = true; }var x17; if (true) { x17 = b13; } else { x17 = b16; } return x17;");
fn18(input_B1, input_S2, input_I1);
