// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(not((input_bool('B1') === bool(input_string('S1')))))) then not((str(bool(int(bool((if input_bool('B2') then input_int('I2') else int(input_bool('B1'))))))) < str(int(not(input_bool('B3')))))) else (not(input_bool('B3')) == input_bool('B1')))

var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);

var fn40 = Function('x15', 'b14', 's2', 'b1', 'b23', "var b31 = b23; var b16 = b1; var b35 = b1; var x39; if (eval(\"var e12 = \\\"eval(\\\\\\\"eval(\\\\\\\\\\\\\\\"var b3 = Boolean(s2);var b4 = false; if (b1 === b3) { b4 = true; }var b6 = !(b4);var x7 = (b6) | 0;var b8 = Boolean(x7);var e9 = \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"b8\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";eval(e9)\\\\\\\\\\\\\\\")\\\\\\\")\\\";eval(e12)\")) { var b24 = !(b23);var x25 = ~~(b24);var e27 = \"'' + (x25)\";var b30; if (('' + (!!(~~(((b14 ? x15 : ~~(b16))) ? true : false))) < eval(e27))) { b30 = false; } else { b30 = true; } x39 = b30; } else { var e38 = \"var e32 = \\\"b31\\\";var b36 = false; if (eval(\\\"!(eval(e32))\\\") == b35) { b36 = true; }b36\"; x39 = eval(e38); } return x39;");
fn40(input_I2, input_B2, input_S1, input_B1, input_B3);
