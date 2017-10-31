// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then bool(int(str(input_int('I2')))) else (if regex-test(str(len(str(input_bool('B1')))), /^([-_ ]+e|s)$/) then not(((len(str(bool(str(bool(input_string('S1')))))) % input_int('I1')) > int(input_string('S2')))) else input_bool('B3')))

var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn31 = function (b28, x18, s22, x2, s12, b1) {
    var b6 = b1;
    var e7 = "b6";
    var l9 = (String(eval(e7))).length;
    var re11 = /^([-_ ]+e|s)$/;
    var x29;
    if (re11.test((l9).toString())) {
        var e24 = "Number(s22)";
        var b27 = !((eval("var s14 = String(!!(s12));var s16 = (!!(s14)).toString();((s16).length % x18)") > eval(e24)));
        x29 = b27;
    } else {
        x29 = b28;
    }
    var x30;
    if (b1) {
        var s3 = (x2).toString();
        x30 = (parseInt(s3, 10)) ? true : false;
    } else {
        x30 = x29;
    }
    return x30;
}
fn31(input_B3, input_I1, input_S2, input_I2, input_S1, input_B1);
