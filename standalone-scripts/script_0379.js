// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(((input_bool('B1') || bool(input_string('S1'))) != bool(str((input_string('S3') > str(bool(input_string('S2'))))))))) then str(input_int('I1')) else input_string('S3'))

var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);

function fn28(s7, s26, x20, s2, b1) {
    var s6 = s26;
    var b4 = b1 || Boolean(s2);
    var b9 = !! (eval("s7"));
    var b12 = false;
    if (s6 > eval("(b9).toString()")) {
        b12 = true;
    }
    var b15 = Boolean((b12).toString());
    var b16;
    if (b4) {
        if (b15) {
            b16 = false;
        } else {
            b16 = true;
        }
    } else {
        if (b15) {
            b16 = true;
        } else {
            b16 = false;
        }
    }
    var x18 = Number(b16);
    var s25 = String(eval("eval(\"eval(\\\"eval(\\\\\\\"x20\\\\\\\")\\\")\")"));
    var x27;
    if (Boolean(x18)) {
        x27 = s25;
    } else {
        x27 = s26;
    }
    return x27;
}
fn28(input_S2, input_S3, input_I1, input_S1, input_B1);
