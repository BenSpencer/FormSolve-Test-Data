// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I1') !== input_int('I1')) then int(str(input_int('I3'))) else (int(input_bool('B3')) + input_int('I2')))

var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);

var fn17 = function (x5, x10, b8, x1) {
    var x2 = x1;
    var b3 = x1 !== x2;
    var s6 = (x5).toString();
    var x9 = Number(b8);
    var e11 = "x10";
    var e12 = "eval(e11)";
    var x16;
    if (b3) {
        x16 = parseInt(s6, 10);
    } else {
        x16 = eval("(x9 + eval(e12))");
    }
    return x16;
}
fn17(input_I3, input_I2, input_B3, input_I1);
