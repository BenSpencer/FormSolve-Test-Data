// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str((if (str(len(str(input_bool('B1')))) in ['hsL', 'bgTJ', 'JLMG', 'A97', 'HvY', '72', 'tNwR', 'i', 'i70A', 'CK']) then bool(input_int('I3')) else bool(int(str((if (int(input_string('S2')) <= int(input_string('S1'))) then ((input_int('I2') in [74, 3, 1, 1, 1, 160, 71, 1, 99]) && bool(int(bool(str(not(bool(input_string('S2')))))))) else input_bool('B2'))))))) < str(input_bool('B1'))) then input_int('I3') else 1)

var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");

var fn48 = Function('b34', 'x17', 's13', 's11', 'x46', 'b1', "var x9 = x46; var b42 = b1; var x40; if (eval(\"var s2 = '' + (b1);var opts6 = ['hsL', 'bgTJ', 'JLMG', 'A97', 'HvY', '72', 'tNwR', 'i', 'i70A', 'CK'];var b5 = false; for (var idx7 = 0; idx7 < opts6.length; idx7++) { if (opts6[idx7] == String((s2).length)) { b5 = true; } }b5\")) { x40 = (x9) ? true : false; } else { var s24 = s11; var x14 = parseInt(s13, 10);var b15 = false; if (Number(s11) <= x14) { b15 = true; }var e20 = \"var e18 = \\\"x17\\\";eval(\\\"eval(e18)\\\")\";var opts22 = [74, 3, 1, 1, 1, 160, 71, 1, 99];var b21 = false; for (var idx23 = 0; idx23 < opts22.length; idx23++) { if (opts22[idx23] == eval(e20)) { b21 = true; } }var b26; if (!!(s24)) { b26 = false; } else { b26 = true; }var s27 = (b26).toString();var e28 = \"s27\";var b29 = Boolean(eval(e28));var x30 = (b29) | 0;var b31 = !!(x30);var b32; if (b21 && b31) { b32 = true; } else { b32 = false; }var e36 = \"(b15 ? b32 : b34)\";var x38 = Number(String(eval(e36))); x40 = (x38) ? true : false; }var b44 = false; if (String(x40) < (b42).toString()) { b44 = true; }var x47; if (b44) { x47 = x46; } else {  x47 = 1; } return x47;");
fn48(input_B2, input_I2, input_S1, input_S2, input_I3, input_B1);
