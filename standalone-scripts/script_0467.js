// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(str((input_bool('B2') != (if bool(int(not(input_bool('B1')))) then bool(int(bool(input_int('I1')))) else input_bool('B3')))))) then (int(input_bool('B3')) + int(input_string('S1'))) else (len(str((bool(input_string('S3')) !== input_bool('B1')))) + (if input_bool('B1') then input_int('I3') else input_int('I1'))))

var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn43 = function (s24, s28, b2, x36, x38, b1, b13) {
    var b30 = b2;
    var x6 = x38;
    var b21 = b13;
    var e7 = "x6";
    var b9 = Boolean(eval("eval(e7)"));
    var x10 = ~~ (b9);
    var e11 = "x10";
    var b15;
    if (b1) {
        if (( !! ((!(b2)) | 0) ? (eval(e11)) ? true : false : b13)) {
            b15 = false;
        } else {
            b15 = true;
        }
    } else {
        if (( !! ((!(b2)) | 0) ? (eval(e11)) ? true : false : b13)) {
            b15 = true;
        } else {
            b15 = false;
        }
    }
    var s17 = String(b15);
    var b18 = !! (s17);
    var e19 = "b18";
    var x42;
    if (!(eval(e19))) {
        var e22 = "b21";
        x26 = Number(eval(e22));
        x27 = Number(s24);
        x42 = x26 + x27;
    } else {
        var b35 = b30;
        var b31 = false;
        if (Boolean(s28) !== b30) {
            b31 = true;
        }
        var s33 = (b31).toString();
        x40 = (s33).length;
        x41 = (b35 ? eval("x36") : x38);
        x42 = x40 + x41;
    }
    return x42;
}
fn43(input_S1, input_S3, input_B1, input_I3, input_I1, input_B2, input_B3);
