// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((input_int('I1') % input_int('I2')) === input_int('I3')) then 0 else ((len(input_string('S1')) * input_int('I3')) % input_int('I3')))

var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");

var fn23 = function (x2, x1, x13, s10) {
    var x6 = x13;
    x3 = x1 % x2;
    var e5 = "x3";
    var e7 = "x6";
    var b8;
    if (eval(e5) === eval(e7)) {
        b8 = true;
    } else {
        b8 = false;
    }
    var x19 = x13;
    var e12 = "(s10).length";
    var e14 = "x13";
    x16 = eval(e12);
    x17 = eval("eval(e14)");
    var e18 = "x16 * x17";
    return (b8 ? 0 : (eval(e18) % x19));
}
fn23(input_I2, input_I1, input_I3, input_S1);
