// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(bool(int(bool((if bool(((int(str(((input_bool('B1') && input_bool('B1')) && input_bool('B2')))) * input_int('I1')) - input_int('I2'))) then str(input_bool('B3')) else input_string('S3'))))))) then input_string('S2') else input_string('S1'))

var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");

function fn36(b22, b1, s25, x13, x16, s34, b8, s33) {
    var b21 = Boolean(eval("eval(\"var b2 = b1; var b6; if (eval(\\\"var e4 = \\\\\\\"eval(\\\\\\\\\\\\\\\"b2\\\\\\\\\\\\\\\")\\\\\\\";eval(e4)\\\")) { b6 = b1; } else { b6 = false; }var s11 = '' + ((b6 && b8));var x12 = parseInt(s11, 10);x14 = x12 * x13;x17 = x14; x18 = x16;x17 - x18\")"));
    var e23 = "b22";
    var e26 = "s25";
    var x27;
    if (b21) {
        x27 = '' + (eval(e23));
    } else {
        x27 = eval(e26);
    }
    var x29 = +( !! (x27));
    var s31 = '' + (Boolean(x29));
    var b32 = (s31) ? true : false;
    var x35;
    if (b32) {
        x35 = s33;
    } else {
        x35 = s34;
    }
    return x35;
}
fn36(input_B3, input_B1, input_S3, input_I1, input_I2, input_S1, input_B2, input_S2);
