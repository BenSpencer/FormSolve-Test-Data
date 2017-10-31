// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(input_string('S2'))) then len(input_string('S3')) else len(input_string('S3')))

var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");

var fn10 = Function('s1', 's5', "var s7 = s5; var l6 = (s5).length;var x9; if (eval(\"var b2 = (s1) ? true : false;var b3 = !(b2);b3\")) { x9 = l6; } else { x9 = (s7).length; } return x9;");
fn10(input_S2, input_S3);
