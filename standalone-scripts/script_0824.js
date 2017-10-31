// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then input_string('S2') else str((input_bool('B2') && bool((if (if not(bool(input_int('I2'))) then input_bool('B1') else not(not((input_bool('B3') == bool(input_int('I2')))))) then int(bool(int(str(int(input_string('S2')))))) else input_int('I1'))))))

var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);

var fn32 = Function('b8', 'x4', 'b7', 'b1', 'x24', 's16', "var s2 = s16; var b3 = b1; var x9 = x4; var b5 = Boolean(x4);var b11 = false; if (b8 == (x9) ? true : false) { b11 = true; }var b13 = !(b11);var b14; if (b13) { b14 = false; } else { b14 = true; }var x15; if (!(b5)) {  x15 = b7; } else { x15 = b14; }var e25 = \"x24\";var x26; if (x15) { var e20 = \"eval(\\\"var x17 = Number(s16);String(x17)\\\")\";var x23 = (!!(parseInt(eval(e20), 10))) | 0; x26 = x23; } else { x26 = eval(e25); }var b28; if ((x26) ? true : false) {  b28 = b3; } else { b28 = false; }var s30 = String(b28); return (b1 ? s2 : s30);");
fn32(input_B3, input_I2, input_B1, input_B2, input_I1, input_S2);
