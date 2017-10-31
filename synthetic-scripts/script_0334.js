// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((bool(input_int('I1')) == bool(int(input_bool('B2')))) || bool(input_int('I2'))) then input_int('I1') else len((if (int(bool(input_string('S3'))) <= len(input_string('S1'))) then input_string('S2') else input_string('S3'))))

var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");

(function (x1, b3, s16, s20, s13, x8) {
    var x12 = x1;
    var b9 = !! (x8);
    var b10;
    if (b9) {
        b10 = true;
    } else {
        b10 = ((x1) ? true : false == Boolean((b3) | 0));
    }
    var s21 = s13;
    var b14 = Boolean(s13);
    var x15 = ~~ (b14);
    var l17 = (s16).length;
    var b18 = x15 <= l17;
    var x22;
    if (b18) {
        x22 = s20;
    } else {
        x22 = s21;
    }
    var l23 = (x22).length;
    var x24;
    if (b10) {
        x24 = x12;
    } else {
        x24 = l23;
    }
    return x24;
})(input_I1, input_B2, input_S1, input_S2, input_S3, input_I2);
