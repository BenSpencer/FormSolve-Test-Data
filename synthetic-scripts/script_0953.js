// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((not(bool(input_string('S1'))) != ((if (if not(input_bool('B1')) then input_bool('B2') else (if input_bool('B1') then (int(str(bool(str(input_int('I3'))))) !== input_int('I2')) else bool(len(input_string('S1'))))) then input_bool('B2') else input_bool('B1')) === regex-test(str(int(input_bool('B3'))), /^gc(\tSEN|[a-z]+\W)$/))) != input_bool('B1')) then "NrFp" else input_string('S3'))

var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);

var fn45 = Function('b30', 's43', 's1', 'x17', 'b11', 'b10', 'x12', "var b40 = b11; var s20 = s1; var e4 = \"var e3 = \\\"eval(\\\\\\\"s1\\\\\\\")\\\";eval(e3)\";var b7; if (eval(\"Boolean(eval(e4))\")) { b7 = false; } else { b7 = true; }var b25 = b10; var b26 = b11; var b8 = b11; var b9; if (b8) { b9 = false; } else { b9 = true; }var x24; if (b9) {  x24 = b10; } else { var s15 = (!!(String(x12))).toString();var x16 = parseInt(s15, 10);var b18 = x16 !== x17;var l21 = (s20).length;var b22 = (l21) ? true : false;var x23; if (b11) { x23 = b18; } else { x23 = b22; } x24 = x23; }var x29; if (x24) {  x29 = b25; } else { var e28 = \"eval(\\\"b26\\\")\"; x29 = eval(e28); }var x32 = +(eval(\"b30\"));var s34 = '' + (eval(\"x32\"));var re35 = /^gc(\\tSEN|[a-z]+\\W)$/;var b36; if (x29 === re35.test(s34)) { b36 = true; } else { b36 = false; }var b38; if (b7 != b36) { b38 = true; } else { b38 = false; }var b41 = b38 != b40;var x44; if (b41) { x44 = \"NrFp\"; } else { x44 = s43; } return x44;");
fn45(input_B3, input_S3, input_S1, input_I2, input_B1, input_B2, input_I3);
