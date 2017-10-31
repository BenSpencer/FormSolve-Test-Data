// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if not((bool(str(((0 !== input_int('I1')) && bool(input_string('S2'))))) == input_bool('B3'))) then (input_string('S3') != input_string('S3')) else bool(input_int('I2'))) then not((if (input_int('I3') < int(str(int(str(input_bool('B3')))))) then (bool((int(not(bool(input_string('S1')))) % int(str(input_bool('B3'))))) === input_bool('B3')) else input_bool('B3'))) else true)

var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);

function fn51(s34, b10, s17, s4, x25, x21, x1) {
    var b26 = b10;
    var b2 = 0 !== x1;
    var b5 = !! (s4);
    var b6 = b2;
    var b7 = b5;
    var s8 = String(b6 && b7);
    var b9 = (s8) ? true : false;
    var e11 = "b10";
    var b12 = b9 == eval(e11);
    var e15 = "!(b12)";
    var x23;
    if (eval("eval(e15)")) {
        var s18 = s17;
        var b19 = false;
        if (s17 != s18) {
            b19 = true;
        }
        x23 = b19;
    } else {
        var b22 = (x21) ? true : false;
        x23 = b22;
    }
    var b38 = b26;
    var b47 = b26;
    var e31 = "var s27 = String(b26);var x28 = Number(s27);Number('' + (x28))";
    var b32 = x25 < eval(e31);
    var x48;
    if (b32) {
        var b44 = b38;
        var b36;
        if ((s34) ? true : false) {
            b36 = false;
        } else {
            b36 = true;
        }
        var x40 = Number(String(b38));
        var b43 = !! (((b36) | 0 % x40));
        x48 = (b43 === b44);
    } else {
        x48 = b47;
    }
    var b49 = !(x48);
    var x50;
    if (eval("x23")) {
        x50 = b49;
    } else {
        x50 = true;
    }
    return x50;
}
fn51(input_S1, input_B3, input_S3, input_S2, input_I3, input_I2, input_I1);
