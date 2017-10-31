// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool((if regex-test(str(input_bool('B2')), /^\WR[0-9]djY\no(m|W)\r*i$/) then int(input_string('S2')) else input_int('I3'))) then input_int('I3') else (if bool((len(str(input_int('I3'))) * input_int('I1'))) then int(input_bool('B1')) else int(input_bool('B1'))))

var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);

var fn27 = Function('b1', 'x10', 'x15', 's4', 'b19', "var x12 = x10; var x7 = x10; var re3 = /^\\WR[0-9]djY\\no(m|W)\\r*i$/;var e6 = \"Number(s4)\";var x8; if (re3.test((b1).toString())) { x8 = eval(e6); } else { x8 = x7; }var b9 = !!(x8);var b22 = b19; var l14 = ('' + (x12)).length;var b18 = Boolean((l14 * x15));var x21 = Number(eval(\"b19\"));var x26; if (b9) { x26 = eval(\"x10\"); } else { x26 = (b18 ? x21 : (eval(\"b22\")) | 0); } return x26;");
fn27(input_B2, input_I3, input_I1, input_S2, input_B1);
