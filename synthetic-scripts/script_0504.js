// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if (input_int('I1') > (if not(input_bool('B2')) then int(input_bool('B1')) else input_int('I1'))) then input_bool('B1') else bool(int(bool(int(input_string('S3')))))) then (input_string('S2') + str(input_int('I1'))) else input_string('S1'))

var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");

var fn26 = function (x1, s12, b10, s24, s18, b2) {
    var x19 = x1;
    var b4 = b10;
    var x6 = x1;
    var b3 = !(b2);
    var x5 = ~~ (b4);
    var x7;
    if (b3) {
        x7 = x5;
    } else {
        x7 = x6;
    }
    var b8 = false;
    if (x1 > x7) {
        b8 = true;
    }
    var x13 = Number(s12);
    var x15 = +(Boolean(x13));
    var b16 = Boolean(x15);
    var x17;
    if (b8) {
        x17 = eval("b10");
    } else {
        x17 = b16;
    }
    var x25;
    if (x17) {
        x25 = eval("var s20 = '' + (x19);var x21 = s18 + s20;x21");
    } else {
        x25 = s24;
    }
    return x25;
}
fn26(input_I1, input_S3, input_B1, input_S1, input_S2, input_B2);
