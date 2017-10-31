// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(input_bool('B1')) then bool(input_string('S2')) else not(not(bool(str((if ((input_bool('B3') == input_bool('B3')) !== input_bool('B1')) then bool(input_int('I1')) else input_bool('B3')))))))

var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");

function fn22(s3, b15, x13, b1) {
    var b10 = b1;
    var b6 = b15;
    var b7 = b6;
    var b8;
    if (b6) {
        b8 = b7;
    } else {
        b8 = !b7;
    }
    var b11 = b8;
    var b12 = b10;
    var b14 = (x13) ? true : false;
    var b19 = !(Boolean(String((b11 !== b12 ? b14 : b15))));
    var x21;
    if (!(b1)) {
        var e5 = "!!(s3)";
        x21 = eval(e5);
    } else {
        x21 = !(b19);
    }
    return x21;
}
fn22(input_S2, input_B3, input_I1, input_B1);
