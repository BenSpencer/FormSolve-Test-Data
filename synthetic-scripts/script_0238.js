// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(input_bool('B2')) then str(len(str(input_bool('B1')))) else input_string('S2'))

var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");

var fn9 = function (b3, s7, b1) {
    var b2;
    if (b1) {
        b2 = false;
    } else {
        b2 = true;
    }
    var s4 = '' + (b3);
    var l5 = (s4).length;
    return (b2 ? (l5).toString() : s7);
}
fn9(input_B1, input_S2, input_B2);
