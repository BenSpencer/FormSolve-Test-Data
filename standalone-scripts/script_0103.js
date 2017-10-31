// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then (if input_bool('B3') then bool(str((input_int('I3') >= int(input_string('S1'))))) else (len((if not(bool(int(bool(input_int('I3'))))) then (if input_bool('B1') then input_string('S1') else input_string('S3')) else str(regex-test(str(input_bool('B2')), /^\W([-_ ] l|Nr)?$/)))) != input_int('I3'))) else (if (int(str(bool(int((input_int('I3') != input_int('I2')))))) == input_int('I3')) then regex-test(input_string('S1'), /^e[0-9](m|\d)+-Q$/) else bool(input_int('I3'))))

var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn54 = Function('s20', 's18', 'b1', 'b2', 'x34', 'b22', 'x11', "var b16 = b1; var x33 = x11; var s47 = s18; var x50 = x33; var x44 = x33; var s42 = (eval(\"(eval(\\\"var b35 = false; if (x33 != x34) { b35 = true; }var e38 = \\\\\\\"(b35) ? 1 : 0\\\\\\\";eval(e38)\\\")) ? true : false\")).toString();var x43 = parseInt(s42, 10);var b45; if (x43 == x44) { b45 = true; } else { b45 = false; }var re48 = /^e[0-9](m|\\d)+-Q$/;var e49 = \"re48.test(s47)\";var b51 = Boolean(x50);var x52; if (b45) { x52 = eval(e49); } else { x52 = b51; }var x53; if (b1) { x53 = eval(\"var x3 = x11; var s4 = s18; var x31; if (b2) {  x31 = eval(\\\"('' + ((x3 >= Number(s4)))) ? true : false\\\"); } else { var x28 = x11; var x13 = (!!(x11)) | 0;var b14 = Boolean(x13);var b15; if (b14) { b15 = false; } else { b15 = true; }var e17 = \\\"b16\\\";var x21; if (eval(e17)) { x21 = eval(\\\"s18\\\"); } else { x21 = s20; }var re24 = new RegExp(\\\"^\\\\\\\\W([-_ ] l|Nr)?$\\\");var s25 = (re24.test('' + (b22))).toString(); x31 = (((b15 ? x21 : s25)).length != x28); }x31\"); } else { x53 = x52; } return x53;");
fn54(input_S3, input_S1, input_B1, input_B3, input_I2, input_B2, input_I3);
