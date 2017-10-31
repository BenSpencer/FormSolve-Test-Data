// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str(len(input_string('S3'))) > str(int((input_bool('B3') !== bool((if input_bool('B2') then 1 else int((input_string('S2') >= input_string('S1'))))))))) then input_bool('B2') else not(not(bool(str((if (str(input_int('I2')) in ['Etn', 'Ivh', 'g7c', 'maSH', 'G', 'jc', 'Sh']) then input_int('I3') else len(str(input_int('I1')))))))))

var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);

var fn39 = Function('x29', 'b4', 's6', 's7', 'b20', 'x23', 'x28', 's1', "var b5 = b20; var l2 = (s1).length;var e11 = \"var b8 = s6; var b9 = s7;+(b8 >= b9)\";var x12; if (b5) {  x12 = 1; } else { x12 = eval(e11); }var b14 = b4; var b15 = (x12) ? true : false;var x16 = (b14 !== b15) | 0;var b18 = '' + (l2) > (x16).toString();var x38; if (b18) { var e21 = \"b20\"; x38 = eval(\"eval(e21)\"); } else { var opts26 = ['Etn', 'Ivh', 'g7c', 'maSH', 'G', 'jc', 'Sh'];var b25 = false; for (var idx27 = 0; idx27 < opts26.length; idx27++) { if (opts26[idx27] == String(x23)) { b25 = true; break; } }var x33; if (b25) {  x33 = x28; } else { var e30 = \"x29\";var s31 = (eval(e30)).toString();var l32 = (s31).length; x33 = l32; }var s34 = (x33).toString();var b37 = !(!(Boolean(s34))); x38 = b37; } return x38;");
fn39(input_I1, input_B3, input_S2, input_S1, input_B2, input_I2, input_I3, input_S3);
