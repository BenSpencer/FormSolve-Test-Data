// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B1') == bool(input_string('S3'))) then (input_bool('B1') || input_bool('B1')) else (bool(str((len(str(bool(input_int('I2')))) in [-44, 1, 82, 198, 0, 1]))) != bool(int(not((bool((input_int('I1') % input_int('I3'))) && bool(int(not(not(bool(int(input_bool('B1')))))))))))))

var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);

var fn50 = Function('x13', 'b1', 'x26', 'x25', 's3', "var b30 = b1; var b8 = b1; var e22 = \"var s16 = (eval(\\\"Boolean(x13)\\\")).toString();var opts20 = [-44, 1, 82, 198, 0, 1];opts20.indexOf(eval(\\\"(s16).length\\\")) > -1\";var s23 = (eval(e22)).toString();var b24 = Boolean(s23);var b44; if (eval(\"x27 = x25; x28 = x26;var b29 = !!(x27 % x28);var b41; if (b29) { var e39 = \\\"~~(eval(\\\\\\\"var b35 = !((eval(\\\\\\\\\\\\\\\"eval(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"var x31 = ~~(b30);x31\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")\\\\\\\\\\\\\\\")) ? true : false);!(b35)\\\\\\\"))\\\";var b40 = (eval(e39)) ? true : false; b41 = b40; } else { b41 = false; }b41\")) { b44 = false; } else { b44 = true; }var x49; if ((eval(\"b1\") == Boolean(eval(\"s3\")))) { var b9 = b8;  x49 = eval(\"(b8 || b9)\"); } else { x49 = (b24 != !!(+(b44))); } return x49;");
fn50(input_I2, input_B1, input_I3, input_I1, input_S3);
