// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S3')) then ((bool(str((str(input_bool('B1')) in ['78uD', 'o', '', 'jOL', 'Zt', 'L', 'Vb', 'q', 'f8eKr']))) == (len(str(regex-test(input_string('S2'), /^P(\n*KW[A-Z]|K)$/))) !== input_int('I2'))) && regex-test(str(bool(input_string('S1'))), /^(G[A-Z]?|f)-sW$/)) else not((str(not(input_bool('B1'))) >= input_string('S1'))))

var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");

var fn37 = Function('b28', 's21', 's12', 'x16', 's1', "var b3 = b28; var s32 = s21; var b2 = Boolean(s1);var s31 = '' + (eval(\"var b29 = !(b28);b29\"));var b33 = s31 >= s32;var x36; if (b2) { var e9 = \"var s4 = String(b3);var opts7 = ['78uD', 'o', '', 'jOL', 'Zt', 'L', 'Vb', 'q', 'f8eKr'];var b6 = false; for (var idx8 = 0; idx8 < opts7.length; idx8++) { if (opts7[idx8] == eval(\\\"s4\\\")) { b6 = true; } }b6\";var re13 = /^P(\\n*KW[A-Z]|K)$/;var b17 = false; if ((String(re13.test(s12))).length !== x16) { b17 = true; }var e23 = \"var b22 = !!(s21);b22\";var re25 = /^(G[A-Z]?|f)-sW$/;var b26 = false; if ((!!('' + (eval(e9))) == b17) && re25.test((eval(e23)).toString())) { b26 = true; } x36 = b26; } else { x36 = !(b33); } return x36;");
fn37(input_B1, input_S1, input_S2, input_I2, input_S3);
