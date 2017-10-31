// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((input_bool('B1') === ((if bool(int(bool(int(str(input_int('I1')))))) then (str(bool(input_int('I1'))) in ['KmNS', 'S', '', 'UWJ']) else input_bool('B2')) !== (str(bool(len(input_string('S1')))) == str(not(not(bool(int(str((input_bool('B2') && bool(input_string('S3')))))))))))) || bool(int((bool(int(input_string('S2'))) === (not(input_bool('B3')) != input_bool('B3')))))) then "w8" else input_string('S2'))

var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn56 = Function('s16', 'b14', 'b1', 's21', 'b43', 's40', 'x2', "var s54 = s40; var b20 = b14; var x8 = x2; var s3 = (x2).toString();var x4 = Number(s3);var b5 = Boolean(x4);var x6 = Number(b5);var b7 = Boolean(x6);var x15; if (b7) { var b9 = Boolean(x8);var opts12 = ['KmNS', 'S', '', 'UWJ']; x15 = opts12.indexOf(String(b9)) > -1; } else {  x15 = b14; }var b36 = x15 !== eval(\"var e23 = \\\"Boolean(s21)\\\";var b24 = b20; var b25 = eval(e23);var x27 = Number('' + (b24 && b25));var b29 = Boolean(eval(\\\"x27\\\"));var b31; if (!(b29)) { b31 = false; } else { b31 = true; }(String(Boolean((s16).length)) == (b31).toString())\");var b38 = false; if (b1 === b36) { b38 = true; }var b42 = (Number(s40)) ? true : false;var b45 = b43; var b44; if (b43) { b44 = false; } else { b44 = true; }var b46 = b44 != b45;var b48 = false; if (b42 === b46) { b48 = true; }var x50 = (b48) ? 1 : 0;var b52 = b38 || Boolean(x50);var x55; if (b52) { x55 = \"w8\"; } else {  x55 = s54; } return x55;");
fn56(input_S1, input_B2, input_B1, input_S3, input_B3, input_S2, input_I1);
