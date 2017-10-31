// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(((str(int(bool(int((int(bool(int(input_string('S1')))) != 10))))) >= input_string('S2')) || true)) then bool(int(regex-test(str(input_int('I2')), /^V(X[0-9]|r)*ymJKxv$/))) else input_bool('B3'))

var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");

var fn26 = function (b24, x19, s13, s1) {
    var b16;
    if (true) {
        b16 = true;
    } else {
        var b3 = Boolean(parseInt(s1, 10));
        var x4 = Number(b3);
        var e5 = "x4";
        var b6 = false;
        if (eval(e5) != 10) {
            b6 = true;
        }
        var s12 = ((eval("((b6) | 0) ? true : false")) | 0).toString();
        var b14 = s12 >= s13;
        b16 = b14;
    }
    var b18 = !(b16);
    var x25;
    if (b18) {
        var s20 = '' + (x19);
        var re21 = /^V(X[0-9]|r)*ymJKxv$/;
        var b23 = ((re21.test(s20)) ? 1 : 0) ? true : false;
        x25 = b23;
    } else {
        x25 = b24;
    }
    return x25;
}
fn26(input_B3, input_I2, input_S2, input_S1);
