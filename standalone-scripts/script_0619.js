// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I1')) then bool(input_string('S1')) else true)

var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");

var fn6 = function (s3, x1) {
    var b2 = (x1) ? true : false;
    var x5;
    if (b2) {
        x5 = !! (s3);
    } else {
        x5 = true;
    }
    return x5;
}
fn6(input_S1, input_I1);
