// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (bool(input_int('I3')) || (if (if input_bool('B2') then bool(input_int('I1')) else bool(str(int((int(str(bool(input_string('S1')))) in [0, 77, 0]))))) then input_bool('B2') else input_bool('B2'))) then false else (if bool(int((((int(input_bool('B3')) + input_int('I2')) > input_int('I2')) == bool(input_int('I1'))))) then bool(str(not(bool(input_int('I1'))))) else bool(str((if input_bool('B2') then input_int('I1') else (if input_bool('B2') then input_int('I2') else int(str(len(str(input_bool('B1')))))))))))

var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn68 = Function('b23', 'b28', 'x1', 'x36', 'b53', 's11', 'x30', "var x6 = x36; var b48 = b23; var e4 = \"var e2 = \\\"x1\\\";var b3 = Boolean(eval(e2));b3\";var b24 = b23; var b5 = b23; var e10 = \"eval(\\\"(eval(\\\\\\\"x6\\\\\\\")) ? true : false\\\")\";var opts17 = [0, 77, 0];var b16 = false; for (var idx18 = 0; idx18 < opts17.length; idx18++) { if (opts17[idx18] == eval(\"Number(((s11) ? true : false).toString())\")) { b16 = true; } }var s20 = String(~~(b16));var b21 = !!(s20);var x22; if (b5) { x22 = eval(e10); } else { x22 = b21; }var x25; if (x22) { x25 = b23; } else { x25 = b24; }var b26; if (x25) { b26 = true; } else { b26 = eval(e4); }var x67; if (b26) {  x67 = false; } else {  x67 = eval(\"var e65 = \\\"var x42 = x36; var x49 = x36; var x51 = x30; var x33 = x30; x31 = ~~(b28); x32 = x30;var b34 = x31 + x32; var b35 = x33;var b38; if (b34 > b35 == !!(x36)) { b38 = true; } else { b38 = false; }var b41 = (+(b38)) ? true : false;var b46 = (String(!(!!(x42)))) ? true : false;var b50 = b48; var x60; if (b48) {  x60 = x49; } else { var s55 = String(eval(\\\\\\\"b53\\\\\\\")); x60 = (b50 ? eval(\\\\\\\"x51\\\\\\\") : Number('' + ((s55).length))); }var s62 = String(eval(\\\\\\\"x60\\\\\\\"));var b63 = Boolean(s62);var x64; if (b41) { x64 = eval(\\\\\\\"b46\\\\\\\"); } else { x64 = b63; }x64\\\";eval(e65)\"); } return x67;");
fn68(input_B2, input_B3, input_I3, input_I1, input_B1, input_S1, input_I2);
