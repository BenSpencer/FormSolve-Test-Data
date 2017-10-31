// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B2') !== bool((if ((if input_bool('B3') then ((input_string('S2') in ['', 'V3C', 'm', 'lF', '', 'pH', 'P', 'yBRmZ']) !== not(not((len(str(bool(input_string('S1')))) < int((input_string('S3') == str(int(not(bool(input_int('I3'))))))))))) else input_bool('B1')) || bool(input_string('S3'))) then input_string('S2') else input_string('S1')))) then input_bool('B1') else bool(str(input_int('I1'))))

var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");

var fn48 = Function('s38', 'b30', 's3', 'x13', 'b1', 's12', 'b2', 'x44', "var b43 = b30; var s37 = s3; var s8 = s38; var s33 = s12; var e31 = \"b30\";var x32; if (b2) { var e29 = \"var e4 = \\\"s3\\\";var opts6 = ['', 'V3C', 'm', 'lF', '', 'pH', 'P', 'yBRmZ'];var b5 = false; for (var idx7 = 0; idx7 < opts6.length; idx7++) { if (opts6[idx7] == eval(e4)) { b5 = true; break; } }var b9 = (s8) ? true : false;var s10 = '' + (b9);var s19 = ((!(eval(\\\"var b14 = Boolean(x13);eval(\\\\\\\"b14\\\\\\\")\\\"))) ? 1 : 0).toString();var b20 = false; if (s12 == s19) { b20 = true; }var b23; if ((s10).length < (b20) | 0) { b23 = true; } else { b23 = false; }var b25; if (b23) { b25 = false; } else { b25 = true; }var b27 = false; if (b5 !== !(b25)) { b27 = true; }b27\"; x32 = eval(e29); } else { x32 = eval(e31); }var b34 = (s33) ? true : false;var b35; if (x32) { b35 = true; } else { b35 = b34; }var x39; if (b35) { x39 = s37; } else { x39 = s38; }var b40 = !!(x39);var b41; if (b1 !== b40) { b41 = true; } else { b41 = false; }var b46 = ((x44).toString()) ? true : false; return (b41 ? b43 : b46);");
fn48(input_S1, input_B1, input_S2, input_I3, input_B2, input_S3, input_B3, input_I1);
