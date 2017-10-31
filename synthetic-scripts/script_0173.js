// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (not((((len(input_string('S1')) * input_int('I3')) <= int(str(input_int('I1')))) === bool(int(((bool(input_string('S2')) && not(not(input_bool('B2')))) !== bool(int(input_string('S1')))))))) == not((input_string('S2') in ['DiaK', '0iT', 'i1', '7Selx', 'bv', 'W', 'se', '', '']))) then str(((if input_bool('B1') then true else (str(input_bool('B2')) <= input_string('S3'))) || bool((input_int('I3') % input_int('I1'))))) else input_string('S3'))

var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);

var fn57 = Function('x47', 'b16', 's43', 's1', 's14', 'x48', 'b40', "var s55 = s43; var x8 = x48; var x5 = x47; var b41 = b16; var s33 = s14; var s21 = s1; var e3 = \"eval(\\\"s1\\\")\";var l4 = (eval(e3)).length;x6 = l4 * x5;var e9 = \"x8\";var s10 = (eval(e9)).toString();var b12 = false; if (x6 <= Number(s10)) { b12 = true; }var e28 = \"var b15 = !!(s14);var b19; if (b15) { var b17; if (b16) { b17 = false; } else { b17 = true; }var b18; if (b17) { b18 = false; } else { b18 = true; } b19 = b18; } else { b19 = false; }var b25; if (b19 !== !!(eval(\\\"Number(s21)\\\"))) { b25 = true; } else { b25 = false; }+(b25)\";var opts35 = ['DiaK', '0iT', 'i1', '7Selx', 'bv', 'W', 'se', '', ''];var b34 = false; for (var idx36 = 0; idx36 < opts35.length; idx36++) { if (opts35[idx36] == s33) { b34 = true; } }var b37; if (b34) { b37 = false; } else { b37 = true; }var b38 = !((b12 === !!(eval(e28)))); var b39 = b37;var s42 = (b41).toString();var b44 = s42 <= s43;var x46; if (b40) { x46 = true; } else { x46 = b44; }var b52; if (x46) { b52 = true; } else { x49 = x47; x50 = x48;var b51 = Boolean(x49 % x50); b52 = b51; }var s54 = '' + (b52);var x56; if (b38 == b39) { x56 = s54; } else {  x56 = s55; } return x56;");
fn57(input_I3, input_B2, input_S3, input_S1, input_S2, input_I1, input_B1);
