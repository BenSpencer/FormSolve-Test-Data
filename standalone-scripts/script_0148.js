// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool((int(str(int(input_string('S1')))) - input_int('I3'))) then (not(bool(int(str(input_bool('B2'))))) != bool(input_string('S2'))) else input_bool('B1'))

var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");

var fn24 = Function('s1', 's16', 'b21', 'x6', 'b10', "var e5 = \"var x2 = Number(s1);var x4 = parseInt('' + (x2), 10);x4\";x7 = eval(e5) - x6;var b13 = (parseInt(String(b10), 10)) ? true : false;var e14 = \"b13\";var b15; if (eval(e14)) { b15 = false; } else { b15 = true; }var b19 = b15; var b20 = !!(eval(\"s16\"));var e22 = \"b21\";var x23; if (!!(x7)) { x23 = b19 != b20; } else { x23 = eval(e22); } return x23;");
fn24(input_S1, input_S2, input_B1, input_I3, input_B2);
