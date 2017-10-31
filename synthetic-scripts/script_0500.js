// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if input_bool('B1') then not(input_bool('B1')) else ((input_string('S1') + input_string('S1')) in ['7an', 'K', '4fz5d', '', 'yHea', 'pN0Hj'])) then (if regex-test(input_string('S1'), /^OG(k|OX[a-z]).+j$/) then str((if not(not(input_bool('B2'))) then not(regex-test(str(bool(input_string('S2'))), /^jhiEJA\d(w|VT)?sdZ[A-Z]u$/)) else bool(int(input_string('S3'))))) else input_string('S1')) else str(bool(str(input_int('I2')))))

var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");

var fn45 = Function('b32', 's33', 'x40', 's31', 's13', 'b1', "var s5 = s13; var b2 = b1; var s6 = s5; var opts10 = ['7an', 'K', '4fz5d', '', 'yHea', 'pN0Hj'];var b9 = false; for (var idx11 = 0; idx11 < opts10.length; idx11++) { if (opts10[idx11] == (s5 + s6)) { b9 = true; } }var x12; if (b1) {  x12 = !(eval(\"b2\")); } else { x12 = b9; }var s41 = '' + (x40);var b42 = !!(s41);var s43 = '' + (b42);var x44; if (x12) { var s37 = s13; var e35 = \"eval(\\\"(function(s19, b15, s25) { var b28 = (parseInt(eval(\\\\\\\"s25\\\\\\\"), 10)) ? true : false;var x29; if (eval(\\\\\\\"!(!(b15))\\\\\\\")) { var b20 = !!(s19);var s21 = String(b20);var e23 = \\\\\\\"(s21).match(/^jhiEJA\\\\\\\\\\\\\\\\d(w|VT)?sdZ[A-Z]u$/) !== null\\\\\\\"; x29 = !(eval(e23)); } else { x29 = b28; } return x29; })(s31, b32, s33) \\\")\";var s36 = (eval(e35)).toString();var x39; if ((s13).match(/^OG(k|OX[a-z]).+j$/) !== null) { x39 = s36; } else { x39 = eval(\"s37\"); } x44 = x39; } else { x44 = s43; } return x44;");
fn45(input_B2, input_S3, input_I2, input_S2, input_S1, input_B1);
