// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then (if input_bool('B1') then input_int('I1') else int(str((input_string('S3') <= str((not(bool(len(str(int((if input_bool('B1') then bool(str((not((input_bool('B1') || input_bool('B1'))) === bool(int(input_string('S2')))))) else false)))))) !== (input_string('S3') >= input_string('S1')))))))) else int(input_bool('B3')))

var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");

var fn48 = Function('s14', 'x3', 'b1', 'b45', 's32', 's31', 'b2', "var b7 = b2; var x43; if (b2) { var e4 = \"x3\"; x43 = eval(e4); } else { var s5 = s31; var e6 = \"s5\";var e37 = \"var b8 = b7; var b9 = b8; var b11; if (b8 || eval(\\\"b9\\\")) { b11 = true; } else { b11 = false; }var b13 = !(b11);var e17 = \\\"var b16 = !!(parseInt(s14, 10));b16\\\";var b18 = false; if (b13 === eval(e17)) { b18 = true; }var b22 = !!(eval(\\\"(b18).toString()\\\"));var x23; if (b7) { x23 = b22; } else { x23 = false; }var x24 = +(x23);var s25 = '' + (x24);var e27 = \\\"(s25).length\\\";var b28 = Boolean(eval(e27));var e30 = \\\"!(b28)\\\";var b33; if (s31 >= s32) { b33 = true; } else { b33 = false; }var b35 = false; if (eval(e30) !== b33) { b35 = true; }b35\";var b39; if (eval(e6) <= (eval(e37)).toString()) { b39 = true; } else { b39 = false; }var s41 = String(b39);var x42 = Number(s41); x43 = x42; }var x47; if (b1) { x47 = eval(\"x43\"); } else {  x47 = (b45) | 0; } return x47;");
fn48(input_S2, input_I1, input_B2, input_B3, input_S1, input_S3, input_B1);
