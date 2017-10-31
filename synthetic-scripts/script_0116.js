// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then str(((int((input_bool('B3') || (input_int('I2') <= (if input_bool('B1') then len((input_string('S1') + input_string('S1'))) else int((bool(len(input_string('S1'))) != bool(str(not(regex-test(str(input_bool('B3')), /^i(JWM|\riFb[-_ ]ve)*$/)))))))))) - int(input_string('S3'))) - 7)) else input_string('S2'))

var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);

var fn43 = Function('s34', 's10', 'x3', 'b4', 'b1', 's41', "var b14 = b1; var e33 = \"var b2 = b14; var b28; if (x3 <= eval(\\\"eval(\\\\\\\"var s5 = s10; var s6 = s5; var x7 = s5; var x8 = s6;var x25; if (b4) { x25 = (x7 + x8).length; } else { var b13 = ((eval(\\\\\\\\\\\\\\\"s10\\\\\\\\\\\\\\\")).length) ? true : false;var e17 = \\\\\\\\\\\\\\\"(String(b14)).match(/^i(JWM|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\riFb[-_ ]ve)*$/) !== null\\\\\\\\\\\\\\\";var b20 = !!(String(!(eval(e17))));var b21 = false; if (b13 != b20) { b21 = true; }var e23 = \\\\\\\\\\\\\\\"b21\\\\\\\\\\\\\\\";var x24 = Number(eval(e23)); x25 = x24; }x25\\\\\\\")\\\")) { b28 = true; } else { b28 = false; }var b30 = b2; var b31 = b28;(b30 || b31) | 0\";x38 = (eval(e33) - Number(s34)); x39 = 7; return (b1 ? String(x38 - x39) : s41);");
fn43(input_S3, input_S1, input_I2, input_B1, input_B3, input_S2);
