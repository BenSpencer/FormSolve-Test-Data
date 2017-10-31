// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then input_string('S1') else str(bool(((int(bool(str(input_bool('B3')))) - int((not(input_bool('B1')) || ((int(str(int(input_string('S3')))) * (input_int('I3') - int(bool(int(input_string('S2')))))) == input_int('I2'))))) * int(bool(input_int('I3')))))))

var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");

(function (s9, x13, b1, x23, s14, b7, s2) {
    var b3 = b1;
    var x31 = x13;
    var s4 = String(b3);
    var b24 = eval("var x12 = Number((parseInt(s9, 10)).toString());var x15 = Number(s14);var b16 = (x15) ? true : false;(x12 * (x13 - ~~(b16)))");
    var b25 = x23;
    var b26 = !(b7) || b24 == b25;
    var b32 = (x31) ? true : false;
    var x33 = ~~ (b32);
    x34 = (+((s4) ? true : false) - (b26) | 0) * x33;
    var s37 = '' + ( !! (x34));
    var x38;
    if (b1) {
        x38 = s2;
    } else {
        x38 = s37;
    }
    return x38;
})(input_S3, input_I3, input_B3, input_I2, input_S2, input_B1, input_S1);
