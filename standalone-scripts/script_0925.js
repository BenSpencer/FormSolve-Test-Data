// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_string('S2') != str((if (input_int('I3') != input_int('I2')) then not(input_bool('B1')) else (input_int('I1') in [4, 1, -15, 69, 178])))) then input_string('S2') else input_string('S3'))

var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn21 = function (b7, s19, x2, s1, x9, x4) {
    var s18 = s1;
    var e3 = "x2";
    var b5;
    if (eval(e3) != x4) {
        b5 = true;
    } else {
        b5 = false;
    }
    var x14;
    if (b5) {
        var b8;
        if (b7) {
            b8 = false;
        } else {
            b8 = true;
        }
        x14 = b8;
    } else {
        var opts12 = [4, 1, -15, 69, 178];
        var b11 = false;
        for (var idx13 = 0; idx13 < opts12.length; idx13++) {
            if (opts12[idx13] == eval("x9")) {
                b11 = true;
                break;
            }
        }
        x14 = b11;
    }
    var b16 = s1;
    var b17 = '' + (x14);
    var x20;
    if (b16 != b17) {
        x20 = s18;
    } else {
        x20 = s19;
    }
    return x20;
}
fn21(input_B1, input_S3, input_I3, input_S2, input_I1, input_I2);
