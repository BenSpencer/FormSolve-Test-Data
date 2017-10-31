// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(str((int(str(int(input_string('S2')))) / int(input_bool('B3')))))) then (if not((input_bool('B1') && bool((int(not(not(not(bool(str(len(str((len(str(bool(int(not(not(not(input_bool('B2')))))))) < input_int('I3')))))))))) * (len(input_string('S2')) * input_int('I3')))))) then (str(input_bool('B1')) != input_string('S2')) else input_bool('B2')) else not(input_bool('B2')))

var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);

var fn60 = Function('b5', 'b12', 's1', 'b13', 'x23', "var s36 = s1; var b56 = b13; var x2 = Number(s1);var s3 = '' + (x2);var b10 = Boolean(String((Number(s3) / (b5) | 0)));var b11 = !(b10);var x59; if (b11) { var s50 = s36; var b54 = b13; var b48 = b12; var x39 = x23; var e33 = \"var s21 = (Boolean(~~(eval(\\\"var e15 = \\\\\\\"!(b13)\\\\\\\";var b16 = !(eval(e15));var b17 = !(b16);b17\\\")))).toString();var l22 = (s21).length;var b24; if (l22 < x23) { b24 = true; } else { b24 = false; }var s26 = String(b24);var b29 = Boolean(((s26).length).toString());var b30; if (b29) { b30 = false; } else { b30 = true; }var b31 = !(b30);var b32 = !(b31);b32\";var e35 = \"(eval(e33)) | 0\";var l37 = (s36).length;var e38 = \"l37\";x40 = eval(e38); x41 = x39;x42 = eval(e35) * x40 * x41;var b44 = Boolean(x42);var b45; if (b12 && b44) { b45 = true; } else { b45 = false; }var b47 = !(b45);var x55; if (b47) { var s49 = String(b48);var b51 = false; if (s49 != s50) { b51 = true; }var e53 = \"b51\"; x55 = eval(e53); } else { x55 = b54; } x59 = x55; } else { var b58 = !(eval(\"b56\")); x59 = b58; } return x59;");
fn60(input_B3, input_B1, input_S2, input_B2, input_I3);
