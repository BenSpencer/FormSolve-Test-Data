// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (false && bool(len(str(input_int('I3'))))) then input_bool('B1') else (str(input_int('I2')) === input_string('S2')))

var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);

var fn15 = function (b8, x9, s11, x1) {
    var b6;
    if (false) {
        var s2 = '' + (x1);
        var e4 = "(s2).length";
        b6 = !! (eval(e4));
    } else {
        b6 = false;
    }
    var s10 = String(x9);
    var b12;
    if (s10 === s11) {
        b12 = true;
    } else {
        b12 = false;
    }
    var x14;
    if (b6) {
        x14 = b8;
    } else {
        x14 = b12;
    }
    return x14;
}
fn15(input_B1, input_I2, input_S2, input_I3);
