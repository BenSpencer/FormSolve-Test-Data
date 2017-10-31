// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I3')) then bool(input_int('I3')) else input_bool('B1'))

var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn11 = function (b9, x1) {
    var x4 = x1;
    var x10;
    if (eval("var b2 = (x1) ? true : false;b2")) {
        var e5 = "x4";
        var b8 = Boolean(eval("eval(\"eval(e5)\")"));
        x10 = b8;
    } else {
        x10 = b9;
    }
    return x10;
}
fn11(input_B1, input_I3);
