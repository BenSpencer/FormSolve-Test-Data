// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then int(((if bool(str(not(input_bool('B3')))) then bool((int(input_string('S1')) + int(bool(input_int('I2'))))) else input_bool('B1')) === ((if input_bool('B3') then input_string('S1') else "T3n") <= input_string('S2')))) else int(input_bool('B3')))

var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");

var fn32 = Function('s23', 'b1', 'b2', 'x8', 'b18', 's21', "var b29 = b2; var x31; if (b1) { var b20 = b2; var s6 = s21; var b3; if (b2) { b3 = false; } else { b3 = true; }var s4 = '' + (b3);var x19; if ((s4) ? true : false) { var x7 = Number(s6);x15 = x7 + eval(\"eval(\\\"~~(eval(\\\\\\\"var e10 = \\\\\\\\\\\\\\\"Boolean(x8)\\\\\\\\\\\\\\\";eval(e10)\\\\\\\"))\\\")\");var b17 = Boolean(x15); x19 = b17; } else {  x19 = b18; }var x22; if (b20) {  x22 = s21; } else { x22 = \"T3n\"; }var b24 = x22; var b25 = s23;var b26 = false; if (x19 === b24 <= b25) { b26 = true; } x31 = (b26) | 0; } else { var x30 = (b29) ? 1 : 0; x31 = x30; } return x31;");
fn32(input_S2, input_B2, input_B3, input_I2, input_B1, input_S1);
