// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(input_string('S1')) === int(str((str(not((input_int('I2') != len(str((not(input_bool('B1')) && (bool(int(input_string('S3'))) && input_bool('B2')))))))) === "FHgLn")))) then input_int('I3') else len(str((if input_bool('B3') then not((int((if not((str(input_bool('B3')) >= str(input_int('I3')))) then input_string('S3') else str(not(input_bool('B1'))))) == (if input_bool('B3') then input_int('I1') else input_int('I1')))) else true))))

var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);

var fn60 = Function('b33', 'b43', 'x32', 's1', 's42', 'x3', 'b11', 'x49', "var s8 = s42; var b5 = b43; var x37 = x32; var x2 = parseInt(s1, 10);var e24 = \"var b22 = !(eval(\\\"var l18 = (eval(\\\\\\\"var b6; if (b5) { b6 = false; } else { b6 = true; }var e7 = \\\\\\\\\\\\\\\"b6\\\\\\\\\\\\\\\";var b10 = (parseInt(s8, 10)) ? true : false;var b12; if (b10) {  b12 = b11; } else { b12 = false; }var b14 = false; if (eval(e7) && b12) { b14 = true; }var s16 = (b14).toString();s16\\\\\\\")).length;var b19 = eval(\\\\\\\"x3\\\\\\\") != l18;b19\\\"));var s23 = '' + (b22);s23\";var b25 = false; if (eval(e24) === \"FHgLn\") { b25 = true; }var e28 = \"String(b25)\";var b30 = x2; var b31 = Number(eval(e28));var b35 = b33; var e34 = \"b33\";var b48 = b35; var s38 = (x37).toString();var b39 = String(b35); var b40 = s38;var b44 = !(b43);var x50 = x49; var x52; if (b48) {  x52 = x49; } else { var e51 = \"x50\"; x52 = eval(e51); }var b53 = parseInt((!(b39 >= b40) ? s42 : '' + (b44)), 10); var b54 = x52;var b55 = !(b53 == b54);var s57 = '' + ((eval(e34) ? b55 : true));var l58 = (s57).length;var x59; if (b30 === b31) {  x59 = x32; } else { x59 = l58; } return x59;");
fn60(input_B3, input_B1, input_I3, input_S1, input_S3, input_I2, input_B2, input_I1);
