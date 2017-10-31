// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (not(input_bool('B1')) || bool(str(input_int('I1')))) then (if (str((if bool(str(int(input_bool('B1')))) then true else bool(input_int('I1')))) > input_string('S1')) then bool((int(input_bool('B2')) + 6)) else ((if bool(input_int('I2')) then bool(int((input_bool('B2') !== (input_bool('B2') === (bool(input_int('I3')) != input_bool('B2')))))) else input_bool('B2')) !== input_bool('B3'))) else (if not(bool(input_int('I1'))) then input_bool('B2') else input_bool('B2')))

var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);

var fn49 = Function('b21', 'b45', 'x12', 'x31', 'b8', 'x27', 's18', "var b29 = b21; var x15; if (!!(String(Number(b8)))) {  x15 = true; } else { x15 = eval(\"!!(x12)\"); }var b19 = '' + (eval(\"x15\")) > s18;var x23 = ~~(eval(\"b21\"));var b26 = Boolean((x23 + 6));var b42 = b29; var x43; if (!!(x27)) { var b30 = b29; var b33 = b30; var b34 = false; if (Boolean(x31) != b33) { b34 = true; }var b36; if (b30 === b34) { b36 = true; } else { b36 = false; }var b38 = b29; var b39 = b36; x43 = Boolean((b38 !== b39) | 0); } else { x43 = b42; } return (b19 ? b26 : (eval(\"x43\") !== b45));");
var fn64 = Function('s56', 'b50', 'x53', 'b51', 'x3', 'b1', 'x55', "var b54 = b1; var x52 = x3; var x57 = x3; var b60 = b50; var b2 = !(b1);var b5 = ((x3).toString()) ? true : false;var x63; if ((b2 || b5)) {  x63 = fn49(b50, b51, x52, x53, b54, x55, s56); } else { var b61 = b60; var b58 = Boolean(x57);var b59 = !(b58);var x62; if (b59) {  x62 = b60; } else { x62 = b61; } x63 = x62; } return x63;");
fn64(input_S1, input_B2, input_I3, input_B3, input_I1, input_B1, input_I2);
