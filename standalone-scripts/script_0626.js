// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if input_bool('B2') then input_bool('B3') else input_bool('B1')) then ((input_int('I1') < ((if regex-test(str(int(str(bool(input_string('S3'))))), /^Rb\D(s|k[0-9]c)*$/) then input_int('I1') else input_int('I2')) - input_int('I3'))) === regex-test(str(int(not(not((input_bool('B1') || (len(input_string('S1')) in [45, 199, 0, 88, 0, 11, 1, 2, 6])))))), /^(vj|[0-9])+$/)) else bool(int(str(bool(input_int('I3'))))))

var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");

function fn47(s7, x19, x16, x17, b1, b24, b2, s25) {
    var b3 = b24;
    var x41 = x19;
    var x4;
    if (b1) {
        x4 = b2;
    } else {
        x4 = b3;
    }
    var b45 = Boolean(Number(String( !! (x41))));
    var x46;
    if (eval("x4")) {
        var x6 = x16;
        var x18;
        if ((eval("(eval(\"var b8 = !!(s7);var e9 = \\\"b8\\\";var s10 = String(eval(e9));Number(s10)\")).toString()")).match(/^Rb\D(s|k[0-9]c)*$/) !== null) {
            x18 = x16;
        } else {
            x18 = x17;
        }
        x20 = x18 - x19;
        var b22 = x6;
        var b23 = x20;
        var b31;
        if (b24) {
            b31 = true;
        } else {
            var l26 = (s25).length;
            var opts28 = [45, 199, 0, 88, 0, 11, 1, 2, 6];
            b31 = eval("opts28.indexOf(l26) > -1");
        }
        var b33;
        if (b31) {
            b33 = false;
        } else {
            b33 = true;
        }
        var b35 = !(eval("b33"));
        var x36 = +(b35);
        var s37 = (x36).toString();
        var b39 = false;
        if (b22 < b23 === (s37).match(/^(vj|[0-9])+$/) !== null) {
            b39 = true;
        }
        x46 = b39;
    } else {
        x46 = b45;
    }
    return x46;
}
fn47(input_S3, input_I3, input_I1, input_I2, input_B2, input_B1, input_B3, input_S1);
