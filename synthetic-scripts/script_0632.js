// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(input_bool('B2'))) then (((str(input_bool('B3')) === str(input_bool('B2'))) && (not(not(((str(int(input_string('S1'))) != "g5") == input_bool('B2')))) !== not(input_bool('B2')))) === input_bool('B2')) else (if bool(input_int('I3')) then input_bool('B1') else bool(str(input_int('I1')))))

var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");

var fn44 = Function('b5', 'x36', 'b1', 'x39', 's12', 'b38', "var b17 = b1; var s40 = String(x39);var b41 = (s40) ? true : false;var x43; if (eval(\"var x2 = Number(b1);Boolean(x2)\")) { var b32 = b17; var e31 = \"var b8 = b17; var e28 = \\\"var b24 = b17; var e21 = \\\\\\\"var x13 = parseInt(s12, 10);var b15 = (x13).toString(); var b16 = \\\\\\\\\\\\\\\"g5\\\\\\\\\\\\\\\";var b19; if (b15 != b16) { if (eval(\\\\\\\\\\\\\\\"b17\\\\\\\\\\\\\\\")) { b19 = true; } else { b19 = false; } } else { if (eval(\\\\\\\\\\\\\\\"b17\\\\\\\\\\\\\\\")) { b19 = false; } else { b19 = true; } }b19\\\\\\\";var b22 = !(eval(e21));var b23; if (b22) { b23 = false; } else { b23 = true; }(b23 !== !(b24))\\\";var b29; if (eval(e28)) { var e6 = \\\"b5\\\";var s9 = (b8).toString();var b10 = false; if ((eval(e6)).toString() === s9) { b10 = true; } b29 = b10; } else { b29 = false; }b29\";var e33 = \"b32\";var b34 = eval(e31); var b35 = eval(e33); x43 = b34 === b35; } else { x43 = (Boolean(x36) ? b38 : b41); } return x43;");
fn44(input_B3, input_I3, input_B2, input_I1, input_S1, input_B1);
