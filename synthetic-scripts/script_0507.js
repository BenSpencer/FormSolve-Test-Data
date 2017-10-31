// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not(regex-test(input_string('S2'), /^([0-9]+p|h)f\t$/))) then (if false then bool(input_string('S2')) else bool(input_string('S2'))) else (int(bool(input_int('I1'))) < input_int('I1')))

var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);

var fn19 = Function('x11', 's1', "var s6 = s1; var b4; if (eval(\"(s1).match(/^([0-9]+p|h)f\\\\t$/) !== null\")) { b4 = false; } else { b4 = true; }var s8 = s6; var b7 = (s6) ? true : false;var x10; if (false) { x10 = b7; } else { var b9 = !!(s8); x10 = b9; }var x15 = x11; var x14 = (Boolean(eval(\"x11\"))) ? 1 : 0;var b16; if (x14 < x15) { b16 = true; } else { b16 = false; } return (!(b4) ? x10 : b16);");
fn19(input_I1, input_S2);
