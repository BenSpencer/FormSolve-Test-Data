// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str((int((not(bool(input_string('S3'))) != (input_int('I1') !== int(bool(input_string('S1')))))) === input_int('I3'))) === input_string('S2')) then input_int('I2') else input_int('I1'))

var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);

var fn30 = function (s1, s5, s24, x17, x28, x27) {
    var x4 = x28;
    var e22 = "eval(\"var x16 = (eval(\\\"var e14 = \\\\\\\"var b2 = (s1) ? true : false;var b3; if (b2) { b3 = false; } else { b3 = true; }var e11 = \\\\\\\\\\\\\\\"var b9 = x4; var b10 = eval(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"var b6 = !!(s5);Number(b6)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");b9 !== b10\\\\\\\\\\\\\\\";var b12 = b3 != eval(e11);b12\\\\\\\";eval(e14)\\\")) ? 1 : 0;var b19 = x16; var b20 = eval(\\\"x17\\\");b19 === b20\")";
    var s23 = '' + (eval(e22));
    var b25 = false;
    if (s23 === s24) {
        b25 = true;
    }
    var x29;
    if (b25) {
        x29 = x27;
    } else {
        x29 = x28;
    }
    return x29;
}
fn30(input_S3, input_S1, input_S2, input_I3, input_I1, input_I2);
