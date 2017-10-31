// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if (input_int('I3') !== 0) then bool(input_int('I2')) else input_bool('B2')) then input_bool('B3') else (not(regex-test(str(int(bool(str(not(input_bool('B3')))))), /^MpG([a-z]+| I)$/)) || (if (int(bool(str((if bool(input_string('S3')) then not(bool(str(input_int('I2')))) else input_bool('B1'))))) in [7, 10, 186, 0, 1]) then regex-test(input_string('S1'), /^Pxr_CeUu[-_ ]*k(YmzW|\t)$/) else ((if bool(str(int(input_string('S2')))) then str(bool(input_int('I3'))) else "") === input_string('S3')))))

var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);

function fn54(s36, b6, x21, s19, s38, b26, x1, b10) {
    var x4 = x21;
    var b9 = b10;
    var x42 = x1;
    var b2 = x1;
    var b3 = 0;
    var b5 = Boolean(x4);
    var e7 = "b6";
    var x8;
    if (b2 !== b3) {
        x8 = b5;
    } else {
        x8 = eval(e7);
    }
    var b11;
    if (b10) {
        b11 = false;
    } else {
        b11 = true;
    }
    var e15 = "(!!('' + (b11))) ? 1 : 0";
    var re17 = /^MpG([a-z]+| I)$/;
    var b18 = !(re17.test((eval(e15)).toString()));
    var s47 = s19;
    var e32 = "~~((eval(\"var b25; if (eval(\\\"var b23 = Boolean('' + (x21));b23\\\")) { b25 = false; } else { b25 = true; }String((Boolean(s19) ? b25 : b26))\")) ? true : false)";
    var opts34 = [7, 10, 186, 0, 1];
    var b33 = false;
    for (var idx35 = 0; idx35 < opts34.length; idx35++) {
        if (opts34[idx35] == eval(e32)) {
            b33 = true;
        }
    }
    var b48;
    if (eval("var x39 = parseInt(s38, 10);var x45; if (!!(String(x39))) { var s44 = (Boolean(x42)).toString(); x45 = s44; } else {  x45 = \"\"; }x45") === s47) {
        b48 = true;
    } else {
        b48 = false;
    }
    var x50;
    if (b33) {
        var re37 = /^Pxr_CeUu[-_ ]*k(YmzW|\t)$/;
        x50 = re37.test(s36);
    } else {
        x50 = b48;
    }
    var b51;
    if (b18) {
        b51 = true;
    } else {
        b51 = x50;
    }
    var x53;
    if (x8) {
        x53 = b9;
    } else {
        x53 = b51;
    }
    return x53;
}
fn54(input_S1, input_B2, input_I2, input_S3, input_S2, input_B1, input_I3, input_B3);
