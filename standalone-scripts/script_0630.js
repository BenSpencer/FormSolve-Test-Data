// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I3')) then not(bool((if (not(bool(input_int('I1'))) !== input_bool('B3')) then input_string('S1') else input_string('S1')))) else regex-test(str(not(not((int(input_bool('B3')) === int(bool(input_int('I1'))))))), /^([0-9]*|A)G\seN$/))

var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);

var fn32 = Function('x18', 'b15', 's10', 'x1', "var x3 = x18; var b6 = b15; var b2 = Boolean(x1);var e14 = \"var s9 = s10; var b4 = Boolean(x3);var b5; if (b4) { b5 = false; } else { b5 = true; }var x11; if ((b5 !== b6)) { x11 = s9; } else { x11 = s10; }var b13; if (!!(x11)) { b13 = false; } else { b13 = true; }b13\"; return (b2 ? eval(e14) : eval(\"var e26 = \\\"var e21 = \\\\\\\"(eval(\\\\\\\\\\\\\\\"x18\\\\\\\\\\\\\\\")) ? true : false\\\\\\\";var x22 = +(eval(e21));var b25; if ((eval(\\\\\\\"~~(b15)\\\\\\\") === x22)) { b25 = false; } else { b25 = true; }b25\\\";var b27; if (eval(e26)) { b27 = false; } else { b27 = true; }var s28 = String(b27);(s28).match(/^([0-9]*|A)G\\\\seN$/) !== null\"));");
fn32(input_I1, input_B3, input_S1, input_I3);
