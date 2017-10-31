// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then int(str(((if (input_string('S1') !== input_string('S2')) then input_string('S1') else str((int(not((str(((bool(int(input_bool('B2'))) !== (input_int('I2') == len(input_string('S2')))) || input_bool('B1'))) in ['HBMQU', 'bOu', '', '', 'XuUa']))) * -63))) <= input_string('S1')))) else int(input_bool('B3')))

var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);

var fn41 = Function('b18', 'b1', 's12', 's2', 'x11', 'b38', "var b7 = b1; var x40; if (b1) { var e35 = \"var s32 = s2; var s3 = s12; var s6 = s2; var b4 = false; if (s2 !== s3) { b4 = true; }var x31; if (b4) {  x31 = s6; } else { var b10 = Boolean((eval(\\\"b7\\\")) ? 1 : 0);var b14 = x11 == (s12).length;var b16 = b10 !== b14;var b19; if (b18) { b19 = true; } else { b19 = b16; }var s21 = '' + (b19);var opts23 = ['HBMQU', 'bOu', '', '', 'XuUa'];var b22 = false; for (var idx24 = 0; idx24 < opts23.length; idx24++) { if (opts23[idx24] == s21) { b22 = true; } }var x26 = Number(!(b22));x27 = x26 * -63;var s29 = '' + (x27); x31 = eval(\\\"s29\\\"); }(x31 <= s32)\";var s36 = '' + (eval(e35)); x40 = parseInt(s36, 10); } else { var x39 = (b38) | 0; x40 = x39; } return x40;");
fn41(input_B1, input_B2, input_S2, input_S1, input_I2, input_B3);
