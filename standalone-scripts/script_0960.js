// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if ((if not(input_bool('B3')) then bool(input_int('I2')) else bool(input_int('I1'))) != input_bool('B1')) then not(not(not(bool(input_int('I2'))))) else (((input_int('I3') * int(input_string('S1'))) >= int(input_bool('B1'))) && bool(regex-replace(input_string('S1'), /J([-_ ]|\w)?fXsc/, "4h")))) then input_string('S2') else input_string('S3'))

var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");

(function (b1, x5, s18, x11, s36, b22, x17, s37) {
    var b8 = b22;
    var x3 = x11;
    var b2;
    if (b1) {
        b2 = false;
    } else {
        b2 = true;
    }
    var x7;
    if (b2) {
        x7 = (x3) ? true : false;
    } else {
        var b6 = Boolean(x5);
        x7 = b6;
    }
    var b9;
    if (x7) {
        b9 = !b8;
    } else {
        b9 = b8;
    }
    var x35;
    if (b9) {
        var e15 = "var b12 = (x11) ? true : false;var b13; if (b12) { b13 = false; } else { b13 = true; }var b14 = !(b13);b14";
        var b16 = !(eval(e15));
        x35 = b16;
    } else {
        var s29 = s18;
        var x19 = parseInt(s18, 10);
        x20 = x17 * x19;
        var e23 = "b22";
        var b27 = false;
        if (x20 >= (eval("eval(\"eval(e23)\")")) | 0) {
            b27 = true;
        }
        var b33;
        if (b27) {
            var re31 = new RegExp("J([-_ ]|\\w)?fXsc");
            var b32 = Boolean((s29).replace(re31, "4h"));
            b33 = b32;
        } else {
            b33 = false;
        }
        x35 = b33;
    }
    var x38;
    if (x35) {
        x38 = s36;
    } else {
        x38 = s37;
    }
    return x38;
})(input_B3, input_I1, input_S1, input_I2, input_S2, input_B1, input_I3, input_S3);
