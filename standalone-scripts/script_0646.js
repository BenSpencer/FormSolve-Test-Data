// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(len(input_string('S1'))) then (if bool(input_int('I3')) then input_bool('B2') else bool((int((input_bool('B3') && input_bool('B1'))) * len(str(input_bool('B3')))))) else (len(str(input_int('I3'))) === (int(input_bool('B1')) + int(not(bool(input_int('I1')))))))

var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");

function fn37(x22, b7, x27, s1, b14, b25) {
    var b9 = b25;
    var x4 = x22;
    var l2 = (s1).length;
    var e5 = "x4";
    var b6 = Boolean(eval(e5));
    var x21;
    if (b6) {
        x21 = b7;
    } else {
        var b8 = b14;
        var b10;
        if (b9) {
            b10 = b8;
        } else {
            b10 = false;
        }
        var x13 = ~~ (eval("b10"));
        var e15 = "b14";
        var s16 = String(eval(e15));
        var l17 = (s16).length;
        var b20 = Boolean((x13 * l17));
        x21 = b20;
    }
    var x36;
    if ((l2) ? true : false) {
        x36 = x21;
    } else {
        var x26 = +(b25);
        var x31 = +(eval("!(Boolean(x27))"));
        x32 = x26 + x31;
        x36 = (((x22).toString()).length === x32);
    }
    return x36;
}
fn37(input_I3, input_B2, input_I1, input_S1, input_B3, input_B1);
