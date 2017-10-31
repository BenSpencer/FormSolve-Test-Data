// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(input_bool('B1')) then (int(str(input_bool('B2'))) !== len(input_string('S1'))) else bool(int(bool(str(bool(int(str(bool(input_int('I3'))))))))))

var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");

var fn24 = function (b3, x10, s6, b1) {
    var x20 = ~~ (eval("var b11 = Boolean(x10);var s12 = (b11).toString();var b15 = Boolean(eval(\"parseInt(s12, 10)\"));Boolean(eval(\"'' + (b15)\"))"));
    var b22 = !! (eval("x20"));
    var x23;
    if (!(b1)) {
        var l7 = (s6).length;
        var b8 = false;
        if (Number(String(b3)) !== l7) {
            b8 = true;
        }
        x23 = b8;
    } else {
        x23 = b22;
    }
    return x23;
}
fn24(input_B2, input_I3, input_S1, input_B1);
