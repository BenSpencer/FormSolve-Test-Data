// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int((str((int(((if not(bool((if input_bool('B1') then input_int('I1') else int((not(input_bool('B1')) != not((input_int('I2') == input_int('I3')))))))) then int(input_string('S2')) else 2) in [28, 10, 0, 186, 1])) in [3, 58, 11, 64, 94, 172, 0, 196])) !== input_string('S1'))) !== input_int('I1')) then ("yd" !== str(int(str(bool(int(not(input_bool('B2')))))))) else (str(input_bool('B2')) != input_string('S1')))

var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);

var fn56 = Function('s20', 's32', 'b1', 'x9', 'b39', 'x8', 'x2', "var b50 = b39; var s52 = s32; var x36 = x2; var b4 = b1; var e3 = \"x2\";var b19; if (((b1 ? eval(e3) : Number(eval(\"var e6 = \\\"var e5 = \\\\\\\"b4\\\\\\\";eval(e5)\\\";var b10 = x8; var b11 = x9;var b12 = !(b10 == b11);var b13; if (!(eval(e6))) { if (b12) { b13 = false; } else { b13 = true; } } else { if (b12) { b13 = true; } else { b13 = false; } }b13\")))) ? true : false) { b19 = false; } else { b19 = true; }var x21 = Number(s20);var e23 = \"(b19 ? x21 : 2)\";var opts25 = [28, 10, 0, 186, 1];var x27 = (opts25.indexOf(eval(e23)) > -1) ? 1 : 0;var opts29 = [3, 58, 11, 64, 94, 172, 0, 196];var b28 = opts29.indexOf(x27) > -1;var s31 = '' + (b28);var b33 = false; if (s31 !== s32) { b33 = true; }var b37; if (+(b33) !== x36) { b37 = true; } else { b37 = false; }var x55; if (b37) { var b40; if (b39) { b40 = false; } else { b40 = true; }var b42 = Boolean((b40) ? 1 : 0);var e43 = \"b42\";var x45 = Number((eval(e43)).toString());var b47 = false; if (\"yd\" !== '' + (x45)) { b47 = true; } x55 = eval(\"b47\"); } else { x55 = ((b50).toString() != s52); } return x55;");
fn56(input_S2, input_S1, input_B1, input_I3, input_B2, input_I2, input_I1);
