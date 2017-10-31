// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (bool((if input_bool('B2') then str((input_int('I3') != (int(((input_bool('B1') === bool(input_string('S2'))) == bool(int(input_bool('B3'))))) + len(input_string('S3'))))) else str(input_bool('B1')))) !== input_bool('B1')) then input_bool('B2') else not(not(bool(str(input_bool('B1'))))))

var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);

var fn42 = Function('b9', 's5', 's16', 'b24', 'b1', 'x2', "var b34 = b24; var b33 = b1; var b38 = !(!!(String(eval(\"b34\"))));var e39 = \"b38\";var b40 = !(eval(e39));var x41; if (eval(\"var e31 = \\\"var b28 = b24; var b3 = b24; var x26; if (b1) { var b6 = (s5) ? true : false;var b7 = eval(\\\\\\\"b3\\\\\\\"); var b8 = b6;var x10 = ~~(b9);var b12; if (b7 === b8 == (x10) ? true : false) { b12 = true; } else { b12 = false; }var x15 = (eval(\\\\\\\"b12\\\\\\\")) | 0;var e18 = \\\\\\\"(s16).length\\\\\\\";x19 = x15; x20 = eval(e18); x26 = '' + ((x2 != x19 + x20)); } else { x26 = (b24).toString(); }var b27 = (x26) ? true : false;var b29 = b27 !== b28;b29\\\";eval(e31)\")) {  x41 = b33; } else { x41 = b40; } return x41;");
fn42(input_B3, input_S2, input_S3, input_B1, input_B2, input_I3);
