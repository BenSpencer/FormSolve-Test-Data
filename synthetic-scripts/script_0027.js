// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((if (9 == int(input_bool('B2'))) then int(not(((input_bool('B1') !== bool((if input_bool('B1') then str(bool(int(str(int((input_int('I1') in [15, 1, 0, -19, 31, 5])))))) else input_string('S1')))) != input_bool('B1')))) else input_int('I1')) in [0, 78, 10, 125, 0]) then input_bool('B2') else input_bool('B1'))

var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);

var fn37 = Function('b1', 's18', 'x29', 'b24', "var b34 = b1; var b35 = b24; var x8 = x29; var b3 = 9 == Number(b1);var b5 = b24; var b7 = b5; var b21 = (eval(\"var x19; if (b7) { var s14 = '' + (Number(eval(\\\"var opts10 = [15, 1, 0, -19, 31, 5];opts10.indexOf(x8) > -1\\\")));var s17 = String(!!(parseInt(s14, 10))); x19 = s17; } else {  x19 = s18; }x19\")) ? true : false;var b22 = false; if (eval(\"b5\") !== b21) { b22 = true; }var b25 = false; if (b22 != b24) { b25 = true; }var b27; if (b25) { b27 = false; } else { b27 = true; }var x28 = (b27) | 0;var opts32 = [0, 78, 10, 125, 0];var b31 = false; for (var idx33 = 0; idx33 < opts32.length; idx33++) { if (opts32[idx33] == (b3 ? x28 : x29)) { b31 = true; } }var x36; if (b31) {  x36 = b34; } else { x36 = b35; } return x36;");
fn37(input_B2, input_S1, input_I1, input_B1);
