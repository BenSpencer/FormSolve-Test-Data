// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((input_string('S2') + input_string('S2')) in ['Dn', 'Rsg0', '', '7P', '', 'rsO4e', 'KNuOA']) then not(input_bool('B2')) else not(not((if (input_string('S1') in ['tmQ', 'fy', 'K1c', 'hcX56', 'd', '']) then input_bool('B1') else bool(input_string('S2'))))))

var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn25 = Function('b10', 's12', 's1', 'b16', "var s19 = s1; var s3 = s1; var e2 = \"s1\";var opts8 = ['Dn', 'Rsg0', '', '7P', '', 'rsO4e', 'KNuOA'];var b7 = false; for (var idx9 = 0; idx9 < opts8.length; idx9++) { if (opts8[idx9] == (eval(e2) + eval(\"s3\"))) { b7 = true; break; } }var x24; if (b7) { x24 = !(b10); } else { var opts14 = ['tmQ', 'fy', 'K1c', 'hcX56', 'd', ''];var b13 = false; for (var idx15 = 0; idx15 < opts14.length; idx15++) { if (opts14[idx15] == s12) { b13 = true; } }var e18 = \"eval(\\\"b16\\\")\";var x21; if (b13) { x21 = eval(e18); } else { x21 = !!(s19); }var b22 = !(x21);var b23 = !(b22); x24 = b23; } return x24;");
fn25(input_B2, input_S1, input_S2, input_B1);
