// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then (input_string('S2') != str((input_string('S1') !== str(input_bool('B2'))))) else (if input_bool('B1') then ((len(str(bool(str(bool(str(input_int('I2'))))))) != input_int('I1')) || true) else input_bool('B1')))

var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);

(function (b1, x13, x22, b4, s3, s2, b12) {
    var s5 = String(b4);
    var e6 = "s5";
    var b7 = s3;
    var b8 = eval(e6);
    var b10;
    if (s2 != '' + (b7 !== b8)) {
        b10 = true;
    } else {
        b10 = false;
    }
    var b27 = b12;
    var x28;
    if (b12) {
        var e17 = "var s14 = '' + (x13);var e15 = \"s14\";var b16 = !!(eval(e15));b16";
        var s18 = '' + (eval(e17));
        var l21 = (String((s18) ? true : false)).length;
        var b25 = (l21 != x22);
        var b26 = true;
        x28 = b25 || b26;
    } else {
        x28 = b27;
    }
    var x29;
    if (b1) {
        x29 = b10;
    } else {
        x29 = x28;
    }
    return x29;
})(input_B3, input_I2, input_I1, input_B2, input_S1, input_S2, input_B1);
