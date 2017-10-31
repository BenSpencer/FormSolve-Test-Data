// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I1')) then input_int('I2') else int(not(bool(len(str((len(str((regex-test(str(input_bool('B1')), /^(gY|a)[-_ ]+$/) || bool(input_int('I2'))))) * input_int('I3'))))))))

var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);

function fn27(x1, x17, b7, x11) {
    var x6 = x11;
    var e25 = "var e10 = \"var s8 = '' + (b7);var re9 = /^(gY|a)[-_ ]+$/;re9.test(s8)\";x18 = (((eval(e10) || !!(x11))).toString()).length * x17;var l21 = (String(x18)).length;var b23 = !(Boolean(l21));var x24 = +(b23);x24";
    var x26;
    if (eval("(eval(\"eval(\\\"x1\\\")\")) ? true : false")) {
        x26 = x6;
    } else {
        x26 = eval(e25);
    }
    return x26;
}
fn27(input_I1, input_I3, input_B1, input_I2);
