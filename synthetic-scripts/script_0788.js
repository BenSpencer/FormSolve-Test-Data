// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (bool(input_int('I2')) || not((input_string('S3') <= str(int(input_bool('B1')))))) then input_int('I3') else (if bool(len((if input_bool('B3') then input_string('S1') else str(input_bool('B2'))))) then input_int('I2') else len(str(int(bool(int(input_bool('B1'))))))))

var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");

var fn34 = Function('s17', 's3', 'x1', 'b18', 'b16', 'b25', 'x15', "var b4 = b25; var x24 = x1; var b2 = !!(x1);var x5 = Number(b4);var s6 = (x5).toString();var b7 = s3; var b8 = s6;var e9 = \"b7 <= b8\";var e10 = \"eval(e9)\";var b11 = !(eval(e10));var b12; if (b2 || b11) { b12 = true; } else { b12 = false; }var e14 = \"b12\";var e19 = \"b18\";var s20 = String(eval(e19));var x21; if (b16) {  x21 = s17; } else { x21 = s20; }var l22 = (x21).length;var x32; if (Boolean(l22)) { x32 = x24; } else { var x26 = Number(b25);var e27 = \"x26\";var b28 = Boolean(eval(e27)); x32 = (((b28) ? 1 : 0).toString()).length; }var x33; if (eval(e14)) { x33 = x15; } else { x33 = x32; } return x33;");
fn34(input_S1, input_S3, input_I2, input_B2, input_B3, input_B1, input_I3);
