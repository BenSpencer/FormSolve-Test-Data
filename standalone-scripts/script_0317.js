// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str((if bool((len(str((if false then input_bool('B3') else bool(int((int(not(bool(int(input_bool('B3'))))) != (if ((input_int('I2') <= len(str(input_bool('B3')))) == not((input_bool('B2') && input_bool('B3')))) then input_int('I3') else int(not(not(not(bool(input_int('I2'))))))))))))) * input_int('I2'))) then false else input_bool('B2')))) then input_int('I3') else int(bool(input_int('I3'))))

var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn50 = function (b1, b13, x21, x20) {
    var x44 = x20;
    var x45 = x20;
    var b40 = b13;
    var x36 = x21;
    var b14 = b1;
    var x33;
    if (false) {
        x33 = b1;
    } else {
        var b2 = b14;
        var x7 = x21;
        var b8 = b14;
        var l10 = (String(b8)).length;
        var b11;
        if (x7 <= l10) {
            b11 = true;
        } else {
            b11 = false;
        }
        var b15;
        if (b14) {
            b15 = b13;
        } else {
            b15 = false;
        }
        var b23 = !((x21) ? true : false);
        var b24 = !(b23);
        var b25;
        if (b24) {
            b25 = false;
        } else {
            b25 = true;
        }
        var e26 = "b25";
        var x28;
        if ((b11 == !(b15))) {
            x28 = x20;
        } else {
            x28 = ~~ (eval(e26));
        }
        var b29 = false;
        if (+(!(Boolean((b2) | 0))) != x28) {
            b29 = true;
        }
        var b32 = Boolean((b29) | 0);
        x33 = b32;
    }
    var l35 = (String(x33)).length;
    x37 = l35 * x36;
    var b39 = Boolean(x37);
    var x41;
    if (b39) {
        x41 = false;
    } else {
        x41 = b40;
    }
    var s42 = '' + (x41);
    var b43 = Boolean(s42);
    var x49;
    if (b43) {
        x49 = x44;
    } else {
        var e46 = "x45";
        var b47 = (eval(e46)) ? true : false;
        x49 = (b47) | 0;
    }
    return x49;
}
fn50(input_B3, input_B2, input_I2, input_I3);
