// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not(input_bool('B2'))) then bool(int(str(not((str((int(str(len(input_string('S2')))) + int(input_string('S2')))) != "hN"))))) else input_bool('B2'))

var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");

var fn23 = Function('b1', 's4', "var b21 = b1; var b2; if (b1) { b2 = false; } else { b2 = true; }var b3; if (b2) { b3 = false; } else { b3 = true; }var b20 = !!(eval(\"var s8 = s4; x10 = parseInt(String((s4).length), 10); x11 = Number(s8);var b14; if (eval(\\\"String(x10 + x11)\\\") != \\\"hN\\\") { b14 = true; } else { b14 = false; }var b16 = !(b14);var s17 = (b16).toString();Number(s17)\"));var x22; if (b3) { x22 = b20; } else { x22 = b21; } return x22;");
fn23(input_B2, input_S2);
