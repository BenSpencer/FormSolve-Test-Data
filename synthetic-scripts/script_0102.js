// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str((input_bool('B2') || input_bool('B1'))) > str((if not((if not(input_bool('B2')) then input_bool('B3') else ((input_int('I2') !== 1) && bool((len(str(input_bool('B3'))) - (input_int('I3') - input_int('I1'))))))) then input_bool('B3') else (0 > (input_int('I3') * int(input_bool('B1'))))))) then int(input_string('S3')) else input_int('I3'))

var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");

var fn47 = function (s43, x16, x17, b2, b13, x9, b1) {
    var x45 = x16;
    var b32 = b2;
    var b6 = b1;
    var b3;
    if (b2) {
        b3 = true;
    } else {
        b3 = b1;
    }
    var s40 = (eval("var b28 = b13; var x30 = x16; var b8 = b13; var b7 = !(b6);var s14 = '' + (b13);x18 = x16 - x17;var b23 = !!(((s14).length - eval(\"x18\")));var b24; if (b23) { b24 = eval(\"var b10 = false; if (x9 !== 1) { b10 = true; }b10\"); } else { b24 = false; }var x26; if (b7) {  x26 = b8; } else { x26 = b24; }var b27 = !(x26);var x38; if (b27) { x38 = eval(\"b28\"); } else { var e31 = \"x30\";x34 = eval(e31); x35 = (b32) ? 1 : 0;var b36 = 0 > x34 * x35; x38 = b36; }x38")).toString();
    var b41;
    if (String(b3) > s40) {
        b41 = true;
    } else {
        b41 = false;
    }
    var x44 = parseInt(s43, 10);
    var x46;
    if (b41) {
        x46 = x44;
    } else {
        x46 = x45;
    }
    return x46;
}
fn47(input_S3, input_I3, input_I1, input_B1, input_B3, input_I2, input_B2);
