// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if (if (bool(input_int('I3')) && (input_string('S1') in ['KPLc4', 'x', ''])) then (input_string('S3') == str(input_int('I2'))) else bool(input_int('I1'))) then (if (input_string('S1') <= input_string('S3')) then bool(input_string('S2')) else (input_string('S2') != str(input_bool('B1')))) else not(bool(str(input_int('I2'))))) then str(input_bool('B1')) else input_string('S1'))

var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);

var fn45 = Function('x1', 'x15', 's10', 'b27', 'x11', 's18', 's22', "var b38 = b27; var s42 = s18; var s19 = s10; var x32 = x11; var s4 = s18; var e2 = \"x1\";var opts6 = ['KPLc4', 'x', ''];var b5 = false; for (var idx7 = 0; idx7 < opts6.length; idx7++) { if (opts6[idx7] == s4) { b5 = true; } }var b8 = Boolean(eval(e2)); var b9 = b5;var x17; if (b8 && b9) {  x17 = (s10 == String(x11)); } else { x17 = !!(x15); }var s26 = s22; var s28 = (b27).toString();var x31; if ((s18 <= s19)) { x31 = eval(\"eval(\\\"(s22) ? true : false\\\")\"); } else { x31 = (s26 != s28); }var e36 = \"var b34 = !!(String(x32));!(b34)\";var x44; if ((x17 ? x31 : eval(e36))) { x44 = eval(\"var e39 = \\\"b38\\\";var s40 = (eval(e39)).toString();s40\"); } else { x44 = eval(\"s42\"); } return x44;");
fn45(input_I3, input_I1, input_S3, input_B1, input_I2, input_S1, input_S2);
