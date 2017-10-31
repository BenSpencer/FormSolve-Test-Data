// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then str(bool((int(((len(str((not(bool(input_string('S1'))) || not(input_bool('B3'))))) != len((if not((input_int('I1') >= int((input_int('I3') in [1, -4, 142, 1, 41, 44])))) then input_string('S1') else input_string('S2')))) === bool(input_string('S3')))) - int(not((input_int('I3') === input_int('I2'))))))) else input_string('S1'))

var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");

function fn46(s2, s28, s23, x14, x13, b1, x34) {
    var b6 = b1;
    var s44 = s2;
    var x45;
    if (b1) {
        x45 = eval("var x33 = x14; var s22 = s2; var b3 = !!(s2);var b5 = !(eval(\"b3\"));var b8; if (b5) { b8 = true; } else {  b8 = !(b6); }var s10 = '' + (b8);var l11 = (s10).length;var e12 = \"l11\";var opts16 = [1, -4, 142, 1, 41, 44];var b19 = false; if (x13 >= (opts16.indexOf(x14) > -1) | 0) { b19 = true; }var x24; if (!(b19)) { x24 = s22; } else { x24 = s23; }var l25 = (x24).length;var b26; if (eval(e12) != l25) { b26 = true; } else { b26 = false; }var b29 = Boolean(s28);var b30 = b26 === b29;var b35 = x33 === x34;var x38 = (!(b35)) ? 1 : 0;x39 = (b30) ? 1 : 0 - x38;(!!(x39)).toString()");
    } else {
        x45 = s44;
    }
    return x45;
}
fn46(input_S1, input_S3, input_S2, input_I3, input_I1, input_B3, input_I2);
