// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((str((int(input_bool('B3')) == (if input_bool('B3') then len(input_string('S1')) else input_int('I2')))) == str((input_int('I1') <= int(bool(input_int('I2')))))) == input_bool('B2')) then input_bool('B1') else not(bool(int(input_string('S1')))))

var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");

var fn37 = Function('x17', 'x18', 's32', 'b30', 'b1', 'b27', "var s6 = s32; var x9 = x18; var b20 = Boolean(eval(\"x18\"));var b22 = x17; var b23 = (b20) | 0;var s24 = (b22 <= b23).toString();var b25; if (eval(\"var b5 = b1; var x3 = (eval(\\\"b1\\\")) ? 1 : 0;var e4 = \\\"x3\\\";var b13 = eval(e4) == eval(\\\"var x10; if (b5) {  x10 = eval(\\\\\\\"(s6).length\\\\\\\"); } else { x10 = x9; }eval(\\\\\\\"x10\\\\\\\")\\\");var s15 = String(b13);s15\") == s24) { b25 = true; } else { b25 = false; }var b28 = false; if (b25 == b27) { b28 = true; }var x36; if (b28) { x36 = eval(\"b30\"); } else { var b34 = !!(parseInt(s32, 10)); x36 = !(b34); } return x36;");
fn37(input_I1, input_I2, input_S1, input_B1, input_B3, input_B2);
