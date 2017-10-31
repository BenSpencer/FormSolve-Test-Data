// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if true then len((if not((regex-test(str((input_int('I2') in [0, 10, 1, 94, 144, 1, 44, 60, 0])), /^(r[0-9]?|I)$/) !== input_bool('B3'))) then str((input_int('I2') % input_int('I1'))) else input_string('S2'))) else int(not((input_string('S1') >= str(len(str(not(input_bool('B2')))))))))

var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");

(function (x12, x1, s16, b7, b20, s19) {
    var x11 = x1;
    var opts3 = [0, 10, 1, 94, 144, 1, 44, 60, 0];
    var s5 = String(opts3.indexOf(x1) > -1);
    var re6 = /^(r[0-9]?|I)$/;
    var b8;
    if (re6.test(s5) !== b7) {
        b8 = true;
    } else {
        b8 = false;
    }
    var x17;
    if (!(b8)) {
        x13 = x11 % x12;
        var s15 = String(x13);
        x17 = s15;
    } else {
        x17 = s16;
    }
    var l18 = (x17).length;
    var e25 = "eval(\"var b21 = !(b20);var s22 = '' + (b21);(s22).length\")";
    var s26 = String(eval(e25));
    var b27 = false;
    if (s19 >= s26) {
        b27 = true;
    }
    var x31;
    if (true) {
        x31 = l18;
    } else {
        x31 = Number(!(b27));
    }
    return x31;
})(input_I1, input_I2, input_S2, input_B3, input_B2, input_S1);
