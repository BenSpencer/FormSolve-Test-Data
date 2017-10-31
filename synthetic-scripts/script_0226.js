// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then (input_string('S1') === input_string('S3')) else ((bool(input_string('S1')) && ((str(input_int('I3')) <= input_string('S2')) === (not(bool(int(bool(input_string('S2'))))) !== not(bool(input_int('I1')))))) || (input_int('I1') in [27, 1, 74, 1, 0, 49, -7, 5, 1, 10])))

var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);

function fn36(x19, s11, s4, x9, s3, b1) {
    var s7 = s3;
    var b5 = s3;
    var b6 = s4;
    var x29 = x19;
    var b27;
    if (Boolean(s7)) {
        var s14 = s11;
        var b12 = '' + (x9);
        var b13 = s11;
        var b15 = (s14) ? true : false;
        var b17 = Boolean((b15) ? 1 : 0);
        var b18;
        if (b17) {
            b18 = false;
        } else {
            b18 = true;
        }
        var b23 = false;
        if (b18 !== !(Boolean(eval("x19")))) {
            b23 = true;
        }
        var b25 = false;
        if (b12 <= b13 === b23) {
            b25 = true;
        }
        b27 = b25;
    } else {
        b27 = false;
    }
    var opts31 = [27, 1, 74, 1, 0, 49, -7, 5, 1, 10];
    var b30 = false;
    for (var idx32 = 0; idx32 < opts31.length; idx32++) {
        if (opts31[idx32] == x29) {
            b30 = true;
            break;
        }
    }
    var b33 = b27;
    var b34 = b30;
    var x35;
    if (eval("b1")) {
        x35 = b5 === b6;
    } else {
        x35 = b33 || b34;
    }
    return x35;
}
fn36(input_I1, input_S2, input_S3, input_I3, input_S1, input_B3);
