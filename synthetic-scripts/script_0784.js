// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S1')) then not(not(((if input_bool('B2') then input_int('I2') else input_int('I1')) <= input_int('I2')))) else bool(int(str(not((int(not(not(bool(input_int('I3'))))) != int(str(len(input_string('S2'))))))))))

var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);

function fn36(x9, b5, s24, x19, s1, x13) {
    var x7 = x13;
    var e8 = "x7";
    var x11;
    if (eval("b5")) {
        x11 = eval(e8);
    } else {
        x11 = eval("x9");
    }
    var b14 = false;
    if (eval("x11") <= x13) {
        b14 = true;
    }
    var b16;
    if (b14) {
        b16 = false;
    } else {
        b16 = true;
    }
    var e18 = "!(b16)";
    var e31 = "var b21; if (!!(x19)) { b21 = false; } else { b21 = true; }var b22 = !(b21);var x23 = (b22) | 0;var s26 = String((s24).length);var b28 = x23; var b29 = Number(s26);var b30 = !(b28 != b29);b30";
    var s32 = (eval(e31)).toString();
    var b34 = (Number(s32)) ? true : false;
    var x35;
    if (eval("var e3 = \"var b2 = !!(s1);b2\";eval(e3)")) {
        x35 = eval(e18);
    } else {
        x35 = b34;
    }
    return x35;
}
fn36(input_I1, input_B2, input_S2, input_I3, input_S1, input_I2);
