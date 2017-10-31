// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then (if ((input_int('I3') > int(bool(input_int('I2')))) != (str(int(input_bool('B1'))) in ['', 'Sra', '', '', 'hZf', 'jpu3o'])) then bool(int(input_string('S2'))) else (if bool(int(not((input_string('S2') == input_string('S1'))))) then bool(int(input_string('S3'))) else (str(int(input_string('S3'))) > input_string('S1')))) else bool(str(not(not(not(input_bool('B2')))))))

var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn48 = Function('s22', 'b8', 's28', 'x3', 's17', 'x2', 'b1', "var b41 = b1; var s21 = s17; var b4 = (x3) ? true : false;var x5 = Number(b4);var b6 = x2 > x5;var b15 = b6 != eval(\"var x9 = (b8) | 0;var s10 = '' + (x9);var opts12 = ['', 'Sra', '', '', 'hZf', 'jpu3o'];opts12.indexOf(s10) > -1\");var x18 = parseInt(s17, 10);var b19 = (x18) ? true : false;var e20 = \"b19\";var e39 = \"var s32 = s28; var s35 = s22; var b25 = !((s21 == s22));var b27 = ((b25) ? 1 : 0) ? true : false;var e29 = \\\"s28\\\";var x30 = parseInt(eval(e29), 10);var b31 = Boolean(x30);var s34 = (Number(s32)).toString();var b36 = s34; var b37 = s35;(b27 ? b31 : b36 > b37)\";var x40; if (b15) { x40 = eval(e20); } else { x40 = eval(e39); }var b42; if (b41) { b42 = false; } else { b42 = true; }var b44 = !(!(b42));var b46 = Boolean(String(b44));var x47; if (b1) { x47 = x40; } else { x47 = b46; } return x47;");
fn48(input_S1, input_B1, input_S3, input_I2, input_S2, input_I3, input_B2);
