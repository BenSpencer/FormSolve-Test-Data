// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not((if input_bool('B1') then (str(input_bool('B2')) == input_string('S2')) else ((bool(len(str((if input_bool('B3') then input_int('I1') else input_int('I2'))))) !== bool(int((input_int('I3') > input_int('I1'))))) === false)))) then input_bool('B1') else ((((input_int('I1') * input_int('I2')) % len(input_string('S3'))) === len(input_string('S2'))) === (len(input_string('S2')) in [61, 156, 1, 1, 1, 0, 5, -24])))

var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);

(function (x17, x11, b1, s37, s41, x12, b10, b2) {
    var b31 = b1;
    var x33 = x11;
    var s5 = s41;
    var x34 = x12;
    var x28;
    if (b1) {
        x28 = eval("var s4 = (eval(\"b2\")).toString();var b6; if (s4 == s5) { b6 = true; } else { b6 = false; }eval(\"b6\")");
    } else {
        var x18 = x11;
        var x13;
        if (b10) {
            x13 = x11;
        } else {
            x13 = x12;
        }
        var b19 = false;
        if (x17 > x18) {
            b19 = true;
        }
        var x21 = +(b19);
        var e23 = "(x21) ? true : false";
        var b26;
        if (((((x13).toString()).length) ? true : false !== eval(e23)) === false) {
            b26 = true;
        } else {
            b26 = false;
        }
        x28 = b26;
    }
    var x54;
    if (!(!(x28))) {
        x54 = eval("b31");
    } else {
        var s46 = s41;
        var l38 = (s37).length;
        var b52 = false;
        if (eval("(((x33 * x34) % l38) === (s41).length)") === eval("var l47 = (s46).length;var opts49 = [61, 156, 1, 1, 1, 0, 5, -24];var b48 = opts49.indexOf(l47) > -1;b48")) {
            b52 = true;
        }
        x54 = b52;
    }
    return x54;
})(input_I3, input_I1, input_B1, input_S3, input_S2, input_I2, input_B3, input_B2);
