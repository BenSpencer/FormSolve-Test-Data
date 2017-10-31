// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if input_bool('B1') then (len(str(not(input_bool('B2')))) in [0, 1, 9, 0, 8, 77, 1, -36, 0]) else not((input_string('S1') <= str(int(str(input_int('I3'))))))) then bool(int((regex-test(input_string('S2'), /^UN([-_ ]YZ\D|p)?$/) || (input_int('I1') !== len(str(input_bool('B1'))))))) else not((int(str(not(input_bool('B3')))) <= input_int('I2'))))

var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);

function fn47(b2, x11, s21, s10, b1, b35, x40, x23) {
    var b24 = b1;
    var e5 = "String(!(b2))";
    var l6 = (eval(e5)).length;
    var opts8 = [0, 1, 9, 0, 8, 77, 1, -36, 0];
    var b7 = opts8.indexOf(l6) > -1;
    var e20 = "(b1 ? b7 : eval(\"var x13 = parseInt((x11).toString(), 10);var s14 = '' + (x13);var b15 = false; if (s10 <= s14) { b15 = true; }!(b15)\"))";
    var b36;
    if (b35) {
        b36 = false;
    } else {
        b36 = true;
    }
    var x39 = parseInt((eval("b36")).toString(), 10);
    var b41 = x39 <= x40;
    var b45;
    if (eval("eval(\"b41\")")) {
        b45 = false;
    } else {
        b45 = true;
    }
    var x46;
    if (eval(e20)) {
        x46 = eval("var e33 = \"var re22 = new RegExp(\\\"^UN([-_ ]YZ\\\\\\\\D|p)?$\\\");var s25 = String(b24);var l26 = (s25).length;var b27; if (x23 !== l26) { b27 = true; } else { b27 = false; }var b29; if (re22.test(s21)) { b29 = true; } else { b29 = b27; }var b32 = Boolean(+(b29));b32\";eval(e33)");
    } else {
        x46 = b45;
    }
    return x46;
}
fn47(input_B2, input_I3, input_S2, input_S1, input_B1, input_B3, input_I2, input_I1);
