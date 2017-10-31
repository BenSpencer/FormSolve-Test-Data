// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I3')) then (str(((2 == int(str(bool(input_string('S2'))))) != input_bool('B1'))) in ['0u', 'TtS', 'Jsx2', '']) else not(not((bool(int(bool(input_string('S1')))) == (str(int(input_string('S3'))) < str((input_string('S3') in ['OjX37', 'D', 'W', 'Gl4', 'L6Nu1', 'VlcM', 'M3s4G', 'vN'])))))))

var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);

var fn39 = Function('x1', 'b9', 's3', 's16', 's21', "var e35 = \"var e19 = \\\"~~(!!(s16))\\\";var b20 = !!(eval(e19));var s25 = s21; var e23 = \\\"parseInt(s21, 10)\\\";var s24 = (eval(e23)).toString();var opts28 = ['OjX37', 'D', 'W', 'Gl4', 'L6Nu1', 'VlcM', 'M3s4G', 'vN'];var b27 = false; for (var idx29 = 0; idx29 < opts28.length; idx29++) { if (opts28[idx29] == eval(\\\"s25\\\")) { b27 = true; break; } }var s30 = '' + (b27);var b33; if (b20) { if ((s24 < s30)) { b33 = true; } else { b33 = false; } } else { if ((s24 < s30)) { b33 = false; } else { b33 = true; } }b33\";var b36; if (eval(e35)) { b36 = false; } else { b36 = true; }var b37; if (b36) { b37 = false; } else { b37 = true; }var x38; if ((x1) ? true : false) { var b4 = Boolean(s3);var s5 = '' + (b4);var x6 = parseInt(s5, 10);var b7; if (2 == x6) { b7 = true; } else { b7 = false; }var b10 = false; if (b7 != b9) { b10 = true; }var opts14 = ['0u', 'TtS', 'Jsx2', ''];var b13 = opts14.indexOf(String(b10)) > -1; x38 = b13; } else { x38 = b37; } return x38;");
fn39(input_I3, input_B1, input_S2, input_S1, input_S3);
