// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if input_bool('B3') then (int(input_bool('B1')) <= 68) else input_bool('B3')) then input_string('S3') else "csCKp")

var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);

var fn11 = function (b1, b2, s8) {
    var b6 = b1;
    var x3 = Number(b2);
    var x7;
    if (b1) {
        x7 = (x3 <= 68);
    } else {
        x7 = b6;
    }
    var e9 = "s8";
    var x10;
    if (x7) {
        x10 = eval(e9);
    } else {
        x10 = "csCKp";
    }
    return x10;
}
fn11(input_B3, input_B1, input_S3);
