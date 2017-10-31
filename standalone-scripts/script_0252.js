// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str(input_int('I1')) >= input_string('S3')) then (bool((if input_bool('B1') then input_int('I2') else input_int('I3'))) && input_bool('B1')) else (input_int('I1') === -34))

var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");

var fn21 = Function('b13', 'x10', 'x9', 's3', 'x1', "var x16 = x1; var b4 = false; if ((x1).toString() >= s3) { b4 = true; }var b6 = b13; var b14; if (b13) { var e8 = \"eval(\\\"b6\\\")\";var x11; if (eval(e8)) {  x11 = x9; } else { x11 = x10; }var b12 = Boolean(x11); b14 = b12; } else { b14 = false; }var x20; if (b4) { x20 = b14; } else {  x20 = (eval(\"x16\") === -34); } return x20;");
fn21(input_B1, input_I3, input_I2, input_S3, input_I1);
