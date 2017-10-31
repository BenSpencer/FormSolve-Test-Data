// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(int(str(input_bool('B1'))))) then input_bool('B3') else input_bool('B1'))

var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);

var fn9 = function (b6, b1) {
    var b7 = b1;
    var s2 = (b1).toString();
    var x3 = parseInt(s2, 10);
    var s4 = (x3).toString();
    var x8;
    if (Boolean(s4)) {
        x8 = b6;
    } else {
        x8 = b7;
    }
    return x8;
}
fn9(input_B3, input_B1);
