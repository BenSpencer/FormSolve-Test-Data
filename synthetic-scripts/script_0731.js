// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I3')) then len((if (not(input_bool('B3')) == (input_bool('B2') && input_bool('B1'))) then input_string('S2') else str(input_int('I1')))) else input_int('I3'))

var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);

var fn21 = function (b8, s14, b9, b3, x1, x15) {
    var x19 = x1;
    var b2 = Boolean(x1);
    var x20;
    if (b2) {
        var b10;
        if (b8) {
            b10 = b9;
        } else {
            b10 = false;
        }
        var b12;
        if (eval("eval(\"var b4 = !(b3);eval(\\\"b4\\\")\")")) {
            if (b10) {
                b12 = true;
            } else {
                b12 = false;
            }
        } else {
            if (b10) {
                b12 = false;
            } else {
                b12 = true;
            }
        }
        var l18 = ((b12 ? s14 : String(x15))).length;
        x20 = l18;
    } else {
        x20 = x19;
    }
    return x20;
}
fn21(input_B2, input_S2, input_B1, input_B3, input_I3, input_I1);
