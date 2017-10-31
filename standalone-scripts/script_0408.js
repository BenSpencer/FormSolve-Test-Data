// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then len(str(input_bool('B1'))) else input_int('I2'))

var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);

function fn9(b1, x7) {
    var b3 = b1;
    var e2 = "b1";
    var x8;
    if (eval(e2)) {
        x8 = eval("var s4 = (b3).toString();var l5 = (s4).length;l5");
    } else {
        x8 = x7;
    }
    return x8;
}
fn9(input_B1, input_I2);
