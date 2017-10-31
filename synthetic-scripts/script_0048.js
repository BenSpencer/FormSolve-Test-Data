// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(not(bool(input_int('I1'))))) then str((input_string('S2') !== str(input_int('I2')))) else input_string('S1'))

var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);

function fn18(s16, x1, x11, s7) {
    var b3 = !((x1) ? true : false);
    var x4 = (b3) ? 1 : 0;
    var b5 = (x4) ? true : false;
    var e6 = "b5";
    var e10 = "eval(\"eval(\\\"s7\\\")\")";
    var s15 = '' + ((eval(e10) !== '' + (x11)));
    var x17;
    if (eval(e6)) {
        x17 = s15;
    } else {
        x17 = s16;
    }
    return x17;
}
fn18(input_S1, input_I1, input_I2, input_S2);
