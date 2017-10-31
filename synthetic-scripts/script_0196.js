// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(input_bool('B1')) !== int((input_bool('B2') == bool(str((int((input_string('S1') != input_string('S1'))) / int(str(bool(int(bool(input_string('S3')))))))))))) then 1 else input_int('I1'))

var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);

function fn32(x30, b3, s12, b1, s4) {
    var x2 = (b1) ? 1 : 0;
    var s8 = s4;
    var e7 = "var e5 = \"s4\";eval(\"eval(e5)\")";
    var b9 = eval(e7);
    var b10 = s8;
    var x11 = (b9 != b10) | 0;
    var e18 = "'' + (eval(\"var b13 = Boolean(s12);var x14 = +(b13);!!(x14)\"))";
    x20 = x11;
    x21 = Number(eval(e18));
    var s22 = '' + (x20 / x21);
    var b24 = b3 == Boolean(s22);
    var b27 = x2 !== (b24) | 0;
    var e29 = "b27";
    return (eval(e29) ? 1 : x30);
}
fn32(input_I1, input_B2, input_S3, input_B1, input_S1);
