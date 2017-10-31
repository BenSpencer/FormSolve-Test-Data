// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((if not(input_bool('B3')) then input_int('I2') else input_int('I3')) === len(str(not(((((if (input_int('I2') < int(str(int(str(input_int('I1')))))) then "StlTu" else input_string('S2')) <= str(input_bool('B3'))) != bool(input_int('I3'))) === (input_int('I1') in [4, 50, 171, 175, 29, -6])))))) then input_string('S3') else str(bool(int(regex-test(str(input_int('I2')), /^[A-Z]\S*lEn(h|h)I_g$/)))))

var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);

var fn47 = function (s39, s16, x3, b1, x27, x23) {
    var x40 = x3;
    var x6 = x3;
    var b19 = b1;
    var x4 = x23;
    var b2;
    if (b1) {
        b2 = false;
    } else {
        b2 = true;
    }
    var x5;
    if (b2) {
        x5 = x3;
    } else {
        x5 = x4;
    }
    var x7 = x27;
    var e18 = "var x13 = parseInt(eval(\"String(eval(\\\"Number('' + (x7))\\\"))\"), 10);var b14 = false; if (x6 < x13) { b14 = true; }var x17; if (b14) {  x17 = \"StlTu\"; } else {  x17 = s16; }x17";
    var b21 = false;
    if (eval(e18) <= String(b19)) {
        b21 = true;
    }
    var b24 = Boolean(x23);
    var b25;
    if (b21) {
        b25 = !b24;
    } else {
        b25 = b24;
    }
    var b34;
    if ((b25 === eval("var opts29 = [4, 50, 171, 175, 29, -6];opts29.indexOf(x27) > -1"))) {
        b34 = false;
    } else {
        b34 = true;
    }
    var s35 = '' + (b34);
    var b37 = false;
    if (x5 === (s35).length) {
        b37 = true;
    }
    var x46;
    if (b37) {
        x46 = s39;
    } else {
        var s41 = (x40).toString();
        var re42 = /^[A-Z]\S*lEn(h|h)I_g$/;
        x46 = '' + ( !! ((re42.test(s41)) ? 1 : 0));
    }
    return x46;
}
fn47(input_S3, input_S2, input_I2, input_B3, input_I1, input_I3);
