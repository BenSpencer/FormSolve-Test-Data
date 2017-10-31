// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(str(len(input_string('S2')))) < (if bool(input_int('I2')) then int(((input_string('S2') + str(len(str(input_int('I3'))))) in ['nbIS', 'w', 'vcrK', 'Jhkjb', '', 'C', ''])) else input_int('I1'))) then input_string('S1') else str((input_string('S2') != str(input_bool('B2')))))

var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");

var fn34 = Function('b26', 's1', 'x6', 'x20', 's24', 'x9', "var s25 = s1; var s8 = s1; var e3 = \"var l2 = (s1).length;l2\";var s4 = String(eval(e3));var x5 = Number(s4);var x21; if (Boolean(x6)) { x21 = eval(\"var s10 = '' + (x9);var l11 = (s10).length;var s12 = (l11).toString();var opts16 = ['nbIS', 'w', 'vcrK', 'Jhkjb', '', 'C', ''];var b15 = false; for (var idx17 = 0; idx17 < opts16.length; idx17++) { if (opts16[idx17] == (s8 + s12)) { b15 = true; break; } }Number(b15)\"); } else {  x21 = x20; }var b22 = x5; var b23 = x21;var x33; if (b22 < b23) { x33 = s24; } else { var e30 = \"var b28 = s25; var b29 = '' + (b26);b28 != b29\";var e32 = \"'' + (eval(e30))\"; x33 = eval(e32); } return x33;");
fn34(input_B2, input_S2, input_I2, input_I1, input_S1, input_I3);
