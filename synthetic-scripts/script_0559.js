// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((bool(input_string('S3')) && (input_int('I3') < len((if not(bool(len(input_string('S1')))) then input_string('S1') else "")))) && bool(int(bool(str(len(input_string('S3'))))))) then input_string('S1') else str(len(input_string('S3'))))

var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");

var fn29 = function (s24, s1, x3) {
    var s25 = s1;
    var s4 = s24;
    var s16 = s1;
    var b14;
    if (eval("var s8 = s4; var b6 = ((s4).length) ? true : false;var x9; if (!(b6)) { x9 = s8; } else { x9 = \"\"; }var l10 = (x9).length;(x3 < l10)")) {
        var b2 = (s1) ? true : false;
        b14 = b2;
    } else {
        b14 = false;
    }
    var s18 = String((s16).length);
    var b19 = (s18) ? true : false;
    var x20 = +(b19);
    var b22 = false;
    if (b14 && Boolean(x20)) {
        b22 = true;
    }
    var x28;
    if (b22) {
        x28 = s24;
    } else {
        x28 = '' + ((s25).length);
    }
    return x28;
}
fn29(input_S1, input_S3, input_I3);
