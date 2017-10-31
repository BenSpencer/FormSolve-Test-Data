// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then input_bool('B1') else (if input_bool('B3') then bool(int(input_string('S2'))) else input_bool('B1')))

var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");

var fn14 = function (b4, b1, s5) {
    var b11 = b1;
    var b3 = b1;
    var e2 = "b1";
    var x13;
    if (eval(e2)) {
        x13 = b3;
    } else {
        var e10 = "var b9 = (eval(\"eval(\\\"parseInt(s5, 10)\\\")\")) ? true : false;b9";
        var x12;
        if (b4) {
            x12 = eval(e10);
        } else {
            x12 = b11;
        }
        x13 = x12;
    }
    return x13;
}
fn14(input_B3, input_B1, input_S2);
