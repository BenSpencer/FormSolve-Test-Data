// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool((int(str((if (input_int('I2') != input_int('I2')) then input_bool('B2') else (input_string('S1') == input_string('S3'))))) / (int(input_string('S2')) / len(str(int(input_bool('B3'))))))) then input_string('S2') else str(bool(input_string('S3'))))

var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);

function fn34(b18, b5, s6, s16, x1, s30) {
    var s8 = s30;
    var s29 = s16;
    var b31 = Boolean(s30);
    return (Boolean(eval("var e26 = \"var x17 = parseInt(s16, 10);var l21 = ('' + (+(b18))).length;(eval(\\\"var x2 = x1; var b3 = x1 != x2;var x11; if (b3) {  x11 = b5; } else { var e7 = \\\\\\\"s6\\\\\\\";var b9 = false; if (eval(e7) == s8) { b9 = true; } x11 = b9; }var s13 = '' + (eval(\\\\\\\"x11\\\\\\\"));var x14 = Number(s13);x14\\\") / (x17 / l21))\";eval(e26)")) ? s29 : String(b31));
}
fn34(input_B3, input_B2, input_S1, input_S2, input_I2, input_S3);
