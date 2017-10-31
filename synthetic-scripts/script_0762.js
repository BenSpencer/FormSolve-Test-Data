// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B3') != input_bool('B2')) then str(bool((if ((if input_bool('B3') then input_bool('B2') else (bool(input_int('I1')) === input_bool('B1'))) || input_bool('B2')) then "ElpvN" else str(int(((input_int('I3') - input_int('I1')) == (int(bool(int(input_bool('B3')))) - input_int('I1')))))))) else str(int(input_string('S1'))))

var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn48 = Function('b12', 's43', 'b1', 'x10', 'b16', 'x20', "var b28 = b1; var b5 = b16; var b6 = eval(\"eval(\\\"var e2 = \\\\\\\"b1\\\\\\\";eval(e2)\\\")\") != b5;var x21 = x10; var b8 = b28; var b9 = b16; var x15; if (b8) {  x15 = b9; } else { var b11 = !!(x10);var b13; if (b11 === b12) { b13 = true; } else { b13 = false; } x15 = b13; }var b17 = x15; var b18 = b16;var x40; if (eval(\"b17 || b18\")) { x40 = \"ElpvN\"; } else { var x33 = x21; var e25 = \"var e24 = \\\"var e23 = \\\\\\\"var e22 = \\\\\\\\\\\\\\\"x21\\\\\\\\\\\\\\\";eval(e22)\\\\\\\";eval(e23)\\\";eval(e24)\";x26 = x20; x27 = eval(e25);x34 = (!!((eval(\"b28\")) ? 1 : 0)) | 0 - x33; x40 = (Number((x26 - x27 == x34))).toString(); }var s42 = (Boolean(x40)).toString();var e46 = \"(Number(s43)).toString()\"; return (b6 ? s42 : eval(e46));");
fn48(input_B1, input_S1, input_B3, input_I1, input_B2, input_I3);
