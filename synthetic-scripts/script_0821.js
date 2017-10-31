// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (not((len(str((input_string('S1') !== (if bool(str(input_bool('B1'))) then input_string('S3') else input_string('S3'))))) === int(input_bool('B1')))) != (input_int('I1') > int(input_string('S3')))) then input_bool('B2') else bool(str(not((len(input_string('S3')) != input_int('I3'))))))

var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);

var fn37 = Function('s1', 'x30', 's21', 'x20', 'b27', 'b14', "var s28 = s21; var s6 = s21; var b3 = b14; var e2 = \"s1\";var s7 = s6; var b5 = !!((b3).toString());var b10; if (eval(e2) !== eval(\"(b5 ? s6 : s7)\")) { b10 = true; } else { b10 = false; }var s12 = String(b10);var x15 = (b14) ? 1 : 0;var b17 = (s12).length === eval(\"x15\");var b19 = !(b17);var x22 = Number(s21);var b23 = false; if (x20 > x22) { b23 = true; }var b25; if (b19) { if (b23) { b25 = false; } else { b25 = true; } } else { if (b23) { b25 = true; } else { b25 = false; } }var x36; if (b25) { x36 = b27; } else { var b33 = !(((s28).length != x30));var s34 = '' + (b33); x36 = !!(s34); } return x36;");
fn37(input_S1, input_I3, input_S3, input_I1, input_B2, input_B1);
