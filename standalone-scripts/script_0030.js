// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I2') >= int(str(int(bool(int(bool(input_string('S1')))))))) then (if bool(input_int('I1')) then bool(str(input_int('I3'))) else (if not((false !== (input_int('I3') == int(input_string('S3'))))) then (input_string('S2') in ['qM0i', 'X', '4bs', 'Ht', 'V', '', 'il']) else ((input_bool('B2') != input_bool('B3')) === not(regex-test(input_string('S1'), /^i\w?\tO[-_ ]?(p|Ef_D)QNdGV$/))))) else (str(len(str((input_int('I2') > 6)))) > "I5n"))

var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");

var fn57 = Function('s21', 'b32', 'x14', 'x1', 's36', 'b33', 's28', 'x16', "var x45 = x1; var s4 = s36; var e5 = \"s4\";var x7 = ~~((eval(e5)) ? true : false);var b8 = (x7) ? true : false;var x9 = Number(b8);var s10 = String(x9);var b12 = eval(\"var e2 = \\\"x1\\\";eval(e2)\"); var b13 = parseInt(s10, 10);var e51 = \"var b46 = x45; var b47 = 6;var e49 = \\\"'' + (b46 > b47)\\\";var l50 = (eval(e49)).length;l50\";var s53 = String(eval(\"eval(e51)\"));var b54 = s53; var b55 = \"I5n\";var x56; if (b12 >= b13) { var x19 = x16; var b15 = (x14) ? true : false;var x44; if (b15) { var s17 = (x16).toString();var b18 = (s17) ? true : false; x44 = b18; } else { var b23 = eval(\"x19\") == Number(s21);var b25 = false; if (false !== b23) { b25 = true; }var b27 = !(b25);var opts30 = ['qM0i', 'X', '4bs', 'Ht', 'V', '', 'il'];var b29 = false; for (var idx31 = 0; idx31 < opts30.length; idx31++) { if (opts30[idx31] == s28) { b29 = true; break; } }var b34; if (b32) { if (b33) { b34 = false; } else { b34 = true; } } else { if (b33) { b34 = true; } else { b34 = false; } }var e40 = \"var e39 = \\\"var re37 = new RegExp(\\\\\\\"^i\\\\\\\\\\\\\\\\w?\\\\\\\\\\\\\\\\tO[-_ ]?(p|Ef_D)QNdGV$\\\\\\\");var b38; if (re37.test(s36)) { b38 = false; } else { b38 = true; }b38\\\";eval(e39)\";var b41; if (b34 === eval(e40)) { b41 = true; } else { b41 = false; }var x43; if (b27) { x43 = b29; } else { x43 = b41; } x44 = x43; } x56 = x44; } else { x56 = b54 > b55; } return x56;");
fn57(input_S3, input_B2, input_I1, input_I2, input_S1, input_B3, input_S2, input_I3);
