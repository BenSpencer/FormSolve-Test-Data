// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S2')) then (if bool((if not((input_int('I1') > input_int('I3'))) then "K" else str(input_int('I2')))) then input_int('I3') else int(str(int(str(input_bool('B1')))))) else int(bool(input_string('S1'))))

var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);

var fn23 = Function('b13', 's19', 's1', 'x8', 'x12', 'x3', "var b20 = !!(s19);var x22; if (Boolean(s1)) { var x4 = x12; var b5 = x3 > x4;var b7; if (b5) { b7 = false; } else { b7 = true; }var s9 = (x8).toString();var x10; if (b7) {  x10 = \"K\"; } else { x10 = s9; }var b11 = (x10) ? true : false;var s16 = (parseInt((b13).toString(), 10)).toString();var x18; if (b11) {  x18 = x12; } else { x18 = parseInt(s16, 10); } x22 = x18; } else { x22 = (b20) | 0; } return x22;");
fn23(input_B1, input_S1, input_S2, input_I2, input_I3, input_I1);
