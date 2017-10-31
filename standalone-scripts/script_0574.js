// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then str(not(input_bool('B1'))) else input_string('S1'))

var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn10 = function (s7, b1) {
    var b3 = b1;
    var e2 = "b1";
    var e6 = "'' + (!(b3))";
    var x9;
    if (eval(e2)) {
        x9 = eval(e6);
    } else {
        x9 = eval("s7");
    }
    return x9;
}
fn10(input_S1, input_B1);
