// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(not(bool(len(str(len(input_string('S2'))))))) !== len(str(int((str(input_bool('B3')) === str(int(str(int(str((if (int(str(not(not((int(str(input_bool('B1'))) in [0, 0, 1, 1, 0, 3, 3, 75, 76, 5]))))) === input_int('I1')) then input_bool('B2') else input_bool('B2')))))))))))) then str(int((input_bool('B3') === bool(input_int('I1'))))) else input_string('S1'))

var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");

var fn57 = Function('s1', 's55', 'x23', 'b45', 'b11', 'b26', "var x46 = x23; var b9 = b45; var x56; if (eval(\"var l2 = (s1).length;var s3 = '' + (l2);var l4 = (s3).length;var b7 = !((eval(\\\"l4\\\")) ? true : false);var e38 = \\\"var s10 = '' + (b9);var e34 = \\\\\\\"var b27 = b26; var e18 = \\\\\\\\\\\\\\\"eval(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"var s12 = (b11).toString();var opts15 = [0, 0, 1, 1, 0, 3, 3, 75, 76, 5];var b14 = false; for (var idx16 = 0; idx16 < opts15.length; idx16++) { if (opts15[idx16] == Number(s12)) { b14 = true; break; } }b14\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")\\\\\\\\\\\\\\\";var b20 = !(!(eval(e18)));var x22 = Number(String(b20));var b24 = x22 === x23;var x28; if (b24) {  x28 = b26; } else {  x28 = b27; }var x33 = Number('' + (parseInt(eval(\\\\\\\\\\\\\\\"'' + (x28)\\\\\\\\\\\\\\\"), 10)));x33\\\\\\\";var b36 = false; if (s10 === String(eval(e34))) { b36 = true; }b36\\\";var x39 = (eval(e38)) | 0;var l41 = (String(x39)).length;var b42 = false; if (+(b7) !== l41) { b42 = true; }b42\")) { var b47 = !!(x46);var x50 = Number((b45 === b47));var e52 = \"eval(\\\"x50\\\")\"; x56 = eval(\"(eval(e52)).toString()\"); } else { x56 = s55; } return x56;");
fn57(input_S2, input_S1, input_I1, input_B3, input_B1, input_B2);
