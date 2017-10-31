// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I3')) then str(int((if (if (bool(int(bool(regex-replace(input_string('S3'), /(\w|[-_ ]L)+\S/, "DfpnB")))) !== (input_string('S2') !== input_string('S1'))) then bool(str(input_int('I3'))) else bool(input_string('S1'))) then input_string('S3') else input_string('S1')))) else input_string('S3'))

var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);

var fn33 = Function('s23', 's11', 'x1', 's12', "var s31 = s23; var x17 = x1; var b3 = (eval(\"x1\")) ? true : false;var x32; if (eval(\"b3\")) { var s5 = s23; var s25 = s12; var s20 = s12; var s6 = (s5).replace(/(\\w|[-_ ]L)+\\S/, \"DfpnB\");var b8 = !!(s6);var x9 = ~~(b8);var b10 = (x9) ? true : false;var b13 = s11; var b14 = s12;var s18 = '' + (x17);var x22; if ((b10 !== b13 !== b14)) { x22 = Boolean(s18); } else { x22 = !!(s20); }var x26; if (x22) {  x26 = eval(\"s23\"); } else { x26 = s25; }var x27 = parseInt(x26, 10);var e29 = \"eval(\\\"x27\\\")\";var s30 = '' + (eval(e29)); x32 = s30; } else { x32 = s31; } return x32;");
fn33(input_S3, input_S2, input_I3, input_S1);
