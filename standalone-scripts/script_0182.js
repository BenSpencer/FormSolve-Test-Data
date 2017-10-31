// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(regex-replace((if bool(int(bool(input_string('S3')))) then str(input_bool('B1')) else str(input_bool('B3'))), /(n|[-_ ]ZW)*/, "wm")) then int(input_string('S2')) else (if (str((bool(input_string('S2')) || not(bool(str(int(not(input_bool('B3')))))))) > str(bool(int(input_string('S1'))))) then input_int('I1') else input_int('I1')))

var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);

function fn41(x35, b19, b6, s1, s15, s28) {
    var s17 = s15;
    var b8 = b19;
    var e4 = "var b2 = (s1) ? true : false;var x3 = +(b2);x3";
    var s12 = (((eval(e4)) ? true : false ? String(b6) : (eval("b8")).toString())).replace(/(n|[-_ ]ZW)*/, "wm");
    var x16 = Number(s15);
    var x36 = x35;
    var e37 = "x36";
    var e38 = "eval(e37)";
    var x39;
    if (eval("var b20; if (b19) { b20 = false; } else { b20 = true; }var x21 = (b20) ? 1 : 0;var s22 = '' + (x21);var b23 = (s22) ? true : false;var b24 = !(b23);var b25; if (Boolean(s17) || b24) { b25 = true; } else { b25 = false; }var x29 = parseInt(s28, 10);var s31 = String((x29) ? true : false);var b32 = String(b25) > s31;b32")) {
        x39 = x35;
    } else {
        x39 = eval(e38);
    }
    var x40;
    if (Boolean(s12)) {
        x40 = x16;
    } else {
        x40 = x39;
    }
    return x40;
}
fn41(input_I1, input_B3, input_B1, input_S3, input_S2, input_S1);
