// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str((if bool(int(input_string('S1'))) then bool(int(str(not((int(input_bool('B3')) > input_int('I2')))))) else input_bool('B1'))) <= input_string('S2')) then bool(input_string('S2')) else (1 == input_int('I1')))

var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);

function fn29(s17, s1, b5, x25, b14, x7) {
    var s21 = s17;
    var x3 = parseInt(eval("s1"), 10);
    var x6 = (b5) ? 1 : 0;
    var b8 = x6;
    var b9 = x7;
    var b10;
    if (b8 > b9) {
        b10 = false;
    } else {
        b10 = true;
    }
    var b13 = Boolean(parseInt('' + (b10), 10));
    var x15;
    if (Boolean(x3)) {
        x15 = b13;
    } else {
        x15 = b14;
    }
    var e22 = "s21";
    var b23 = !! (eval(e22));
    var e24 = "b23";
    var x28;
    if ((String(x15) <= eval("s17"))) {
        x28 = eval(e24);
    } else {
        x28 = (1 == x25);
    }
    return x28;
}
fn29(input_S2, input_S1, input_B3, input_I1, input_B1, input_I2);
