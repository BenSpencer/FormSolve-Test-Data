// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((int(not((str(input_bool('B1')) <= input_string('S3')))) > int(input_bool('B1'))) === bool(input_int('I2'))) then (input_string('S3') != input_string('S3')) else ((input_string('S1') <= input_string('S2')) || bool(input_string('S2'))))

var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);

var fn35 = function (s19, s25, s24, x14, b1) {
    var s4 = s19;
    var b10 = b1;
    var x9 = (eval("var b5 = eval(\"var s2 = (b1).toString();s2\"); var b6 = s4;var b7 = !(b5 <= b6);b7")) | 0;
    var x11 = (b10) ? 1 : 0;
    var b12 = false;
    if (x9 > x11) {
        b12 = true;
    }
    var e16 = "var b15 = (x14) ? true : false;b15";
    var s21 = s19;
    var e20 = "s19";
    var b22 = eval(e20) != s21;
    var s30 = s25;
    var b28 = s24;
    var b29 = eval("eval(\"s25\")");
    var b32;
    if (b28 <= b29) {
        b32 = true;
    } else {
        b32 = (s30) ? true : false;
    }
    return ((b12 === eval(e16)) ? b22 : b32);
}
fn35(input_S3, input_S2, input_S1, input_I2, input_B1);
