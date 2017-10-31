// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(input_bool('B3'))) then bool((((int(not(regex-test(input_string('S1'), /^Z(Drmsu|[A-Z]+)D$/))) + input_int('I1')) / input_int('I3')) - len(str((bool(input_int('I2')) == (int(bool(int(input_string('S2')))) != len(input_string('S2')))))))) else input_bool('B3'))

var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);

(function (x12, x8, b1, x15, s4, s17) {
    var b32 = b1;
    var b3 = !! ((b1).toString());
    var b6 = !((s4).match(/^Z(Drmsu|[A-Z]+)D$/) !== null);
    var x7 = Number(b6);
    var e9 = "x8";
    x10 = x7 + eval(e9);
    x13 = x10 / x12;
    var s21 = s17;
    var x20 = ((Number(s17)) ? true : false) ? 1 : 0;
    var l22 = (s21).length;
    var b23;
    if (x20 != l22) {
        b23 = true;
    } else {
        b23 = false;
    }
    var b25;
    if (Boolean(x15) == b23) {
        b25 = true;
    } else {
        b25 = false;
    }
    var l28 = (String(b25)).length;
    x29 = x13;
    x30 = l28;
    return (b3 ? Boolean(x29 - x30) : b32);
})(input_I3, input_I1, input_B3, input_I2, input_S1, input_S2);
