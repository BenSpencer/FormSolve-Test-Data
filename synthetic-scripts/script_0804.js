// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str((input_bool('B2') !== (if bool(((input_int('I1') * (input_int('I2') * len(input_string('S3')))) + input_int('I3'))) then (input_int('I2') !== input_int('I1')) else input_bool('B1')))) <= str(not((input_bool('B2') != input_bool('B3'))))) then "" else str(len(input_string('S1'))))

var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");

(function (s5, x18, x12, x17, b23, b30, b1, s37) {
    var b29 = b1;
    var s28 = String(eval("var x3 = x18; var x4 = x17; var l7 = (eval(\"s5\")).length;x8 = x4 * l7;x10 = x3; x11 = x8;var e19 = \"x18\";var e20 = \"eval(e19)\";var b21 = false; if (x17 !== eval(e20)) { b21 = true; }var x24; if (!!((x10 * x11 + eval(\"x12\")))) { x24 = b21; } else {  x24 = b23; }var b25 = eval(\"b1\"); var b26 = x24;b25 !== b26"));
    var b31;
    if (b29) {
        if (b30) {
            b31 = false;
        } else {
            b31 = true;
        }
    } else {
        if (b30) {
            b31 = true;
        } else {
            b31 = false;
        }
    }
    var b35 = false;
    if (s28 <= (!(b31)).toString()) {
        b35 = true;
    }
    var x40;
    if (b35) {
        x40 = "";
    } else {
        var l38 = (s37).length;
        var s39 = String(l38);
        x40 = s39;
    }
    return x40;
})(input_S3, input_I1, input_I3, input_I2, input_B1, input_B3, input_B2, input_S1);
