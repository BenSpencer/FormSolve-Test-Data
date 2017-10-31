// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not(not((input_int('I1') in [18, -50, 0, 1, 1, 1, 0, 1, 0])))) then ((int(str(input_bool('B3'))) !== len(input_string('S2'))) !== input_bool('B1')) else input_bool('B2'))

var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);

function fn23(b11, b18, b21, x1, s14) {
    var e9 = "eval(\"var b6 = !(eval(\\\"var opts3 = [18, -50, 0, 1, 1, 1, 0, 1, 0];opts3.indexOf(x1) > -1\\\"));!(b6)\")";
    var b10;
    if (eval(e9)) {
        b10 = false;
    } else {
        b10 = true;
    }
    var s12 = '' + (b11);
    var x13 = parseInt(s12, 10);
    var x22;
    if (b10) {
        x22 = ((x13 !== (s14).length) !== b18);
    } else {
        x22 = b21;
    }
    return x22;
}
fn23(input_B3, input_B1, input_B2, input_I1, input_S2);
