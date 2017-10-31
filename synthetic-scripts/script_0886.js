// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int((int(bool(int(input_string('S3')))) < len(input_string('S1'))))) then false else (len(str((int(str((if input_bool('B1') then int(bool(input_string('S2'))) else input_int('I2')))) == int(not(input_bool('B1')))))) != input_int('I3')))

var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");

var fn32 = Function('x16', 'x28', 's13', 'b12', 's1', 's6', "var e3 = \"var x2 = Number(s1);x2\";var b4 = (eval(e3)) ? true : false;var x5 = +(b4);var b8 = x5; var b9 = (s6).length;var b11 = Boolean((b8 < b9) ? 1 : 0);var b21 = b12; var e20 = \"var x17; if (b12) { var b14 = Boolean(s13); x17 = ~~(b14); } else { x17 = x16; }var s18 = (x17).toString();var x19 = parseInt(s18, 10);x19\";var b22 = !(b21);var x23 = Number(b22);var l27 = (String((eval(e20) == x23))).length;var b29; if (l27 != x28) { b29 = true; } else { b29 = false; }var x31; if (b11) {  x31 = false; } else { x31 = b29; } return x31;");
fn32(input_I2, input_I3, input_S2, input_B1, input_S3, input_S1);
