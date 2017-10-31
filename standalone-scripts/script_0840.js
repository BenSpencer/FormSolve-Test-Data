// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(len(input_string('S3'))) then input_bool('B2') else ((if (if not((if ((not(not(not((len(str(input_bool('B1'))) in [1, 4, 3, 18, 152, 91, 11, 85, 0, 55])))) != regex-test(input_string('S3'), /^([0-9]|-Eczuv)*$/)) === false) then input_bool('B2') else input_bool('B3'))) then bool(len(str(input_int('I1')))) else input_bool('B2')) then input_bool('B3') else ((str((input_string('S1') <= input_string('S2'))) in ['J0', '', 'gI7T', 'j2', 'O', 'Yh']) == input_bool('B2'))) && not(not(not(bool(input_int('I3')))))))

var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);

var fn65 = Function('s52', 'x55', 'b54', 's49', 'b4', 'x48', 'b50', 's1', "var s51 = s1; var b53 = b4; var e56 = \"x55\";var b57 = !!(eval(e56));var e58 = \"b57\";var b59; if (eval(e58)) { b59 = false; } else { b59 = true; }var b62; if (!(!(b59))) {  b62 = (function(x25, s35, b5, s14, s33, b20, b22) { var b31 = b22; var b43 = b20; var b29 = b20; var l7 = ((b5).toString()).length;var opts9 = [1, 4, 3, 18, 152, 91, 11, 85, 0, 55];var b8 = false; for (var idx10 = 0; idx10 < opts9.length; idx10++) { if (opts9[idx10] == l7) { b8 = true; break; } }var b11; if (b8) { b11 = false; } else { b11 = true; }var b12; if (b11) { b12 = false; } else { b12 = true; }var re15 = /^([0-9]|-Eczuv)*$/;var b16 = !(b12); var b17 = re15.test(s14);var b18 = b16 != b17 === false;var x23; if (b18) {  x23 = eval(\"b20\"); } else {  x23 = b22; }var b24 = !(x23);var s26 = String(x25);var l27 = (s26).length;var x46; if ((b24 ? Boolean(l27) : b29)) { x46 = eval(\"b31\"); } else { var b36; if (eval(\"s33\") <= s35) { b36 = true; } else { b36 = false; }var opts41 = ['J0', '', 'gI7T', 'j2', 'O', 'Yh'];var b44; if (opts41.indexOf(String(eval(\"b36\"))) > -1 == b43) { b44 = true; } else { b44 = false; } x46 = b44; } return x46; })(x48, s49, b50, s51, s52, b53, b54) ; } else { b62 = false; }var x64; if (((s1).length) ? true : false) {  x64 = b4; } else { x64 = b62; } return x64;");
fn65(input_S1, input_I3, input_B3, input_S2, input_B2, input_I1, input_B1, input_S3);
