// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((if bool(input_int('I1')) then input_bool('B2') else not(input_bool('B2'))) != input_bool('B1')) then bool(input_string('S3')) else bool(input_string('S3')))

var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");

var fn16 = function (b7, s10, x1, b3) {
    var s13 = s10;
    var b4 = b3;
    var b5 = !(b4);
    var x6;
    if (Boolean(x1)) {
        x6 = b3;
    } else {
        x6 = b5;
    }
    var b8 = false;
    if (x6 != b7) {
        b8 = true;
    }
    var x15;
    if (b8) {
        var b11 = Boolean(s10);
        var e12 = "b11";
        x15 = eval(e12);
    } else {
        var b14 = !! (s13);
        x15 = b14;
    }
    return x15;
}
fn16(input_B1, input_S3, input_I1, input_B2);
