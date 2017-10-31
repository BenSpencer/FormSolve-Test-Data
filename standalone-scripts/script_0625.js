// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str(input_bool('B2')) !== str(not(((int((if not((input_bool('B3') !== input_bool('B3'))) then (bool(input_int('I2')) != input_bool('B2')) else bool(int(not((((len(str(not(bool(input_int('I2'))))) / int(bool(input_string('S1')))) % input_int('I2')) != input_int('I2'))))))) + int(input_bool('B2'))) !== int(not(not(input_bool('B3')))))))) then bool(input_string('S1')) else input_bool('B2'))

var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);

function fn55(x13, s18, b3, b1) {
    var b53 = b1;
    var s49 = s18;
    var b10 = b1;
    var b39 = b3;
    var b35 = b10;
    var e33 = "var x8 = x13; var b4 = b3; var b7; if ((b3 !== b4)) { b7 = false; } else { b7 = true; }var b11; if ((x8) ? true : false != b10) { b11 = true; } else { b11 = false; }var x26 = x13; var x23 = x13; var b15; if (!!(x13)) { b15 = false; } else { b15 = true; }var b19 = (s18) ? true : false;x21 = ((b15).toString()).length; x22 = (b19) | 0;x24 = x21 / x22 % x23;var b27 = x24 != x26;var x30 = ~~(!(b27));var x32; if (b7) { x32 = b11; } else { x32 = !!(x30); }x32";
    var x34 = (eval(e33)) ? 1 : 0;
    var b40;
    if (b39) {
        b40 = false;
    } else {
        b40 = true;
    }
    var b41;
    if (b40) {
        b41 = false;
    } else {
        b41 = true;
    }
    var x42 = Number(b41);
    var b43 = false;
    if ((x34 + (b35) | 0) !== x42) {
        b43 = true;
    }
    var b45 = !(b43);
    var b47 = false;
    if ((b1).toString() !== String(b45)) {
        b47 = true;
    }
    var x54;
    if (b47) {
        x54 = Boolean(eval("eval(\"s49\")"));
    } else {
        x54 = b53;
    }
    return x54;
}
fn55(input_I2, input_S1, input_B3, input_B2);
