// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then bool(str((int(bool(input_int('I2'))) - len(input_string('S1'))))) else bool(str(input_int('I1'))))

var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);

var fn16 = function (s5, x2, b1, x12) {
    var x15;
    if (b1) {
        var b3 = Boolean(x2);
        var l7 = (eval("s5")).length;
        x8 = ~~ (b3);
        x9 = l7;
        var b11 = !! (String(x8 - x9));
        x15 = b11;
    } else {
        var s13 = '' + (x12);
        var b14 = Boolean(s13);
        x15 = b14;
    }
    return x15;
}
fn16(input_S1, input_I2, input_B3, input_I1);
