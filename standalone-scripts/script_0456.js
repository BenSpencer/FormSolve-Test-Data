// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(input_bool('B2')) !== len(str((input_int('I2') < int(str(not(input_bool('B1')))))))) then input_int('I1') else int(input_string('S3')))

var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);

function fn22(b1, x4, b5, s17, x15) {
    var b6;
    if (b5) {
        b6 = false;
    } else {
        b6 = true;
    }
    var s7 = '' + (b6);
    var x8 = Number(s7);
    var b9 = x4 < x8;
    var l12 = ('' + (b9)).length;
    var b13 = (eval("b1")) | 0;
    var b14 = l12;
    var x21;
    if (b13 !== b14) {
        x21 = eval("x15");
    } else {
        var x19 = Number(eval("s17"));
        var e20 = "x19";
        x21 = eval(e20);
    }
    return x21;
}
fn22(input_B2, input_I2, input_B1, input_S3, input_I1);
