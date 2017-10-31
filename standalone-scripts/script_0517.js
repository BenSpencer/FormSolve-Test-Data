// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (not(not((bool(str((input_string('S1') != str((len(input_string('S1')) == (0 * int(not(not(bool(str((input_bool('B1') && bool(input_string('S2')))))))))))))) == (len(input_string('S2')) <= int(bool(input_string('S1'))))))) === true) then (bool(input_string('S1')) && bool(input_int('I3'))) else true)

var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");

var fn50 = Function('s27', 's1', 'b4', 'x45', "var s43 = s1; var s5 = s27; var s29 = s1; var s2 = s1; var b6 = !!(s5);var b7; if (b6) { b7 = b4; } else { b7 = false; }var s9 = (b7).toString();var b12; if (Boolean(eval(\"s9\"))) { b12 = false; } else { b12 = true; }var x14 = +(!(b12));x16 = 0; x17 = eval(\"x14\");var s20 = '' + (((s2).length == x16 * x17));var b21 = s1; var b22 = s20;var b25 = Boolean('' + (eval(\"b21 != b22\")));var e26 = \"b25\";var e32 = \"eval(\\\"Boolean(s29)\\\")\";var x34 = +(eval(\"eval(e32)\"));var b37; if (eval(e26)) { b37 = ((s27).length <= x34); } else { b37 = !((s27).length <= x34); }var b41; if (!(!(b37)) === true) { b41 = true; } else { b41 = false; }var b47; if (Boolean(s43)) {  b47 = !!(x45); } else { b47 = false; }var x49; if (b41) { x49 = b47; } else {  x49 = true; } return x49;");
fn50(input_S2, input_S1, input_B1, input_I3);
