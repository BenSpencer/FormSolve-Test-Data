// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(not((input_string('S3') <= "")))) then not(bool(int(((not(bool(int(input_bool('B2')))) == input_bool('B3')) || not(input_bool('B1')))))) else input_bool('B2'))

var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);

var fn28 = Function('s1', 'b25', 'b16', 'b13', "var b9 = b25; var b5; if (eval(\"var b2 = s1; var b3 = \\\"\\\";b2 <= b3\")) { b5 = false; } else { b5 = true; }var b8 = !!(eval(\"(b5) ? 1 : 0\"));var e20 = \"var b11 = ((b9) ? 1 : 0) ? true : false;var b12 = !(b11);var b14 = b12 == b13;var b17 = !(b16);var b18 = b14 || b17;b18\";var e21 = \"eval(e20)\";var b23 = (+(eval(e21))) ? true : false;var x27; if (b8) { x27 = !(b23); } else { x27 = eval(\"b25\"); } return x27;");
fn28(input_S3, input_B2, input_B1, input_B3);
