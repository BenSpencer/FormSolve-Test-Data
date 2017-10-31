// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((if input_bool('B1') then (bool(str(input_bool('B3'))) || ("0I1" !== input_string('S3'))) else (if bool(input_int('I3')) then (str(bool((str(len(str(len(str(input_int('I2')))))) + input_string('S3')))) in ['ArQ', '', 'd', '1uh']) else false)) && regex-test(str(input_int('I2')), /^(\t|[-_ ]iUh)?$/)) then not(not(not(bool(input_string('S3'))))) else bool(str(regex-test(input_string('S3'), /^( |Gn[0-9]?)$/))))

var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");

var fn48 = Function('b1', 'x13', 'b2', 'x11', 's21', "var s37 = s21; var s42 = s21; var x32 = x13; var s5 = s21; var x31; if (b1) { var s3 = String(b2);var b4 = !!(s3);var b7; if (\"0I1\" !== eval(\"s5\")) { b7 = true; } else { b7 = false; }var b9; if (b7) { b9 = true; } else { b9 = b4; } x31 = b9; } else { var b12 = !!(x11);var x30; if (b12) { var s17 = '' + ((eval(\"var s14 = '' + (x13);s14\")).length);var l18 = (s17).length;var opts28 = ['ArQ', '', 'd', '1uh'];var b27 = false; for (var idx29 = 0; idx29 < opts28.length; idx29++) { if (opts28[idx29] == '' + (!!((eval(\"'' + (l18)\") + eval(\"s21\"))))) { b27 = true; break; } } x30 = b27; } else { x30 = false; } x31 = x30; }var b35; if (x31) { var s33 = '' + (x32); b35 = (s33).match(/^(\\t|[-_ ]iUh)?$/) !== null; } else { b35 = false; }var x47; if (b35) { var b38 = !!(s37);var b39 = !(b38); x47 = !(!(b39)); } else { var e44 = \"var re43 = /^( |Gn[0-9]?)$/;re43.test(s42)\"; x47 = !!('' + (eval(e44))); } return x47;");
fn48(input_B1, input_I2, input_B3, input_I3, input_S3);
