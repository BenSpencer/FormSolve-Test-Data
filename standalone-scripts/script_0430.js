// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((if not(input_bool('B1')) then (int((str(int((int(input_string('S1')) != int(str(bool((if bool(input_int('I2')) then len(str(len(input_string('S1')))) else int(bool(str(input_bool('B1'))))))))))) <= str(input_int('I3')))) < int(input_string('S1'))) else input_bool('B3'))) then (len(str((str(((str(input_bool('B2')) > str(input_bool('B1'))) && input_bool('B3'))) > str((false && input_bool('B2')))))) - input_int('I1')) else 0)

var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);

function fn66(x26, b40, b1, b37, x5, s3, x60) {
    var b42 = b1;
    var b46 = b37;
    var b13 = b1;
    var b2;
    if (b1) {
        b2 = false;
    } else {
        b2 = true;
    }
    var x38;
    if (b2) {
        x38 = eval("var s31 = s3; var s8 = s3; var e18 = \"var b6 = (x5) ? true : false;var e7 = \\\"b6\\\";var l12 = (eval(\\\"var s10 = String((s8).length);s10\\\")).length;var s14 = (b13).toString();var b15 = Boolean(s14);(eval(e7) ? l12 : (b15) | 0)\";var s20 = String(Boolean(eval(e18)));var x21 = parseInt(s20, 10);var b22 = Number(s3); var b23 = x21;var b28; if (String((b22 != b23) ? 1 : 0) <= (x26).toString()) { b28 = true; } else { b28 = false; }var e32 = \"s31\";var b34 = false; if (+(b28) < parseInt(eval(e32), 10)) { b34 = true; }b34");
    } else {
        x38 = b37;
    }
    var b39 = !(x38);
    var e59 = "var b50 = b40; var b44; if ('' + (b40) > '' + (b42)) { b44 = true; } else { b44 = false; }var b47 = false; if (b44 && b46) { b47 = true; }var s49 = '' + (b47);var b54; if (s49 > ((false && b50)).toString()) { b54 = true; } else { b54 = false; }var s57 = (eval(\"b54\")).toString();var l58 = (s57).length;l58";
    var e61 = "x60";
    var e62 = "eval(e61)";
    x63 = eval(e59);
    x64 = eval(e62);
    var x65;
    if (b39) {
        x65 = x63 - x64;
    } else {
        x65 = 0;
    }
    return x65;
}
fn66(input_I3, input_B2, input_B1, input_B3, input_I2, input_S1, input_I1);
