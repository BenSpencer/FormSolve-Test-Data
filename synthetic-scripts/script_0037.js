// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(len(str((input_string('S3') !== input_string('S3')))))) then len(input_string('S1')) else input_int('I2'))

var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");

function fn14(x12, s1, s10) {
    var e8 = "var s2 = s1; var s5 = '' + ((s1 !== s2));var l6 = (s5).length;'' + (l6)";
    var b9 = !! (eval(e8));
    var l11 = (s10).length;
    var x13;
    if (b9) {
        x13 = l11;
    } else {
        x13 = x12;
    }
    return x13;
}
fn14(input_I2, input_S3, input_S1);
