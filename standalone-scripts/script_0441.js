// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool((if bool(str((false === bool(input_int('I2'))))) then int(input_bool('B3')) else input_int('I3'))) then (input_int('I3') !== input_int('I1')) else (int(not(not(input_bool('B2')))) == input_int('I2')))

var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn31 = function (b9, x17, b20, x1, x13) {
    var x26 = x1;
    var x16 = x13;
    var e2 = "x1";
    var b3 = (eval(e2)) ? true : false;
    var s6 = ((false === b3)).toString();
    var b8 = !! (eval("s6"));
    var x14;
    if (b8) {
        var x10 = (b9) ? 1 : 0;
        var e11 = "x10";
        var e12 = "eval(e11)";
        x14 = eval(e12);
    } else {
        x14 = x13;
    }
    var b18 = x16;
    var b19 = x17;
    var x30;
    if ( !! (x14)) {
        x30 = b18 !== b19;
    } else {
        x30 = eval("var e23 = \"eval(\\\"var b21 = !(b20);b21\\\")\";var b24 = !(eval(e23));var b27 = false; if ((b24) | 0 == x26) { b27 = true; }b27");
    }
    return x30;
}
fn31(input_B3, input_I1, input_B2, input_I2, input_I3);
