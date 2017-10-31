// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(input_bool('B1'))) then ((input_int('I2') !== input_int('I3')) != input_bool('B2')) else bool(int(str(bool(str(input_bool('B3')))))))

var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);

(function (x4, b8, b11, x5, b1) {
    var s2 = (b1).toString();
    var b3 = !! (s2);
    var b9 = false;
    if ((x4 !== x5) != b8) {
        b9 = true;
    }
    var s12 = String(b11);
    var s14 = String( !! (s12));
    var x17;
    if (b3) {
        x17 = b9;
    } else {
        x17 = (Number(s14)) ? true : false;
    }
    return x17;
})(input_I2, input_B2, input_B3, input_I3, input_B1);
