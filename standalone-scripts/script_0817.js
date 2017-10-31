// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((input_string('S3') < input_string('S3'))) then input_int('I3') else input_int('I3'))

var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);

var fn9 = Function('s1', 'x6', "var x7 = x6; var s2 = s1; var b3 = false; if (s1 < s2) { b3 = true; }var b5; if (b3) { b5 = false; } else { b5 = true; }var x8; if (b5) {  x8 = x6; } else {  x8 = x7; } return x8;");
fn9(input_S3, input_I3);
