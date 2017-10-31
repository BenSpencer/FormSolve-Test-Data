// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if false then input_bool('B3') else (int((bool(int(input_string('S2'))) != bool(input_string('S1')))) !== input_int('I3')))

var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");

function fn19(s2, b1, x15, s9) {
    var x18;
    if (false) {
        x18 = b1;
    } else {
        var e3 = "s2";
        var x4 = parseInt(eval(e3), 10);
        var b12;
        if (eval("eval(\"Boolean(eval(\\\"x4\\\"))\")")) {
            if (eval("(s9) ? true : false")) {
                b12 = false;
            } else {
                b12 = true;
            }
        } else {
            if (eval("(s9) ? true : false")) {
                b12 = true;
            } else {
                b12 = false;
            }
        }
        var x14 = ~~ (b12);
        var b16 = x14;
        var b17 = x15;
        x18 = b16 !== b17;
    }
    return x18;
}
fn19(input_S2, input_B3, input_I3, input_S1);
