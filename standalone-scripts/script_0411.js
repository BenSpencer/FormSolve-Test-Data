// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I2') == int(not(input_bool('B3')))) then not(bool(input_int('I3'))) else (if (int(((if (str(input_int('I3')) in ['P3Z16', 'Ae3G', '3VDF9']) then input_bool('B1') else input_bool('B2')) == bool(str(int(str(input_bool('B2'))))))) > len((if (input_string('S1') in ['ZimA', '9TEZ8', 'x4mQ', '3gD2', 'qM0I', 'mLI', 'Z', 'ME', 'wG6C']) then input_string('S1') else str(input_int('I1'))))) then not(bool(str(len(input_string('S3'))))) else not(not(input_bool('B2')))))

var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");

var fn51 = Function('x1', 'b2', 'x34', 'x11', 's40', 's28', 'b17', 'b16', "var x8 = x11; var b9 = (x8) ? true : false;var b10 = !(b9);var b45 = b17; var b20 = b17; var e19 = \"var s12 = (x11).toString();var opts14 = ['P3Z16', 'Ae3G', '3VDF9'];var b13 = false; for (var idx15 = 0; idx15 < opts14.length; idx15++) { if (opts14[idx15] == s12) { b13 = true; } }var x18; if (b13) {  x18 = b16; } else { x18 = b17; }x18\";var s21 = (b20).toString();var s23 = (parseInt(s21, 10)).toString();var b24 = Boolean(s23);var b25 = eval(e19) == b24;var s33 = s28; var opts30 = ['ZimA', '9TEZ8', 'x4mQ', '3gD2', 'qM0I', 'mLI', 'Z', 'ME', 'wG6C'];var b29 = opts30.indexOf(s28) > -1;var e32 = \"b29\";var x36; if (eval(e32)) { x36 = s33; } else {  x36 = '' + (x34); }var l37 = (x36).length;var b38; if ((b25) | 0 > l37) { b38 = true; } else { b38 = false; }var x49; if (b38) { var b44 = !(!!(String((s40).length))); x49 = b44; } else { var b46 = !(b45);var e47 = \"b46\"; x49 = !(eval(e47)); }var x50; if ((x1 == eval(\"var b3; if (b2) { b3 = false; } else { b3 = true; }var x4 = (b3) | 0;x4\"))) { x50 = b10; } else { x50 = x49; } return x50;");
fn51(input_I2, input_B3, input_I1, input_I3, input_S3, input_S1, input_B2, input_B1);
