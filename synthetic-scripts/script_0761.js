// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str((int(input_bool('B3')) * input_int('I2'))) != "iEq") then input_string('S1') else str((if not(bool(input_string('S1'))) then (str(int(regex-test(str((if input_bool('B1') then not(not((((if bool(input_int('I2')) then input_string('S3') else str(input_bool('B2'))) >= input_string('S1')) != (input_bool('B2') != input_bool('B2'))))) else bool(input_string('S2')))), /^(\w|w[-_ ]L)*\rY$/))) in ['1O', 'lIu', 'o', 'D', '', '', 'Z', 'N4lJs', 'qh']) else ((input_int('I1') in [19, 1, -18, 81]) !== input_bool('B2')))))

var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");

function fn66(s44, s39, s10, x3, x53, b41, b40, b1) {
    var x42 = x3;
    var s11 = s10;
    var s7 = (eval("var x2 = (b1) | 0;x4 = x2; x5 = x3;x4 * x5")).toString();
    var x65;
    if ((s7 != "iEq")) {
        x65 = s10;
    } else {
        var e64 = "var b57 = b40; var s43 = s11; var b12 = (s11) ? true : false;var b13; if (b12) { b13 = false; } else { b13 = true; }var opts55 = [19, 1, -18, 81];var b54 = false; for (var idx56 = 0; idx56 < opts55.length; idx56++) { if (opts55[idx56] == x53) { b54 = true; } }var e58 = \"b57\";var e59 = \"eval(e58)\";var b60; if (b54 !== eval(e59)) { b60 = true; } else { b60 = false; }var x62; if (b13) { var e48 = \"var s45 = '' + ((function(s35, b18, b14, x15, s22, s17) { var b25 = b18; var b16 = !!(x15);var x21; if (b16) { x21 = s17; } else {  x21 = String(eval(\\\"b18\\\")); }var b26 = b25; var e28 = \\\"var e27 = \\\\\\\"b26\\\\\\\";eval(e27)\\\";var b31; if ((x21 >= s22)) { if ((b25 != eval(e28))) { b31 = false; } else { b31 = true; } } else { if ((b25 != eval(e28))) { b31 = true; } else { b31 = false; } }var b33 = !(b31);var b34; if (b33) { b34 = false; } else { b34 = true; }var b36 = !!(s35); return (b14 ? b34 : b36); })(s39, b40, b41, x42, s43, s44) );var re46 = /^(\\\\w|w[-_ ]L)*\\\\rY$/;var x47 = ~~(re46.test(s45));x47\";var s49 = String(eval(e48));var opts51 = ['1O', 'lIu', 'o', 'D', '', '', 'Z', 'N4lJs', 'qh']; x62 = opts51.indexOf(s49) > -1; } else { x62 = b60; }(x62).toString()";
        x65 = eval(e64);
    }
    return x65;
}
fn66(input_S3, input_S2, input_S1, input_I2, input_I1, input_B1, input_B2, input_B3);
