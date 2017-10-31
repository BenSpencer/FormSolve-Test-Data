// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if not((if ((input_bool('B2') != (str(bool(int(input_string('S3')))) >= input_string('S1'))) !== bool(input_string('S1'))) then bool(input_int('I1')) else bool(input_string('S2')))) then ((if true then input_string('S3') else input_string('S1')) <= str(bool(str(input_bool('B2'))))) else not(input_bool('B1'))) then false else (input_bool('B2') == input_bool('B2')))

var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);

var fn43 = Function('s18', 'b1', 's12', 's2', 'b33', 'x16', "var b37 = b1; var e36 = \"var s22 = s2; var b26 = b1; var s23 = s12; var s6 = s12; var e11 = \\\"var x3 = Number(s2);var b7 = false; if ('' + (!!(x3)) >= s6) { b7 = true; }(b1 != b7)\\\";var b13 = (s12) ? true : false;var b14 = false; if (eval(e11) !== b13) { b14 = true; }var x20; if (b14) {  x20 = (x16) ? true : false; } else { x20 = !!(s18); }var b21; if (x20) { b21 = false; } else { b21 = true; }var x25; if (true) {  x25 = s22; } else {  x25 = eval(\\\"s23\\\"); }var s27 = (b26).toString();var b31; if (x25 <= eval(\\\"(Boolean(s27)).toString()\\\")) { b31 = true; } else { b31 = false; }var b34 = !(b33);var x35; if (b21) { x35 = b31; } else { x35 = b34; }x35\";var x42; if (eval(e36)) { x42 = false; } else { x42 = eval(\"var b38 = b37; (b37 == b38)\"); } return x42;");
fn43(input_S2, input_B2, input_S1, input_S3, input_B1, input_I1);
