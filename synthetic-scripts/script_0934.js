// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str(bool(input_string('S3'))) <= str((bool((if bool(str(int(not(bool(input_string('S1')))))) then input_string('S3') else input_string('S3'))) != (input_string('S2') !== str(input_bool('B3')))))) then false else bool(input_string('S2')))

var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");

var fn29 = function (s15, s4, s1, b16) {
    var s26 = s15;
    var s11 = s1;
    var b2 = Boolean(s1);
    var s12 = s11;
    var x8 = (eval("var b6 = !((s4) ? true : false);b6")) ? 1 : 0;
    var b10 = Boolean('' + (x8));
    var b14 = ((b10 ? s11 : s12)) ? true : false;
    var e20 = "(s15 !== String(b16))";
    var b21 = false;
    if (b14 != eval(e20)) {
        b21 = true;
    }
    var s23 = '' + (b21);
    var b24 = (b2).toString();
    var b25 = s23;
    var x28;
    if (b24 <= b25) {
        x28 = false;
    } else {
        x28 = (s26) ? true : false;
    }
    return x28;
}
fn29(input_S2, input_S1, input_S3, input_B3);
