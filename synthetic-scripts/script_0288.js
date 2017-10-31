// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if not(bool(input_int('I3'))) then input_bool('B2') else bool(len((if bool(str(input_bool('B1'))) then str(input_bool('B3')) else str(input_int('I3')))))) then (int(not(input_bool('B3'))) != len(input_string('S1'))) else input_bool('B2'))

var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");

function fn31(b5, s24, b28, x1, b18) {
    var b8 = b18;
    var b4 = b28;
    var x10 = x1;
    var b3;
    if ((x1) ? true : false) {
        b3 = false;
    } else {
        b3 = true;
    }
    var x16;
    if (b3) {
        x16 = b4;
    } else {
        var e11 = "x10";
        var s12 = (eval(e11)).toString();
        var x13;
        if ((String(b5)) ? true : false) {
            x13 = '' + (b8);
        } else {
            x13 = s12;
        }
        var b15 = Boolean((x13).length);
        x16 = b15;
    }
    var l25 = (s24).length;
    var b26 = (eval("eval(\"var b19; if (b18) { b19 = false; } else { b19 = true; }eval(\\\"b19\\\")\")")) ? 1 : 0;
    var b27 = l25;
    var e29 = "b28";
    return (eval("x16") ? b26 != b27 : eval(e29));
}
fn31(input_B1, input_S1, input_B2, input_I3, input_B3);
