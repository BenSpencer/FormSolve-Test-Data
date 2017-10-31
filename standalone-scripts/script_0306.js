// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if bool(input_int('I3')) then input_bool('B2') else input_bool('B3')) then bool((len(str(int(regex-test(input_string('S2'), /^lZ[0-9]PtAe(N|DRJTC)?k$/)))) / int((input_string('S2') < str(bool(str(not(input_bool('B3'))))))))) else not(regex-test(input_string('S2'), /^(\W|[-_ ]+)FIE$/)))

var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn33 = Function('x1', 'b15', 'b4', 's14', "var s29 = s14; var b5 = b15; var e3 = \"(x1) ? true : false\";var x6; if (eval(e3)) { x6 = b4; } else {  x6 = b5; }var x32; if (eval(\"x6\")) { var s8 = s14; var e9 = \"s8\";var re10 = /^lZ[0-9]PtAe(N|DRJTC)?k$/;var x11 = (re10.test(eval(e9))) ? 1 : 0;x26 = (String(x11)).length / eval(\"var e24 = \\\"var b17 = !(eval(\\\\\\\"b15\\\\\\\"));var b19 = !!((b17).toString());var b21 = false; if (s14 < '' + (b19)) { b21 = true; }var x23 = (b21) ? 1 : 0;x23\\\";eval(e24)\");var b28 = !!(x26); x32 = b28; } else { var re30 = /^(\\W|[-_ ]+)FIE$/;var b31 = !(re30.test(s29)); x32 = b31; } return x32;");
fn33(input_I3, input_B3, input_B2, input_S2);
