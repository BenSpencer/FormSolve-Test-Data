// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((int(bool(input_int('I3'))) !== (if input_bool('B3') then input_int('I1') else input_int('I3')))) then (if input_bool('B3') then input_int('I1') else int(((not(not(input_bool('B1'))) != bool(int(not(input_bool('B2'))))) === (input_bool('B1') !== false)))) else input_int('I1'))

var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);

var fn40 = Function('x1', 'b18', 'b11', 'b21', 'x17', "var x38 = x17; var x9 = x17; var b16 = b11; var x10 = x1; var b2 = Boolean(x1);var x3 = (b2) | 0;var e12 = \"(function(x5, x6, b4) { var x7; if (b4) {  x7 = x5; } else { x7 = x6; } return x7; })(x9, x10, b11) \";var b15 = !((x3 !== eval(e12)));var x37; if (b16) { x37 = x17; } else { var b29 = b18; var e30 = \"b29\";var b31 = eval(e30) !== false;var b33 = false; if (eval(\"var b19 = !(b18);var b20; if (b19) { b20 = false; } else { b20 = true; }var e23 = \\\"var b22; if (b21) { b22 = false; } else { b22 = true; }b22\\\";var b25 = Boolean(+(eval(e23)));var b26 = false; if (b20 != b25) { b26 = true; }b26\") === b31) { b33 = true; } x37 = Number(eval(\"b33\")); }var x39; if (b15) { x39 = x37; } else { x39 = x38; } return x39;");
fn40(input_I3, input_B1, input_B3, input_B2, input_I1);
