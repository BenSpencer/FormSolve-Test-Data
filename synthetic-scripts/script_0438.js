// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int((input_int('I3') in [59, 0, 6, 1, 1]))) then (bool(str((input_string('S3') > str(not((if (if bool(str(bool(str((input_int('I1') <= input_int('I2')))))) then input_bool('B2') else true) then not(input_bool('B3')) else input_bool('B3'))))))) || (int(input_string('S2')) == len(str(bool(str(input_bool('B2'))))))) else false)

var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);

var fn41 = function (x9, s29, b16, s7, x1, b18, x8) {
    var opts3 = [59, 0, 6, 1, 1];
    var b2 = opts3.indexOf(x1) > -1;
    var x5 = (b2) | 0;
    var b31 = b16;
    var s24 = '' + (eval("var b20 = b18; var b10 = false; if (x8 <= x9) { b10 = true; }var s12 = '' + (b10);var b13 = !!(s12);var s14 = (b13).toString();var x21; if ((!!(s14) ? b16 : true)) { var b19; if (b18) { b19 = false; } else { b19 = true; } x21 = b19; } else {  x21 = b20; }!(x21)"));
    var b25 = s7 > s24;
    var s27 = (b25).toString();
    var b28 = (s27) ? true : false;
    var s32 = String(b31);
    var b33 = (s32) ? true : false;
    var l35 = ((b33).toString()).length;
    var b36 = parseInt(s29, 10) == l35;
    return ( !! (x5) ? (b28 || b36) : false);
}
fn41(input_I2, input_S2, input_B2, input_S3, input_I3, input_B3, input_I1);
