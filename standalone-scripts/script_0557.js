// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((input_string('S3') === str(int(str(input_bool('B2')))))) then (if bool(str(input_int('I3'))) then int(input_string('S3')) else int(("KZ71I" < str(bool(input_int('I1')))))) else int(str(not((input_string('S2') >= input_string('S2'))))))

var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);

var fn30 = Function('x14', 'b2', 's21', 's1', 'x9', "var s12 = s1; var x4 = parseInt('' + (b2), 10);var b6 = s1; var b7 = (x4).toString();var b11 = Boolean(String(x9));var s16 = ((x14) ? true : false).toString();var b17 = false; if (\"KZ71I\" < s16) { b17 = true; }var x20; if (b11) {  x20 = parseInt(s12, 10); } else { x20 = Number(b17); }var s23 = s21; var e22 = \"s21\";var b24 = false; if (eval(e22) >= s23) { b24 = true; }var b26; if (b24) { b26 = false; } else { b26 = true; }var s27 = (b26).toString();var x28 = parseInt(s27, 10);var x29; if (!(b6 === b7)) { x29 = x20; } else { x29 = x28; } return x29;");
fn30(input_I1, input_B2, input_S2, input_S3, input_I3);
