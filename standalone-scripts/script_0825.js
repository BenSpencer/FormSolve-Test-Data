// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(input_bool('B3')) then input_bool('B3') else (if (str(((input_int('I1') === (if (input_bool('B2') !== input_bool('B3')) then (len(input_string('S2')) - input_int('I3')) else int(input_string('S1')))) || bool(len(input_string('S2'))))) >= input_string('S1')) then bool(input_int('I3')) else not(bool((if ((len(str((input_string('S1') !== input_string('S3')))) < len(input_string('S2'))) === not((input_int('I3') in [0, 176, 0]))) then input_int('I3') else input_int('I1'))))))

var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);

var fn58 = Function('s15', 'x12', 'x4', 'b6', 's33', 's10', 'b1', "var b3 = b1; var b7 = b1; var b2; if (b1) { b2 = false; } else { b2 = true; }var x51 = x4; var s38 = s10; var x29 = x12; var x42 = x12; var s32 = s15; var s26 = s15; var s20 = s10; var e5 = \"x4\";var x16 = Number(s15);var x17; if ((b6 !== b7)) { x17 = ((s10).length - x12); } else { x17 = x16; }var l21 = (s20).length;var s25 = String(((eval(e5) === x17) || Boolean(l21)));var b27 = s25 >= s26;var x50 = x42; var b34 = false; if (s32 !== s33) { b34 = true; }var s36 = String(b34);var l39 = (s38).length;var b40 = false; if ((s36).length < l39) { b40 = true; }var e46 = \"var opts44 = [0, 176, 0];var b43 = false; for (var idx45 = 0; idx45 < opts44.length; idx45++) { if (opts44[idx45] == x42) { b43 = true; break; } }b43\";var b47; if (eval(e46)) { b47 = false; } else { b47 = true; }var b53 = !!(((b40 === b47) ? x50 : x51));var x56; if (b27) { var b30 = !!(x29);var e31 = \"b30\"; x56 = eval(e31); } else { x56 = !(eval(\"b53\")); }var x57; if (b2) {  x57 = b3; } else { x57 = x56; } return x57;");
fn58(input_S1, input_I3, input_I1, input_B2, input_S3, input_S2, input_B3);
