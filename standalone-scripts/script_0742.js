// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if regex-test(input_string('S1'), /^MU[-_ ](P|C)+$/) then int((if ((input_string('S2') != input_string('S2')) === bool(len(input_string('S1')))) then not(bool((len(str(input_int('I3'))) / int(input_bool('B2'))))) else input_bool('B3'))) else input_int('I3'))

var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);

var fn31 = Function('x14', 's1', 'b26', 's3', 'b19', "var x29 = x14; var s9 = s1; var re2 = /^MU[-_ ](P|C)+$/;var x30; if (re2.test(s1)) { var s6 = s3; var b12 = (eval(\"var e4 = \\\"s3\\\";eval(e4)\") != s6); var b13 = Boolean((s9).length);var x27; if (b12 === b13) { x27 = eval(\"var e15 = \\\"x14\\\";var e16 = \\\"eval(e15)\\\";var l18 = ('' + (eval(e16))).length;x21 = l18; x22 = +(b19);var b23 = Boolean(x21 / x22);var b24 = !(b23);b24\"); } else { x27 = b26; }var x28 = (x27) | 0; x30 = x28; } else {  x30 = x29; } return x30;");
fn31(input_I3, input_S1, input_B3, input_S2, input_B2);
