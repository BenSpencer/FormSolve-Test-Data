// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((not(not(bool((input_int('I1') / len(input_string('S1')))))) && (input_string('S2') < input_string('S1')))) then not(not(not(not(input_bool('B2'))))) else not(bool(input_int('I3'))))

var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);

var fn36 = Function('x30', 's13', 's12', 'b23', 'x1', "var s3 = s13; var b10 = !(eval(\"var e5 = \\\"var l4 = (s3).length;l4\\\";!!((eval(\\\"x1\\\") / eval(e5)))\"));var b11; if (b10) { b11 = false; } else { b11 = true; }var b18 = s12; var b19 = eval(\"eval(\\\"eval(\\\\\\\"var e14 = \\\\\\\\\\\\\\\"s13\\\\\\\\\\\\\\\";eval(e14)\\\\\\\")\\\")\");var b20 = false; if (b11 && b18 < b19) { b20 = true; }var b22 = !(b20);var e31 = \"x30\"; return (b22 ? !(!(eval(\"eval(\\\"var b25; if (!(b23)) { b25 = false; } else { b25 = true; }b25\\\")\"))) : eval(\"!((eval(e31)) ? true : false)\"));");
fn36(input_I3, input_S1, input_S2, input_B2, input_I1);
