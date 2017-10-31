// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I2') != int(bool(input_int('I3')))) then str((if (input_string('S1') != str(((if bool((if input_bool('B1') then len(input_string('S2')) else len(input_string('S2')))) then input_int('I2') else input_int('I1')) - input_int('I3')))) then input_int('I1') else int(str(not(bool(input_int('I2'))))))) else input_string('S2'))

var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");

function fn38(x2, x17, s7, s12, x1, b8) {
    var s36 = s12;
    var x16 = x1;
    var x20 = x2;
    var b5;
    if (x1 != ~~(Boolean(x2))) {
        b5 = true;
    } else {
        b5 = false;
    }
    var e34 = "var x26 = x17; var x27 = x16; var b24; if (s7 != String((eval(\"var s9 = s12; var e11 = \\\"(s9).length\\\";var x14; if (b8) { x14 = eval(e11); } else { x14 = (s12).length; }var b15 = Boolean(x14);var x18; if (b15) { x18 = x16; } else {  x18 = x17; }x18\") - x20))) { b24 = true; } else { b24 = false; }var x33; if (b24) {  x33 = x26; } else { var b28 = (x27) ? true : false;var e29 = \"b28\";var b30 = !(eval(e29));var s31 = String(b30); x33 = Number(s31); }x33";
    var x37;
    if (b5) {
        x37 = '' + (eval(e34));
    } else {
        x37 = s36;
    }
    return x37;
}
fn38(input_I3, input_I1, input_S1, input_S2, input_I2, input_B1);
