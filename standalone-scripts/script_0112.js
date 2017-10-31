// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not(input_bool('B1'))) then str(input_bool('B1')) else input_string('S2'))

var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);

(function (s7, b1) {
    var b5 = b1;
    var b4;
    if (eval("!(b1)")) {
        b4 = false;
    } else {
        b4 = true;
    }
    var x8;
    if (b4) {
        x8 = '' + (b5);
    } else {
        x8 = s7;
    }
    return x8;
})(input_S2, input_B1);
