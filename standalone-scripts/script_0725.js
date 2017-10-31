// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(str(input_int('I3')))) then input_string('S1') else str(input_bool('B3')))

var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);

(function (s6, b7, x1) {
    var e3 = "'' + (x1)";
    var x4 = parseInt(eval(e3), 10);
    var x9;
    if (Boolean(x4)) {
        x9 = s6;
    } else {
        x9 = String(b7);
    }
    return x9;
})(input_S1, input_B3, input_I3);
