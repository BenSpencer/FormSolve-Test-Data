// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then false else not(not((int(str(((((if (input_string('S2') in ['', 'PJL', '7', 'eh', 'v', 'JvQgD', '']) then input_bool('B1') else regex-test(input_string('S2'), /^fUO\W(b\W?|sD[-_ ]d)$/)) || bool(str(input_int('I1')))) != not(bool(input_int('I2')))) && input_bool('B3')))) != int((input_string('S2') < str(input_int('I2'))))))))

var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);

var fn40 = Function('b1', 's2', 'x11', 'x17', 'b22', "var b6 = b1; var x39; if (b1) {  x39 = false; } else { var s29 = s2; var x30 = x17; var e27 = \"var e10 = \\\"var s7 = s2; var opts4 = ['', 'PJL', '7', 'eh', 'v', 'JvQgD', ''];var b3 = false; for (var idx5 = 0; idx5 < opts4.length; idx5++) { if (opts4[idx5] == s2) { b3 = true; break; } }var x9; if (b3) {  x9 = b6; } else { var re8 = new RegExp(\\\\\\\"^fUO\\\\\\\\\\\\\\\\W(b\\\\\\\\\\\\\\\\W?|sD[-_ ]d)$\\\\\\\"); x9 = re8.test(s7); }x9\\\";var b15; if (eval(e10)) { b15 = true; } else { var e13 = \\\"(x11).toString()\\\";var b14 = Boolean(eval(e13)); b15 = b14; }var b18 = (x17) ? true : false;var b20 = b15 != !(b18);var b24 = false; if (b20 && eval(\\\"b22\\\")) { b24 = true; }'' + (b24)\";var x28 = Number(eval(e27));var b32 = s29; var b33 = String(x30);var x34 = (b32 < b33) | 0;var b35 = false; if (x28 != x34) { b35 = true; }var b37; if (b35) { b37 = false; } else { b37 = true; }var b38 = !(b37); x39 = b38; } return x39;");
fn40(input_B1, input_S2, input_I1, input_I2, input_B3);
