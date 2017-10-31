// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not(input_bool('B1'))) then input_string('S3') else input_string('S2'))

var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");

var fn9 = function (b1, s4, s6) {
    var x8;
    if (!(!(b1))) {
        x8 = eval("s4");
    } else {
        x8 = eval("s6");
    }
    return x8;
}
fn9(input_B1, input_S3, input_S2);
