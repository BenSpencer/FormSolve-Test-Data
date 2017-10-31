// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then not(not(not(input_bool('B1')))) else (input_bool('B2') == input_bool('B3')))

var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);

function fn13(b7, b1, b8) {
    var b2 = b1;
    var e4 = "!(b2)";
    var b6 = !(!(eval(e4)));
    var e11 = "var b9; if (b7 == b8) { b9 = true; } else { b9 = false; }b9";
    var x12;
    if (b1) {
        x12 = b6;
    } else {
        x12 = eval(e11);
    }
    return x12;
}
fn13(input_B2, input_B1, input_B3);
