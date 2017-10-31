// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(bool(str(input_int('I2'))))) then ((int(bool(input_int('I3'))) - (if (input_bool('B2') !== not((input_bool('B1') == bool(input_int('I2'))))) then input_int('I3') else len(input_string('S1')))) / input_int('I3')) else input_int('I3'))

var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);

function fn31(s21, x20, b10, b9, x1) {
    var x11 = x1;
    var x29 = x20;
    var b3 = !! ('' + (x1));
    var x4 = (b3) | 0;
    var x26 = x20;
    var x6 = x20;
    var x8 = +( !! (x6));
    var e17 = "var e12 = \"x11\";var b14 = b10; var b15 = Boolean(eval(e12));!(b14 == b15)";
    var b18;
    if (b9 !== eval(e17)) {
        b18 = true;
    } else {
        b18 = false;
    }
    var l22 = (s21).length;
    x24 = x8 - (b18 ? x20 : l22);
    x27 = x24 / x26;
    var x30;
    if (Boolean(x4)) {
        x30 = x27;
    } else {
        x30 = x29;
    }
    return x30;
}
fn31(input_S1, input_I3, input_B1, input_B2, input_I2);
