// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (len((if bool(input_int('I3')) then input_string('S1') else str(int(not(input_bool('B1')))))) != int(bool(input_string('S1')))) then int(str(input_int('I1'))) else input_int('I2'))

var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);

var fn25 = Function('x1', 's12', 'b5', 'x19', 'x23', "var s3 = s12; var b2 = Boolean(x1);var e4 = \"s3\";var b7; if (eval(\"b5\")) { b7 = false; } else { b7 = true; }var x8 = Number(b7);var s9 = (x8).toString();var l11 = ((b2 ? eval(e4) : s9)).length;var e14 = \"eval(\\\"s12\\\")\";var b17 = l11; var b18 = Number(!!(eval(e14)));var x24; if (b17 != b18) {  x24 = parseInt(eval(\"'' + (x19)\"), 10); } else { x24 = x23; } return x24;");
fn25(input_I3, input_S1, input_B1, input_I1, input_I2);
