// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if false then ((if bool(input_string('S2')) then 0 else int(input_bool('B2'))) < input_int('I2')) else bool(int(str((input_int('I3') - int((len(str(int(str(int((int((if not(input_bool('B1')) then input_bool('B1') else not(input_bool('B1')))) < len(input_string('S2')))))))) in [0, 0, 27, 24, 69, 10, 81])))))))

var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);

var fn42 = Function('b3', 'x11', 'b12', 'x6', 's1', "var s21 = s1; var x5; if (Boolean(s1)) { x5 = 0; } else {  x5 = (b3) ? 1 : 0; }var e7 = \"x6\";var e8 = \"eval(e7)\";var b9 = x5; var b10 = eval(e8);var x41; if (false) { x41 = b9 < b10; } else { var e39 = \"var s37 = '' + ((x11 - eval(\\\"var e19 = \\\\\\\"var b15 = b12; var b16 = b12; var b13; if (b12) { b13 = false; } else { b13 = true; }var x18; if (eval(\\\\\\\\\\\\\\\"b13\\\\\\\\\\\\\\\")) {  x18 = b15; } else { var b17; if (b16) { b17 = false; } else { b17 = true; } x18 = b17; }x18\\\\\\\";var x20 = (eval(e19)) | 0;var l22 = (s21).length;var b23 = false; if (x20 < l22) { b23 = true; }var s26 = String(Number(b23));var x27 = parseInt(s26, 10);var l29 = (String(x27)).length;var opts31 = [0, 0, 27, 24, 69, 10, 81];var b30 = opts31.indexOf(l29) > -1;var x33 = ~~(b30);x33\\\")));Number(s37)\"; x41 = Boolean(eval(e39)); } return x41;");
fn42(input_B2, input_I3, input_B1, input_I2, input_S2);
