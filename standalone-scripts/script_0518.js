// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((if input_bool('B3') then not(bool(int(bool(int(input_string('S3')))))) else regex-test(str(int((bool(int(input_string('S1'))) === (input_string('S3') <= str(input_int('I2')))))), /^[a-z]?wka(h|t)*T$/))) then (if input_bool('B2') then ((not(bool(len(str(bool(input_string('S2')))))) || bool(int(input_string('S3')))) != input_bool('B1')) else input_bool('B1')) else true)

var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");

function fn47(b40, s28, b27, s12, b1, x13, s8) {
    var s34 = s12;
    var e26 = "var s2 = s12; var x3 = Number(s2);var b6 = Boolean((!!(x3)) ? 1 : 0);var b7 = !(b6);var e10 = \"var x9 = parseInt(s8, 10);x9\";var b11 = Boolean(eval(e10));var s14 = String(x13);var b15 = s12 <= s14;var b17 = false; if (b11 === b15) { b17 = true; }var x19 = (b17) | 0;var s21 = '' + (eval(\"x19\"));var re22 = /^[a-z]?wka(h|t)*T$/;!((b1 ? b7 : eval(\"re22.test(s21)\")))";
    var b44 = b40;
    return (eval(e26) ? (b27 ? eval("var b29 = !!(s28);var s30 = (b29).toString();var l31 = (s30).length;var b33; if ((l31) ? true : false) { b33 = false; } else { b33 = true; }var e35 = \"s34\";var b38; if (b33) { b38 = true; } else { b38 = (parseInt(eval(e35), 10)) ? true : false; }var b41; if (b38 != b40) { b41 = true; } else { b41 = false; }b41") : b44) : true);
}
fn47(input_B1, input_S2, input_B2, input_S3, input_B3, input_I2, input_S1);
