// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((bool(input_string('S2')) != not(not(bool(str(int(((int(str(not(((len(input_string('S1')) in [71, 0, 9, 50, 0, 0, 4, 0]) != (not(not((input_bool('B2') && (int(input_bool('B1')) < (if true then int(input_string('S2')) else int((0 !== input_int('I1')))))))) && input_bool('B2')))))) in [9, 1, 28, 5, 10, 85, 1]) && (int(input_string('S1')) < input_int('I3')))))))))) then input_bool('B2') else bool(int(not(bool(input_int('I1'))))))

var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);

var fn69 = Function('x15', 'b11', 'x46', 's1', 's4', 'b10', "var x62 = x15; var b61 = b10; var s13 = s1; var b3 = (eval(\"s1\")) ? true : false;var s42 = s4; var opts7 = [71, 0, 9, 50, 0, 0, 4, 0];var b6 = false; for (var idx8 = 0; idx8 < opts7.length; idx8++) { if (opts7[idx8] == (s4).length) { b6 = true; } }var e9 = \"b6\";var b29 = b10; var e27 = \"var b24; if (b10) { var e23 = \\\"var x12 = (b11) ? 1 : 0;var b17 = false; if (0 !== eval(\\\\\\\"x15\\\\\\\")) { b17 = true; }var x20; if (true) { x20 = Number(s13); } else { x20 = (b17) | 0; }var b21; if (x12 < x20) { b21 = true; } else { b21 = false; }b21\\\"; b24 = eval(e23); } else { b24 = false; }!(b24)\";var b28 = !(eval(e27));var b34; if (eval(e9) != eval(\"(b28 && eval(\\\"b29\\\"))\")) { b34 = true; } else { b34 = false; }var b36 = !(b34);var x38 = parseInt((b36).toString(), 10);var opts40 = [9, 1, 28, 5, 10, 85, 1];var b39 = opts40.indexOf(x38) > -1;var e44 = \"var e43 = \\\"s42\\\";eval(e43)\";var x45 = parseInt(eval(e44), 10);var b48 = x45 < eval(\"x46\");var e50 = \"b48\";var b51 = b39; var b52 = eval(e50);var x53 = Number(b51 && b52);var b55 = !!('' + (x53));var b56; if (b55) { b56 = false; } else { b56 = true; }var b58; if (b3) { b58 = !!(b56); } else { b58 = !(b56); }var b60 = !(b58);var e66 = \"var b63 = !!(x62);var b64; if (b63) { b64 = false; } else { b64 = true; }Number(b64)\"; return (b60 ? b61 : (eval(e66)) ? true : false);");
fn69(input_I1, input_B1, input_I3, input_S2, input_S1, input_B2);
