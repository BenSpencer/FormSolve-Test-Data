// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B3') !== input_bool('B2')) then (str(len(str((int(not(bool(int(bool(input_int('I1')))))) !== input_int('I1'))))) <= str((input_bool('B1') === not(not(bool(input_string('S3'))))))) else bool(int(((input_bool('B3') && not(input_bool('B1'))) == input_bool('B2')))))

var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);

var fn41 = Function('b1', 'x12', 'b2', 's19', 'b18', "var b30 = b1; var b31 = b18; var b35 = b2; var x6 = x12; var b7 = (x6) ? true : false;var x8 = (b7) | 0;var b10 = !(Boolean(x8));var x11 = Number(b10);var b13 = x11; var b14 = x12;var e24 = \"var e20 = \\\"s19\\\";var b22; if (!!(eval(e20))) { b22 = false; } else { b22 = true; }var b23 = !(b22);b23\";var b25 = false; if (b18 === eval(e24)) { b25 = true; }var s27 = '' + (b25);var b28; if ('' + ((String(b13 !== b14)).length) <= s27) { b28 = true; } else { b28 = false; }var b32; if (b31) { b32 = false; } else { b32 = true; }var b33; if (b30 && b32) { b33 = true; } else { b33 = false; }var b36; if (b33) { b36 = b35; } else { b36 = !b35; }var x38 = ~~(b36);var x40; if (eval(\"(b1 !== b2)\")) { x40 = b28; } else { x40 = (x38) ? true : false; } return x40;");
fn41(input_B3, input_I1, input_B2, input_S3, input_B1);
