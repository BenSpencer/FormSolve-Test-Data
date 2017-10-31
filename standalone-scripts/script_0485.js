// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B1') || (not(input_bool('B2')) === not(bool((input_int('I2') * int(input_string('S2'))))))) then input_bool('B2') else input_bool('B2'))

var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);

var fn25 = Function('b1', 's5', 'b2', 'x4', "var b21 = b2; var b23 = b2; var e17 = \"eval(\\\"var b3; if (b2) { b3 = false; } else { b3 = true; }var e12 = \\\\\\\"var e8 = \\\\\\\\\\\\\\\"eval(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"parseInt(s5, 10)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")\\\\\\\\\\\\\\\";x9 = x4; x10 = eval(e8);!!(x9 * x10)\\\\\\\";var b14; if (b3 === !(eval(e12))) { b14 = true; } else { b14 = false; }b14\\\")\";var b19 = b1 || eval(\"eval(e17)\");var e22 = \"b21\";var x24; if (b19) { x24 = eval(e22); } else {  x24 = b23; } return x24;");
fn25(input_B1, input_S2, input_B2, input_I2);
