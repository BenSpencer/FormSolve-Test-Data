// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B2') != bool(str(input_int('I1')))) then (int((input_string('S3') < str(int(str((if input_bool('B2') then bool(str(input_bool('B3'))) else bool(int(bool((if (int(input_bool('B3')) == len(str((int(input_string('S1')) in [0, 7, 1, 1, 1, 98, 1, 1, 35])))) then int(input_string('S3')) else int(bool(input_string('S2'))))))))))))) < input_int('I2')) else (input_string('S2') === input_string('S2')))

var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");

var fn62 = Function('b40', 's44', 's43', 'b1', 'x54', 's41', 'x2', "var s57 = s43; var b42 = b1; var s3 = String(x2);var b5 = false; if (b1 != (s3) ? true : false) { b5 = true; }var e52 = \"var s7 = s41; function fn39(b32, s31, b8, s34, s33) { var b9 = b32; var s10 = (b9).toString();var b11 = (s10) ? true : false;var x38; if (b8) { x38 = b11; } else { var fn30 = Function('s23', 'b12', 's14', 's26', \\\"var x15 = parseInt(s14, 10);var opts17 = [0, 7, 1, 1, 1, 98, 1, 1, 35];var b16 = false; for (var idx18 = 0; idx18 < opts17.length; idx18++) { if (opts17[idx18] == x15) { b16 = true; } }var b21 = (b12) | 0 == (String(b16)).length;var e24 = \\\\\\\"s23\\\\\\\";var x25 = Number(eval(e24));var x28 = Number(Boolean(s26));var x29; if (b21) { x29 = x25; } else { x29 = x28; } return x29;\\\"); var x36 = (!!(fn30(s31, b32, s33, s34))) ? 1 : 0; x38 = Boolean(x36); } return x38; } var e45 = \\\"fn39(b40, s41, b42, s43, s44)\\\";var x47 = Number(String(eval(e45)));var b49 = s7 < '' + (x47);eval(\\\"b49\\\")\";var b55 = +(eval(e52)); var b56 = x54;var x61; if (b5) { x61 = b55 < b56; } else { var s58 = s57;  x61 = (s57 === s58); } return x61;");
fn62(input_B3, input_S1, input_S2, input_B2, input_I2, input_S3, input_I1);
