// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then (if input_bool('B1') then int((if regex-test(str(bool(int(str(bool(str(input_int('I1'))))))), /^[-_ ]+(t|\D)qkbcJO_OToCvB\dfGm$/) then not(not(bool(len(str((input_string('S2') <= str(input_int('I3')))))))) else input_bool('B3'))) else len(str(input_int('I2')))) else len(input_string('S3')))

var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");

(function (x27, s32, b1, x3, s13, x14, b23) {
    var b2 = b1;
    var x35;
    if (b1) {
        x35 = eval("var e26 = \"var e11 = \\\"var b6 = !!(eval(\\\\\\\"(x3).toString()\\\\\\\"));var x8 = Number('' + (b6));var s10 = (Boolean(x8)).toString();s10\\\";var x24; if ((eval(e11)).match(/^[-_ ]+(t|\\\\D)qkbcJO_OToCvB\\\\dfGm$/) !== null) { var b16 = s13 <= '' + (x14);var s18 = '' + (b16);var b20 = !!((s18).length);var b21 = !(b20); x24 = !(b21); } else {  x24 = b23; }+(x24)\";var x30; if (b2) { x30 = eval(e26); } else { var s28 = (x27).toString();var l29 = (s28).length; x30 = l29; }x30");
    } else {
        var l33 = (s32).length;
        x35 = eval("l33");
    }
    return x35;
})(input_I2, input_S3, input_B1, input_I1, input_S2, input_I3, input_B3);
