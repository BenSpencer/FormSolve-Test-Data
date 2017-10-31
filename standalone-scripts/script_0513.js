// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_string('S1') <= str((bool(input_string('S3')) !== not((input_string('S3') >= str((if bool(input_int('I1')) then len(input_string('S2')) else input_int('I2')))))))) then input_bool('B2') else bool(input_int('I3')))

var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);

var fn16 = function (x13, x6, s9) {
    var b8 = (eval("x6")) ? true : false;
    var x15;
    if (b8) {
        var e11 = "eval(\"s9\")";
        var l12 = (eval(e11)).length;
        x15 = l12;
    } else {
        x15 = eval("x13");
    }
    return x15;
}(function (x31, s19, x17, s2, b30, s1, x18) {
    var s5 = s2;
    var s20 = String(fn16(x17, x18, s19));
    var b21;
    if (s5 >= s20) {
        b21 = true;
    } else {
        b21 = false;
    }
    var b23 = !(b21);
    var b24 = false;
    if (eval("(s2) ? true : false") !== b23) {
        b24 = true;
    }
    var b28 = s1 <= (eval("b24")).toString();
    var x34;
    if (b28) {
        x34 = b30;
    } else {
        x34 = eval("Boolean(x31)");
    }
    return x34;
})(input_I3, input_S2, input_I2, input_S3, input_B2, input_S1, input_I1);
