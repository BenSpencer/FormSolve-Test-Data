// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((if not((input_bool('B3') != input_bool('B1'))) then bool(input_int('I3')) else not(not(input_bool('B1'))))) then bool(int(((input_bool('B1') || bool(input_int('I1'))) || (input_int('I1') <= input_int('I1'))))) else bool(str(bool(len(str(input_bool('B3')))))))

var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);

function fn41(b1, x16, x8, b10) {
    var b33 = b1;
    var b15 = b10;
    var b2 = b10;
    var x13;
    if (!(eval("eval(\"(b1 != b2)\")"))) {
        x13 = (x8) ? true : false;
    } else {
        var b11;
        if (b10) {
            b11 = false;
        } else {
            b11 = true;
        }
        var b12;
        if (b11) {
            b12 = false;
        } else {
            b12 = true;
        }
        x13 = b12;
    }
    var b14;
    if (x13) {
        b14 = false;
    } else {
        b14 = true;
    }
    var x21 = x16;
    var e18 = "Boolean(x16)";
    var b19 = false;
    if (b15 || eval(e18)) {
        b19 = true;
    }
    var x23 = x21;
    var e25 = "eval(\"x23\")";
    var b26;
    if (eval("x21") <= eval(e25)) {
        b26 = true;
    } else {
        b26 = false;
    }
    var b32 = (eval("((b19 || b26)) ? 1 : 0")) ? true : false;
    var x40;
    if (b14) {
        x40 = b32;
    } else {
        x40 = (eval("var s34 = (b33).toString();var s37 = (((s34).length) ? true : false).toString();s37")) ? true : false;
    }
    return x40;
}
fn41(input_B3, input_I1, input_I3, input_B1);
