// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(str(int((input_int('I1') == input_int('I3')))))) then (input_string('S1') > input_string('S3')) else bool(input_string('S3')))

var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);

function fn19(s13, x1, x2, s11) {
    var s16 = s13;
    var b14;
    if (eval("s11") > s13) {
        b14 = true;
    } else {
        b14 = false;
    }
    return (eval("var b3 = false; if (x1 == x2) { b3 = true; }var x5 = Number(b3);var s7 = '' + (eval(\"x5\"));var b8 = Boolean(s7);var b9 = !(b8);b9") ? b14 : (s16) ? true : false);
}
fn19(input_S3, input_I1, input_I3, input_S1);
