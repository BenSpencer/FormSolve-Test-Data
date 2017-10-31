// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then (int(str((if bool(input_string('S3')) then input_bool('B3') else (if not(((if bool(input_string('S2')) then int((str(input_bool('B2')) in ['tS', '0m', 'I', '', 'SFP', '', '6YlOt', 'N1H9', 'hpu'])) else 14) == int(str((if not((input_int('I3') !== int(str(int(input_bool('B1')))))) then input_int('I3') else int((input_string('S3') + input_string('S2')))))))) then input_bool('B2') else not(input_bool('B1')))))) >= len(input_string('S3'))) else input_bool('B2'))

var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");

var fn56 = Function('s28', 'b40', 'x17', 's2', 'b1', 'b4', "var b18 = b1; var b54 = b40; var x55; if (b1) { var s48 = s2; var s27 = s2; var x45; if (Boolean(s2)) {  x45 = b4; } else {  x45 = eval(\"var b41 = b18; var b8 = b40; var s5 = s28; var e15 = \\\"var e6 = \\\\\\\"s5\\\\\\\";var b7 = (eval(e6)) ? true : false;var opts11 = ['tS', '0m', 'I', '', 'SFP', '', '6YlOt', 'N1H9', 'hpu'];var b10 = false; for (var idx12 = 0; idx12 < opts11.length; idx12++) { if (opts11[idx12] == '' + (b8)) { b10 = true; break; } }var x13 = (b10) | 0;var x14; if (b7) { x14 = x13; } else {  x14 = 14; }x14\\\";var e16 = \\\"eval(e15)\\\";var x26 = x17; var x19 = (b18) | 0;var s20 = String(x19);var x21 = parseInt(s20, 10);var e22 = \\\"x21\\\";var b23 = x17 !== eval(e22);var x32 = Number(eval(\\\"var x29 = s27 + s28;x29\\\"));var x33; if (!(b23)) { x33 = x26; } else { x33 = x32; }var e34 = \\\"x33\\\";var s35 = '' + (eval(e34));var x36 = parseInt(s35, 10);var b37 = eval(e16) == x36;var b39 = !(b37);var x43; if (b39) { x43 = b40; } else { var b42; if (b41) { b42 = false; } else { b42 = true; } x43 = b42; }x43\"); }var s46 = String(x45);var e50 = \"eval(\\\"s48\\\")\";var b52 = parseInt(s46, 10); var b53 = (eval(e50)).length; x55 = b52 >= b53; } else {  x55 = b54; } return x55;");
fn56(input_S2, input_B2, input_I3, input_S3, input_B1, input_B3);
