// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (not(bool(int(bool(input_int('I3'))))) == (input_string('S2') >= str((if bool(int(input_string('S1'))) then bool(str(int(bool(input_int('I2'))))) else bool(int(input_string('S1'))))))) then input_int('I3') else input_int('I3'))

var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);

var fn30 = Function('x10', 's16', 's6', 'x1', "var x27 = x1; var x28 = x1; var b2 = (x1) ? true : false;var x3 = +(b2);var b5 = !(Boolean(x3));var b22 = s6 >= eval(\"var s7 = s16; var x8 = Number(s7);var b9 = !!(x8);var x17 = parseInt(s16, 10);var b18 = Boolean(x17);var x19; if (b9) { x19 = eval(\\\"var b11 = !!(x10);var b14 = (String(~~(b11))) ? true : false;b14\\\"); } else { x19 = b18; }var s20 = '' + (x19);s20\");var x29; if ((b5 == eval(\"b22\"))) { x29 = x27; } else { x29 = x28; } return x29;");
fn30(input_I2, input_S1, input_S2, input_I3);
