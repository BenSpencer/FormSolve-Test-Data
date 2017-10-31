// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if input_bool('B3') then input_bool('B2') else bool(int(((false || bool(input_int('I1'))) == not((input_int('I3') !== int(str(int(input_bool('B1')))))))))) then len(str(int(input_bool('B2')))) else input_int('I2'))

var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);

(function (b1, x25, b8, x3, b2, x7) {
    var b21 = b2;
    var b5;
    if (false) {
        b5 = true;
    } else {
        var b4 = !! (x3);
        b5 = b4;
    }
    var b16 = false;
    if (b5 == eval("var b12; if (x7 !== parseInt(((b8) | 0).toString(), 10)) { b12 = true; } else { b12 = false; }!(b12)")) {
        b16 = true;
    }
    var x20;
    if (b1) {
        x20 = b2;
    } else {
        x20 = Boolean((b16) ? 1 : 0);
    }
    var s23 = '' + ((b21) | 0);
    var l24 = (s23).length;
    var x26;
    if (x20) {
        x26 = l24;
    } else {
        x26 = x25;
    }
    return x26;
})(input_B3, input_I2, input_B1, input_I1, input_B2, input_I3);
