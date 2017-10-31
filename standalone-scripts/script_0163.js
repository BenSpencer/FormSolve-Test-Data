// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((if input_bool('B2') then bool(str((regex-test(str((len(input_string('S3')) >= int(str(len(str(input_int('I3'))))))), /^(l|[-_ ])?$/) == (input_int('I1') in [1, 7, 0, 1, 2, 1])))) else (input_string('S1') > input_string('S2')))) then str(not(input_bool('B2'))) else input_string('S3'))

var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");

var fn35 = Function('x16', 'x6', 's24', 's2', 'b1', 's25', "var s33 = s2; var b30 = b1; var x11 = Number(eval(\"var l8 = ((x6).toString()).length;var s9 = (l8).toString();s9\"));var b12 = false; if (eval(\"var l3 = (s2).length;var e4 = \\\"l3\\\";eval(e4)\") >= x11) { b12 = true; }var opts18 = [1, 7, 0, 1, 2, 1];var b17 = false; for (var idx19 = 0; idx19 < opts18.length; idx19++) { if (opts18[idx19] == x16) { b17 = true; break; } }var b20; if ((String(b12)).match(/^(l|[-_ ])?$/) !== null) { b20 = b17; } else { b20 = !b17; }var b23 = !!((b20).toString());var x28; if (b1) { x28 = b23; } else { var b26 = s24 > s25; x28 = b26; }var b29 = !(x28);var s32 = (!(b30)).toString();var x34; if (b29) { x34 = s32; } else {  x34 = s33; } return x34;");
fn35(input_I1, input_I3, input_S1, input_S3, input_B2, input_S2);
