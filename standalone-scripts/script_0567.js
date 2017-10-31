// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B1') == (bool(input_int('I2')) != (input_bool('B3') && bool(str(not((1 < int(bool(int(input_string('S3'))))))))))) then input_string('S1') else "ys")

var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);

var fn25 = Function('x2', 's23', 'b4', 'b1', 's6', "var b3 = (x2) ? true : false;var b16; if (eval(\"b4\")) { var e7 = \"s6\";var x8 = parseInt(eval(e7), 10);var b9 = !!(x8);var b11 = false; if (1 < ~~(b9)) { b11 = true; }var b13; if (b11) { b13 = false; } else { b13 = true; }var s14 = '' + (b13); b16 = !!(s14); } else { b16 = false; }var b19 = b3; var b20 = eval(\"b16\");var b21; if (b1) { b21 = b19 != b20; } else { b21 = !b19 != b20; }var x24; if (b21) { x24 = s23; } else {  x24 = \"ys\"; } return x24;");
fn25(input_I2, input_S1, input_B3, input_B1, input_S3);
