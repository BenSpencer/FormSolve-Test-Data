// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((if input_bool('B2') then len(input_string('S1')) else int(input_string('S2'))) <= input_int('I3')) then str((if input_bool('B3') then input_bool('B3') else bool(int(str(int((if bool(input_string('S2')) then (int(bool(int(input_string('S3')))) !== len(str(int(input_string('S2'))))) else (if bool(int(input_string('S3'))) then not(input_bool('B2')) else not(input_bool('B1')))))))))) else "541q")

var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn49 = Function('b11', 's10', 's19', 'x12', 's17', 'b36', 'b15', "var s9 = s17; var b34 = b11; var fn8 = Function('s5', 's2', 'b1', \"var x6 = Number(s5);var x7; if (b1) { var e4 = \\\"(s2).length\\\"; x7 = eval(e4); } else { x7 = x6; } return x7;\"); var b13 = fn8(s9, s10, b11) <= x12;var x48; if (b13) { var e46 = \"var e45 = \\\"var b16 = b15; var x44; if (b15) { x44 = b16; } else { var s24 = s17; var s30 = s19; var x39; if (!!(s17)) { var x20 = parseInt(s19, 10);var b21 = (x20) ? true : false;var e22 = \\\\\\\"b21\\\\\\\";var x23 = (eval(e22)) ? 1 : 0;var x25 = parseInt(s24, 10);var s26 = String(x25);var b28 = false; if (x23 !== (s26).length) { b28 = true; } x39 = b28; } else { var x32 = Number(eval(\\\\\\\"s30\\\\\\\"));var b33 = Boolean(x32);var b37; if (b36) { b37 = false; } else { b37 = true; }var x38; if (b33) { var b35 = !(b34); x38 = b35; } else { x38 = b37; } x39 = x38; }var b43 = !!(parseInt(((x39) | 0).toString(), 10)); x44 = b43; }x44\\\";eval(e45)\"; x48 = (eval(e46)).toString(); } else {  x48 = \"541q\"; } return x48;");
fn49(input_B2, input_S1, input_S3, input_I3, input_S2, input_B1, input_B3);
