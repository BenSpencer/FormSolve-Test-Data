// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I2') < int((int(input_bool('B2')) != input_int('I2')))) then input_bool('B2') else bool((if (int(input_bool('B3')) == input_int('I3')) then 3 else input_int('I1'))))

var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);

var fn26 = Function('x22', 'b15', 'x18', 'x1', 'b11', "var b2 = b11; var e14 = \"var e13 = \\\"var e12 = \\\\\\\"b11\\\\\\\";eval(e12)\\\";eval(e13)\";var x25; if (eval(\"var x4 = x1; var x3 = (b2) | 0;var b5 = x3; var b6 = x4;var x7 = (b5 != b6) ? 1 : 0;var b8 = x1 < x7;b8\")) { x25 = eval(e14); } else { var b20 = eval(\"(b15) | 0\"); var b21 = eval(\"x18\");var x23; if (b20 == b21) { x23 = 3; } else { x23 = x22; } x25 = Boolean(x23); } return x25;");
fn26(input_I1, input_B3, input_I3, input_I2, input_B2);
