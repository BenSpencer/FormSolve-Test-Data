// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I1') > input_int('I1')) then int(not(((int((int(not(input_bool('B3'))) === input_int('I3'))) < input_int('I1')) && not(input_bool('B1'))))) else input_int('I3'))

var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);

var fn24 = function (x22, x1, b16, b5) {
    var x13 = x1;
    var x8 = x22;
    var x2 = x1;
    var b3 = false;
    if (x1 > x2) {
        b3 = true;
    }
    var x7 = (!(b5)) | 0;
    var e9 = "x8";
    var b10 = x7;
    var b11 = eval(e9);
    var x12 = +(b10 === b11);
    var b14 = x12 < x13;
    var b17 = !(b16);
    var b18 = b14;
    var b19 = b17;
    var b20;
    if (b18 && b19) {
        b20 = false;
    } else {
        b20 = true;
    }
    var x21 = (b20) | 0;
    var x23;
    if (b3) {
        x23 = x21;
    } else {
        x23 = x22;
    }
    return x23;
}
fn24(input_I3, input_I1, input_B1, input_B3);
