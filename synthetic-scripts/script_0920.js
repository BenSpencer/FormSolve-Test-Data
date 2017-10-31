// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(((input_int('I2') == (input_int('I3') % len(str(bool(input_int('I1')))))) == (int(str(not((if bool(input_int('I2')) then bool(int(str((input_int('I3') >= 2)))) else not(((str(input_int('I3')) in ['KEz', 'iE7lI', 'A3', '', 'ck', 'Y', '6Y', 'LSO', 'iVkv', 'N']) === bool(str(bool(str((int(input_bool('B1')) * input_int('I2')))))))))))) <= int(bool(str(int(str(input_int('I3'))))))))) then "vaiLt" else input_string('S3'))

var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);

var fn63 = Function('b27', 'x4', 's61', 'x1', 'x16', "var e59 = \"var x14 = x1; var x2 = x16; var e3 = \\\"x2\\\";x10 = eval(e3); x11 = eval(\\\"var s6 = '' + ((x4) ? true : false);var l7 = (s6).length;var e8 = \\\\\\\"l7\\\\\\\";eval(e8)\\\");var b12; if (x1 == x10 % x11) { b12 = true; } else { b12 = false; }var x47 = x16; var x31 = x14; var x22 = x16; var b15 = Boolean(x14);var x43; if (b15) { var b17; if (x16 >= 2) { b17 = true; } else { b17 = false; }var s19 = '' + (b17);var b21 = (parseInt(s19, 10)) ? true : false; x43 = b21; } else { var opts25 = ['KEz', 'iE7lI', 'A3', '', 'ck', 'Y', '6Y', 'LSO', 'iVkv', 'N'];var b24 = false; for (var idx26 = 0; idx26 < opts25.length; idx26++) { if (opts25[idx26] == (x22).toString()) { b24 = true; } }var s34 = '' + ((eval(\\\"var e28 = \\\\\\\"b27\\\\\\\";var x29 = +(eval(e28));x29\\\") * x31));var b36 = !!(eval(\\\"s34\\\"));var b39 = b24 === ((b36).toString()) ? true : false;var e41 = \\\"b39\\\";var b42; if (eval(e41)) { b42 = false; } else { b42 = true; } x43 = b42; }var b44; if (x43) { b44 = false; } else { b44 = true; }var s45 = String(b44);var x46 = parseInt(s45, 10);var b55; if (x46 <= +((eval(\\\"var e51 = \\\\\\\"String(Number(String(x47)))\\\\\\\";eval(e51)\\\")) ? true : false)) { b55 = true; } else { b55 = false; }var b57 = b12 == b55;b57\";var b60 = !(eval(e59)); return (b60 ? \"vaiLt\" : s61);");
fn63(input_B1, input_I1, input_S3, input_I2, input_I3);
