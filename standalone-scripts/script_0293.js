// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then not(bool((if input_bool('B1') then input_string('S3') else input_string('S2')))) else bool(int(not(input_bool('B2')))))

var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");

var fn15 = function (b2, s4, b1, b9, s5) {
    var e3 = "b2";
    var b8 = !(((eval(e3) ? s4 : s5)) ? true : false);
    var e11 = "var b10 = !(b9);b10";
    var x12 = ~~ (eval(e11));
    var x14;
    if (b1) {
        x14 = b8;
    } else {
        x14 = Boolean(x12);
    }
    return x14;
}
fn15(input_B1, input_S3, input_B3, input_B2, input_S2);
