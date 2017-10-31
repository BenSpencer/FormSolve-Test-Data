// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then (if regex-test(input_string('S3'), /^zqm(L|[0-9])+$/) then input_int('I2') else (if (("pK" == input_string('S2')) != input_bool('B3')) then (input_int('I1') / input_int('I2')) else input_int('I1'))) else int(bool(int(str(bool(input_string('S3')))))))

var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");

var fn26 = function (b1, b8, x11, x12, s5, s19) {
    var s2 = s19;
    var x4 = x12;
    var x15 = x11;
    var b6 = false;
    if ("pK" == s5) {
        b6 = true;
    }
    var b9;
    if (b6) {
        if (b8) {
            b9 = false;
        } else {
            b9 = true;
        }
    } else {
        if (b8) {
            b9 = true;
        } else {
            b9 = false;
        }
    }
    x13 = x11 / x12;
    var x16;
    if (b9) {
        x16 = x13;
    } else {
        x16 = x15;
    }
    var x18;
    if ((s2).match(/^zqm(L|[0-9])+$/) !== null) {
        x18 = x4;
    } else {
        x18 = eval("x16");
    }
    var b20 = (s19) ? true : false;
    var s21 = '' + (b20);
    var b23 = (parseInt(s21, 10)) ? true : false;
    var x24 = ~~ (b23);
    return (b1 ? x18 : x24);
}
fn26(input_B2, input_B3, input_I1, input_I2, input_S2, input_S3);
