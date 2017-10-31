// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if ((str(input_int('I1')) !== str(bool(input_string('S2')))) == bool((input_string('S1') + input_string('S1')))) then (input_string('S3') !== str(int(input_string('S3')))) else regex-test(input_string('S3'), /^([a-z]|\s?)$/)) then (true || (int(str(input_int('I3'))) == int(str(input_int('I3'))))) else (input_bool('B1') == bool(input_string('S2'))))

var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);

var fn50 = Function('x1', 's19', 'b41', 's3', 'x30', 's11', "var s42 = s3; var s26 = s19; var s7 = '' + (Boolean(eval(\"eval(\\\"s3\\\")\")));var e8 = \"s7\";var b9 = String(x1); var b10 = eval(e8);var s12 = s11; var e13 = \"s12\";var b16 = Boolean((s11 + eval(e13)));var s21 = s19; var e20 = \"s19\";var x22 = Number(s21);var b24; if (eval(e20) !== '' + (x22)) { b24 = true; } else { b24 = false; }var re27 = /^([a-z]|\\s?)$/;var x33 = x30; var s31 = String(x30);var e35 = \"(x33).toString()\";var b37 = false; if (Number(s31) == parseInt(eval(e35), 10)) { b37 = true; }var b39 = false; if (true || b37) { b39 = true; }var x49; if (eval(\"((b9 !== b10 == b16) ? b24 : re27.test(s26))\")) { x49 = b39; } else { x49 = eval(\"eval(\\\"eval(\\\\\\\"var b43 = !!(s42);var b44 = false; if (b41 == b43) { b44 = true; }b44\\\\\\\")\\\")\"); } return x49;");
fn50(input_I1, input_S3, input_B1, input_S2, input_I3, input_S1);
