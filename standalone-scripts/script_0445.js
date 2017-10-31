// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (not(bool(input_int('I2'))) != input_bool('B3')) then input_string('S2') else str(bool(input_string('S2'))))

var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");

function fn14(s7, x1, b4) {
    var s8 = s7;
    var b5;
    if (!((x1) ? true : false) != b4) {
        b5 = true;
    } else {
        b5 = false;
    }
    return (b5 ? s7 : eval("var b10 = Boolean(eval(\"s8\"));'' + (b10)"));
}
fn14(input_S2, input_I2, input_B3);
