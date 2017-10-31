// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((if input_bool('B2') then input_bool('B1') else not((len(input_string('S3')) >= int((len(str(input_bool('B1'))) !== (if (input_int('I2') === input_int('I2')) then input_int('I1') else input_int('I3')))))))) then input_int('I2') else input_int('I1'))

var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);

var fn34 = Function('b2', 'x15', 's3', 'x11', 'b1', 'x16', "var x31 = x15; var x30 = x11; var b5 = b2; var e27 = \"!(eval(\\\"var e6 = \\\\\\\"b5\\\\\\\";var s7 = String(eval(e6));var l8 = (s7).length;var x9 = x11; var e10 = \\\\\\\"x9\\\\\\\";var e12 = \\\\\\\"x11\\\\\\\";var b13; if (eval(e10) === eval(e12)) { b13 = true; } else { b13 = false; }var x18; if (b13) { x18 = x15; } else { var e17 = \\\\\\\"x16\\\\\\\"; x18 = eval(e17); }var x22 = Number(eval(\\\\\\\"(l8 !== x18)\\\\\\\"));var b23; if ((s3).length >= x22) { b23 = true; } else { b23 = false; }b23\\\"))\";var x28; if (b1) {  x28 = b2; } else { x28 = eval(e27); }var b29; if (x28) { b29 = false; } else { b29 = true; }var x33; if (b29) {  x33 = x30; } else {  x33 = eval(\"x31\"); } return x33;");
fn34(input_B1, input_I1, input_S3, input_I2, input_B2, input_I3);
