// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool((if input_bool('B3') then str((if bool(input_string('S3')) then not(input_bool('B2')) else input_bool('B2'))) else input_string('S3'))) then (int(str(bool(input_string('S1')))) >= input_int('I3')) else (str((not(input_bool('B2')) === bool(input_int('I1')))) != (if input_bool('B2') then input_string('S3') else input_string('S1'))))

var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);

var fn37 = function (s14, b21, s10, x24, x18, b1) {
    var s31 = s10;
    var b4 = b21;
    var s32 = s14;
    var s2 = s10;
    var b7 = b4;
    var x8;
    if ((s2) ? true : false) {
        var e5 = "b4";
        x8 = !(eval(e5));
    } else {
        x8 = b7;
    }
    var s9 = '' + (x8);
    var x12;
    if (b1) {
        x12 = s9;
    } else {
        x12 = eval("s10");
    }
    var x36;
    if (Boolean(x12)) {
        var b15 = Boolean(s14);
        var s16 = (b15).toString();
        var x17 = parseInt(s16, 10);
        var b19 = x17;
        var b20 = x18;
        x36 = b19 >= b20;
    } else {
        var b30 = b21;
        var e28 = "var b25 = Boolean(x24);var b26 = false; if (eval(\"!(b21)\") === b25) { b26 = true; }b26";
        var s29 = String(eval(e28));
        var x33;
        if (b30) {
            x33 = s31;
        } else {
            x33 = s32;
        }
        var b34 = false;
        if (s29 != x33) {
            b34 = true;
        }
        x36 = b34;
    }
    return x36;
}
fn37(input_S1, input_B2, input_S3, input_I1, input_I3, input_B3);
