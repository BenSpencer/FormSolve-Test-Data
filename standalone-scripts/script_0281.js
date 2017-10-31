// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(input_int('I2'))) then replace((if (str(len((input_string('S3') + input_string('S1')))) !== (if (if bool(input_int('I3')) then input_bool('B2') else input_bool('B3')) then str((if bool(input_string('S3')) then int(bool((input_string('S2') + input_string('S1')))) else input_int('I3'))) else (if input_bool('B3') then str(int(bool(input_string('S3')))) else input_string('S2')))) then input_string('S1') else str((len(str(input_int('I1'))) in [5, 3, 1]))), "9QdMl", "dSJHn") else (if input_bool('B1') then input_string('S3') else str(bool(input_string('S2')))))

var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);

function fn59(x11, x1, s19, x42, b52, s17, s21, b14, b13) {
    var s53 = s17;
    var s54 = s19;
    var e2 = "x1";
    var b3 = !! (eval(e2));
    var x58;
    if (!(b3)) {
        var s40 = s21;
        var s5 = s17;
        var s6 = s21;
        var x7 = s5 + s6;
        var l9 = (x7).length;
        var s30 = s17;
        var s35 = s19;
        var b29 = b14;
        var x26 = x11;
        var x16;
        if (Boolean(x11)) {
            x16 = b13;
        } else {
            x16 = eval("b14");
        }
        var b18 = Boolean(s17);
        var x27;
        if (b18) {
            var e20 = "s19";
            var x22 = eval(e20);
            var x23 = s21;
            x27 = ~~ (Boolean(x22 + x23));
        } else {
            x27 = x26;
        }
        var x36;
        if (b29) {
            var x33 = ~~ (eval("!!(s30)"));
            x36 = '' + (x33);
        } else {
            x36 = s35;
        }
        var x50;
        if (('' + (l9) !== (x16 ? (x27).toString() : x36))) {
            x50 = eval("s40");
        } else {
            var opts47 = [5, 3, 1];
            x50 = String(opts47.indexOf(eval("var s43 = String(x42);var l44 = (s43).length;l44")) > -1);
        }
        var s51 = (x50).replace("9QdMl", "dSJHn");
        x58 = s51;
    } else {
        var b55 = (s54) ? true : false;
        var s56 = '' + (b55);
        var x57;
        if (b52) {
            x57 = s53;
        } else {
            x57 = s56;
        }
        x58 = x57;
    }
    return x58;
}
fn59(input_I3, input_I2, input_S2, input_I1, input_B1, input_S3, input_S1, input_B3, input_B2);
