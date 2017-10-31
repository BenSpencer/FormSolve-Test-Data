// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then int(input_string('S1')) else (len(input_string('S2')) - int(((if input_bool('B3') then (int((input_int('I2') == int(not(input_bool('B3'))))) in [41, 67, -89, 17, 45, 0, 5]) else bool(str(bool(input_string('S1'))))) != input_bool('B2')))))

var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);

var fn33 = function (b25, s18, s4, x7, b1) {
    var b6 = b1;
    var s2 = s18;
    var x32;
    if (b1) {
        x32 = parseInt(s2, 10);
    } else {
        var l5 = (s4).length;
        x30 = l5;
        x31 = ~~ (eval("var b8 = b6; var x24; if (b6) { var b9 = !(b8);var x10 = +(b9);var e11 = \"x10\";var b12 = x7; var b13 = eval(e11);var opts16 = [41, 67, -89, 17, 45, 0, 5]; x24 = opts16.indexOf(Number(b12 == b13)) > -1; } else { var e19 = \"s18\";var s22 = String(Boolean(eval(\"eval(e19)\")));var b23 = Boolean(s22); x24 = b23; }var b26 = false; if (x24 != b25) { b26 = true; }b26"));
        x32 = x30 - x31;
    }
    return x32;
}
fn33(input_B2, input_S1, input_S2, input_I2, input_B3);
