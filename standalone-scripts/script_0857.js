// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if (int(bool((if (int(str(input_int('I2'))) < (input_int('I2') + input_int('I2'))) then input_int('I1') else (int(bool(str(not(input_bool('B3'))))) - int((if regex-test(input_string('S3'), /^(hOkOv[0-9]?|HW)$/) then bool(input_int('I1')) else regex-test(input_string('S3'), /^B([A-Z]|JEmp)+$/))))))) > input_int('I3')) then bool(str(int(input_string('S2')))) else bool(input_int('I1'))) then input_bool('B1') else bool(int(input_bool('B2'))))

var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);

function fn46(b12, x1, x11, s39, s17, x36) {
    var x43 = x11;
    var x20 = x11;
    var x4 = x1;
    var s2 = '' + (x1);
    var x6 = x4;
    var e5 = "x4";
    var b9 = false;
    if (Number(s2) < (eval(e5) + x6)) {
        b9 = true;
    }
    var b13 = !(b12);
    var s14 = (b13).toString();
    var s23 = s17;
    var e19 = "(s17).match(/^(hOkOv[0-9]?|HW)$/) !== null";
    var x29;
    if (eval(e19)) {
        var b22 = (eval("x20")) ? true : false;
        x29 = b22;
    } else {
        x29 = eval("var e27 = \"eval(\\\"var e25 = \\\\\\\"var re24 = new RegExp(\\\\\\\\\\\\\\\"^B([A-Z]|JEmp)+$\\\\\\\\\\\\\\\");re24.test(s23)\\\\\\\";eval(e25)\\\")\";eval(e27)");
    }
    x31 = (Boolean(s14)) ? 1 : 0 - Number(x29);
    var x35 = (((b9 ? x11 : x31)) ? true : false) | 0;
    var b42 = Boolean(String(parseInt(s39, 10)));
    return ((x35 > x36) ? b42 : (x43) ? true : false);
}
function fn58(s51, x49, b54, s50, b47, x48, x52, b53) {
    var x57;
    if (fn46(b47, x48, x49, s50, s51, x52)) {
        x57 = b53;
    } else {
        var x55 = +(b54);
        var b56 = !! (x55);
        x57 = b56;
    }
    return x57;
}
fn58(input_S3, input_I1, input_B2, input_S2, input_B3, input_I2, input_I3, input_B1);
