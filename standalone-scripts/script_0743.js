// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((((if not(bool(str(input_int('I2')))) then str(input_int('I3')) else input_string('S1')) !== input_string('S3')) == input_bool('B2'))) then (input_int('I3') < input_int('I3')) else input_bool('B2'))

var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);

(function (s10, b14, x1, x18, s7) {
    var b22 = b14;
    var x5 = x18;
    var e13 = "var s2 = (x1).toString();var b3 = Boolean(s2);var x8; if (!(b3)) { var s6 = String(x5); x8 = s6; } else {  x8 = s7; }var e9 = \"x8\";var b11 = false; if (eval(e9) !== s10) { b11 = true; }b11";
    var b15 = eval(e13) == b14;
    var x19 = x18;
    var x23;
    if (!(b15)) {
        x23 = (x18 < x19);
    } else {
        x23 = b22;
    }
    return x23;
})(input_S3, input_B2, input_I2, input_I3, input_S1);
