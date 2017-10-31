// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I2') <= int(bool((int(input_string('S1')) + int(str(input_int('I3'))))))) then len(input_string('S2')) else int(input_string('S1')))

var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);

var fn19 = function (s16, s14, x1, x4) {
    var s2 = s16;
    var x3 = parseInt(s2, 10);
    x8 = x3 + Number(eval("(x4).toString()"));
    var b10 = !! (x8);
    var x11 = +(b10);
    var b12 = x1;
    var b13 = x11;
    return (b12 <= b13 ? (s14).length : parseInt(s16, 10));
}
fn19(input_S1, input_S2, input_I2, input_I3);
