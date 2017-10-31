// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(input_bool('B2')) then input_int('I1') else (int((if (input_string('S1') > (if bool(str(int(input_string('S1')))) then input_string('S2') else str((int(input_string('S2')) === int(input_bool('B3')))))) then "m8Wc" else str(len(input_string('S1'))))) / (if input_bool('B2') then len(input_string('S3')) else input_int('I2'))))

var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);

(function (s30, x37, s31, s35, b29, x3, b1) {
    var b34 = b1;
    var x41;
    if (!(b1)) {
        x41 = x3;
    } else {
        var l36 = (s35).length;
        var x38;
        if (b34) {
            x38 = l36;
        } else {
            x38 = x37;
        }
        x39 = parseInt(eval("var fn28 = Function('b16', 's24', 's11', \"var s4 = s24; var s5 = s4; var s12 = s11; var e8 = \\\"var x7 = parseInt(eval(\\\\\\\"s5\\\\\\\"), 10);x7\\\";var s9 = String(eval(e8));var b10 = (s9) ? true : false;var e14 = \\\"var e13 = \\\\\\\"s12\\\\\\\";eval(e13)\\\";var x15 = Number(eval(e14));var s20 = ((x15 === (b16) | 0)).toString();var b22 = false; if (s4 > (b10 ? s11 : s20)) { b22 = true; }var x27; if (b22) { x27 = \\\"m8Wc\\\"; } else { var l25 = (s24).length; x27 = String(l25); } return x27;\"); fn28(b29, s30, s31)"), 10) / x38;
        x41 = x39;
    }
    return x41;
})(input_S1, input_I2, input_S2, input_S3, input_B3, input_I1, input_B2);
