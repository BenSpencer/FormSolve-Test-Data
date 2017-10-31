// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (bool(int(str((if input_bool('B2') then input_int('I1') else int(str(input_int('I1'))))))) !== (int((input_bool('B3') !== input_bool('B3'))) === input_int('I3'))) then ((bool(str(input_int('I2'))) && input_bool('B1')) == (int((not(input_bool('B1')) !== bool(int((bool(int(input_bool('B3'))) || (bool(input_int('I3')) && bool(input_int('I2')))))))) in [0, 1, 43])) else false)

var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);

var fn55 = Function('x23', 'b1', 'x17', 'b11', 'x2', 'b26', "var b31 = b11; var x34 = x17; var x3 = x2; var x6; if (b1) { x6 = x2; } else {  x6 = parseInt((x3).toString(), 10); }var s7 = '' + (x6);var b10 = Boolean(eval(\"Number(s7)\"));var b12 = b11; var b13 = b11 !== b12;var b19 = false; if ((eval(\"b13\")) ? 1 : 0 === eval(\"x17\")) { b19 = true; }var b21 = b10; var b22 = b19;var x37 = x23; var b29 = b26; var b27; if (b26) { var b25 = Boolean(String(x23)); b27 = b25; } else { b27 = false; }var b30 = !(b29);var b33 = ((b31) ? 1 : 0) ? true : false;var b38 = !!(x37);var b39; if (b38) { var b36 = Boolean(eval(\"x34\")); b39 = b36; } else { b39 = false; }var b41; if (b33 || b39) { b41 = true; } else { b41 = false; }var b44 = Boolean(Number(b41));var b46 = b30 !== eval(\"b44\");var x48 = Number(b46);var opts50 = [0, 1, 43];var b49 = opts50.indexOf(x48) > -1;var b52 = b27 == b49; return (b21 !== b22 ? b52 : false);");
fn55(input_I2, input_B2, input_I3, input_B3, input_I1, input_B1);
