// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (((int(input_string('S2')) + int(str((if bool(str(input_bool('B2'))) then input_bool('B1') else bool(str((input_int('I2') >= int(input_bool('B2'))))))))) != input_int('I3')) !== input_bool('B1')) then bool(input_string('S3')) else input_bool('B3'))

var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);

function fn34(s1, b32, b3, b25, x22, x8, s30) {
    var b7 = b25;
    var e19 = "parseInt(eval(\"var b9 = b3; var e5 = \\\"'' + (b3)\\\";var b6 = (eval(e5)) ? true : false;var x10 = ~~(b9);var b11 = false; if (x8 >= x10) { b11 = true; }var b14 = !!(String(b11));var x15; if (b6) { x15 = b7; } else { x15 = b14; }String(x15)\"), 10)";
    x20 = Number(s1) + eval(e19);
    var b23 = x20 != x22;
    var e27 = "eval(\"b25\")";
    var b28 = false;
    if (b23 !== eval(e27)) {
        b28 = true;
    }
    var b31 = (s30) ? true : false;
    var x33;
    if (b28) {
        x33 = b31;
    } else {
        x33 = b32;
    }
    return x33;
}
fn34(input_S2, input_B3, input_B2, input_B1, input_I3, input_I2, input_S3);
