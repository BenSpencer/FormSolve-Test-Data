// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(not((input_string('S1') in ['lH1Pa', 'qgpu', 'FUyG', '1u8C', ''])))) then not((input_int('I2') == len(input_string('S3')))) else (input_string('S1') < input_string('S2')))

var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");

var fn21 = Function('s9', 's1', 's16', 'x8', "var s14 = s1; var opts3 = ['lH1Pa', 'qgpu', 'FUyG', '1u8C', ''];var b5 = !(opts3.indexOf(s1) > -1);var x6 = (b5) ? 1 : 0;var b7 = Boolean(x6);var l10 = (s9).length;var b11; if (x8 == l10) { b11 = true; } else { b11 = false; }var b13; if (b11) { b13 = false; } else { b13 = true; }var x20; if (b7) { x20 = b13; } else {  x20 = eval(\"var b17 = eval(\\\"s14\\\") < s16;b17\"); } return x20;");
fn21(input_S3, input_S1, input_S2, input_I2);
