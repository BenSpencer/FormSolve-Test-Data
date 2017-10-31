// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then regex-test(input_string('S1'), /^(hCej\w[0-9]|L)?NJjJQXX$/) else (if (input_bool('B3') != not(not((if input_bool('B1') then (str(int(bool(int(input_bool('B2'))))) != str(bool(str(input_int('I3'))))) else (not(bool(input_int('I1'))) !== input_bool('B1')))))) then not(not(not((int(input_string('S3')) !== 0)))) else not(input_bool('B1'))))

var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);

var fn53 = Function('b46', 'b1', 'b50', 'x49', 's51', 'x48', 's2', "var b47 = b1; var x52; if (b1) {  x52 = (s2).match(/^(hCej\\w[0-9]|L)?NJjJQXX$/) !== null; } else { x52 = (function(b7, b4, x21, x14, b24, s32) { var b42 = b24; var b5 = b24; var e10 = \"var b9 = ((b7) ? 1 : 0) ? true : false;b9\";var x11 = Number(eval(e10));var e12 = \"x11\";var s13 = String(eval(e12));var e16 = \"(x14).toString()\";var b17 = Boolean(eval(e16));var s18 = '' + (b17);var b19 = false; if (s13 != s18) { b19 = true; }var b23 = !(!!(x21));var x27; if (eval(\"b5\")) { x27 = b19; } else { x27 = (b23 !== b24); }var b30; if (b4 != !(!(x27))) { b30 = true; } else { b30 = false; }var b41; if (eval(\"var e39 = \\\"var b34 = parseInt(s32, 10) !== 0;var b36; if (b34) { b36 = false; } else { b36 = true; }eval(\\\\\\\"!(b36)\\\\\\\")\\\";eval(e39)\")) { b41 = false; } else { b41 = true; }var b43; if (b42) { b43 = false; } else { b43 = true; }var x44; if (b30) { x44 = b41; } else { x44 = b43; } return x44; })(b46, b47, x48, x49, b50, s51) ; } return x52;");
fn53(input_B2, input_B3, input_B1, input_I3, input_S3, input_I1, input_S1);
