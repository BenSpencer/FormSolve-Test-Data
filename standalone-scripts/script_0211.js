// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then (int(bool(str((input_int('I3') <= int(regex-test(input_string('S3'), /^(Y|YR[0-9]f\S)?V$/)))))) * len(str(not((input_int('I1') <= (input_int('I2') / (if not((int(str((not(bool(input_int('I2'))) === input_bool('B1')))) < int(input_bool('B1')))) then input_int('I3') else input_int('I2')))))))) else input_int('I1'))

var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");

var fn41 = function (s3, x2, x11, b16, x12, b1) {
    var x39 = x11;
    var x26 = x2;
    var b6 = x2 <= +((s3).match(/^(Y|YR[0-9]f\S)?V$/) !== null);
    var b9 = ('' + (b6)) ? true : false;
    var x10 = +(b9);
    var x13 = x12;
    var x27 = x13;
    var b21 = b16;
    var s19 = ((!((x13) ? true : false) === b16)).toString();
    var x20 = Number(s19);
    var b23 = x20;
    var b24 = +(b21);
    var b25 = !(b23 < b24);
    var x28;
    if (b25) {
        x28 = x26;
    } else {
        x28 = x27;
    }
    x29 = x12;
    x30 = x28;
    var b31 = x11 <= x29 / x30;
    var s35 = '' + (eval("!(b31)"));
    var l36 = (s35).length;
    var x40;
    if (b1) {
        x40 = (x10 * l36);
    } else {
        x40 = x39;
    }
    return x40;
}
fn41(input_S3, input_I3, input_I1, input_B1, input_I2, input_B3);
