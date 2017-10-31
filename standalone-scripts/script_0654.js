// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then input_int('I3') else (int(bool(input_int('I2'))) / len(input_string('S3'))))

var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");

(function (x4, b1, x3, s7) {
    var e2 = "b1";
    var b5 = Boolean(x4);
    var x6 = (b5) ? 1 : 0;
    x10 = x6 / eval("var l8 = (s7).length;l8");
    return (eval(e2) ? x3 : x10);
})(input_I2, input_B2, input_I3, input_S3);
