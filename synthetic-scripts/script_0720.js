// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(input_string('S3'))) then input_int('I1') else (if not(input_bool('B2')) then input_int('I1') else input_int('I1')))

var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);

(function (b6, s1, x5) {
    var x8 = x5;
    var x9 = x8;
    var b7;
    if (b6) {
        b7 = false;
    } else {
        b7 = true;
    }
    var x10;
    if (b7) {
        x10 = x8;
    } else {
        x10 = x9;
    }
    var x11;
    if (eval("Boolean(Number(s1))")) {
        x11 = x5;
    } else {
        x11 = x10;
    }
    return x11;
})(input_B2, input_S3, input_I1);
