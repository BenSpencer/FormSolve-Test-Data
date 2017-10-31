// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(input_bool('B2'))) then input_string('S3') else str((if input_bool('B1') then false else bool((int((not(not((input_string('S3') <= input_string('S2')))) == bool(input_string('S2')))) % len(input_string('S2')))))))

var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn31 = Function('b1', 'b5', 's12', 's4', "var s6 = s4; var x2 = (b1) | 0;var x30; if ((x2) ? true : false) { x30 = s4; } else { var x27; if (b5) {  x27 = false; } else { var s21 = s12; var e18 = \"var s7 = s12; var b8; if (s6 <= s7) { b8 = true; } else { b8 = false; }var b10 = !(b8);var b11; if (b10) { b11 = false; } else { b11 = true; }var e13 = \\\"s12\\\";var b14 = !!(eval(e13));eval(\\\"(b11 == b14)\\\")\";var e19 = \"eval(e18)\";var x20 = (eval(e19)) ? 1 : 0;var e23 = \"var l22 = (s21).length;l22\";x24 = x20 % eval(e23);var b26 = !!(x24); x27 = b26; }var e29 = \"'' + (x27)\"; x30 = eval(e29); } return x30;");
fn31(input_B2, input_B1, input_S2, input_S3);
