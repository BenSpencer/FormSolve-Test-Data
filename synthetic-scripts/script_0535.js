// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_string('S1') <= input_string('S2')) then (-27 >= int(not(input_bool('B3')))) else input_bool('B2'))

var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);

var fn14 = function (b11, s1, b6, s2) {
    var b3 = false;
    if (s1 <= s2) {
        b3 = true;
    }
    var b7 = !(b6);
    var x8 = ~~ (b7);
    var b9 = false;
    if (-27 >= x8) {
        b9 = true;
    }
    var x13;
    if (eval("b3")) {
        x13 = b9;
    } else {
        var e12 = "b11";
        x13 = eval(e12);
    }
    return x13;
}
fn14(input_B2, input_S1, input_B3, input_S2);
