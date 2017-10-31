// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_string('S2') != str(int(not((if input_bool('B1') then bool(input_string('S3')) else not(((if not(input_bool('B3')) then input_string('S1') else input_string('S3')) >= str((bool(input_string('S2')) && true))))))))) then not(input_bool('B2')) else input_bool('B3'))

var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);

var fn29 = Function('s7', 's3', 's1', 'b2', 'b27', 'b25', "var b5 = b27; var s10 = s1; var s8 = s3; var x18; if (b2) { var b4 = (s3) ? true : false; x18 = b4; } else { var b6; if (b5) { b6 = false; } else { b6 = true; }var x9; if (b6) { x9 = s7; } else {  x9 = s8; }var b12 = (s10) ? true : false && true;var s14 = '' + (b12);var b15 = x9; var b16 = s14; x18 = !(b15 >= b16); }var b22 = s1; var b23 = (+(!(x18))).toString();var x28; if (eval(\"b22 != b23\")) { var b26 = !(b25); x28 = b26; } else { x28 = b27; } return x28;");
fn29(input_S1, input_S3, input_S2, input_B1, input_B3, input_B2);
