// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((1 > len(str((if input_bool('B3') then not((str((bool((int(bool(input_string('S1'))) + input_int('I3'))) === (input_int('I1') <= int(input_bool('B1'))))) in ['ilaW', '', 'Z', '4', 'N'])) else (0 >= input_int('I2')))))) || input_bool('B3')) then bool(str(input_bool('B3'))) else input_bool('B2'))

var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);

var fn42 = function (x6, x24, b40, b1, b11, x10, s2) {
    var b37 = b1;
    var b34 = b1;
    var e22 = "var opts20 = ['ilaW', '', 'Z', '4', 'N'];opts20.indexOf(eval(\"x7 = eval(\\\"var x4 = +((s2) ? true : false);x4\\\"); x8 = x6;var b9 = Boolean(x7 + x8);var b13 = x10 <= (b11) | 0;var b15 = b9; var b16 = b13;var s17 = String(b15 === b16);s17\")) > -1";
    var b23;
    if (eval(e22)) {
        b23 = false;
    } else {
        b23 = true;
    }
    var x27;
    if (b1) {
        x27 = b23;
    } else {
        var b25;
        if (0 >= x24) {
            b25 = true;
        } else {
            b25 = false;
        }
        x27 = b25;
    }
    var b31 = 1;
    var b32 = (eval("(x27).toString()")).length;
    var e33 = "b31 > b32";
    var b35;
    if (eval(e33) || b34) {
        b35 = true;
    } else {
        b35 = false;
    }
    return (b35 ? Boolean(String(b37)) : b40);
}
fn42(input_I3, input_I2, input_B2, input_B3, input_B1, input_I1, input_S1);
