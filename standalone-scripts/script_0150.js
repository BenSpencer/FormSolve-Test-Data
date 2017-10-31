// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then bool(int(bool(input_int('I1')))) else not(not(bool(input_int('I3')))))

var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);

var fn14 = function (b1, x3, x8) {
    var e2 = "b1";
    var x13;
    if (eval(e2)) {
        x13 = eval("var x5 = +((x3) ? true : false);var b6 = !!(x5);b6");
    } else {
        var b9 = Boolean(x8);
        var b10;
        if (b9) {
            b10 = false;
        } else {
            b10 = true;
        }
        var b12 = !(eval("b10"));
        x13 = b12;
    }
    return x13;
}
fn14(input_B1, input_I1, input_I3);
