// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then int((int(input_string('S2')) != int(not(not(((not(input_bool('B3')) != input_bool('B3')) && (int(not(bool(str((int(str(int(input_bool('B1')))) > (if bool(int(str((input_bool('B2') == bool(input_string('S3')))))) then len(str(input_bool('B2'))) else input_int('I2'))))))) in [1, 52, 0, 3]))))))) else input_int('I2'))

var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);

var fn51 = function (b15, x27, s16, b1, s3, b11) {
    var x49 = x27;
    var b6 = b1;
    var x50;
    if (eval("b1")) {
        var x5 = Number(eval("s3"));
        var b8 = b6;
        var b9;
        if (!(b6) != b8) {
            b9 = true;
        } else {
            b9 = false;
        }
        var b41;
        if (eval("var x36 = (eval(\"var x12 = +(b11);var s13 = (x12).toString();var b24 = b15; var b18; if (b15 == (s16) ? true : false) { b18 = true; } else { b18 = false; }var s20 = '' + (b18);var x21 = parseInt(s20, 10);var x28; if (eval(\\\"Boolean(x21)\\\")) { var s25 = String(b24);var l26 = (s25).length; x28 = l26; } else {  x28 = x27; }var b30 = Number(s13) > eval(\\\"x28\\\");var s32 = (b30).toString();var b33 = !!(s32);var b34; if (b33) { b34 = false; } else { b34 = true; }b34\")) | 0;var opts38 = [1, 52, 0, 3];var b37 = false; for (var idx39 = 0; idx39 < opts38.length; idx39++) { if (opts38[idx39] == x36) { b37 = true; break; } }b37")) {
            b41 = b9;
        } else {
            b41 = false;
        }
        var b44;
        if (!(b41)) {
            b44 = false;
        } else {
            b44 = true;
        }
        var x45 = +(b44);
        x50 = ((x5 != x45)) ? 1 : 0;
    } else {
        x50 = x49;
    }
    return x50;
}
fn51(input_B2, input_I2, input_S3, input_B3, input_S2, input_B1);
