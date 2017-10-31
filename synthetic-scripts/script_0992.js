// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then (if ((str((int(input_string('S1')) >= input_int('I2'))) != str(input_bool('B1'))) == not(input_bool('B2'))) then str((input_int('I3') * input_int('I3'))) else str((input_string('S1') in ['CgMST', 'QczjY', 'u']))) else input_string('S3'))

var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");

var fn32 = Function('b13', 's30', 'b1', 'x4', 's2', 'b9', 'x18', "var s23 = s2; var e8 = \"var b5 = false; if (parseInt(s2, 10) >= x4) { b5 = true; }var s7 = (b5).toString();s7\";var s10 = '' + (b9);var b11 = false; if (eval(e8) != s10) { b11 = true; }var e14 = \"b13\";var b15 = !(eval(e14));var b16; if (b11 == b15) { b16 = true; } else { b16 = false; }var x19 = x18; x20 = x18 * x19;var s22 = '' + (x20);var x29; if (b16) { x29 = s22; } else { var e28 = \"var opts25 = ['CgMST', 'QczjY', 'u'];var b24 = false; for (var idx26 = 0; idx26 < opts25.length; idx26++) { if (opts25[idx26] == s23) { b24 = true; break; } }var s27 = (b24).toString();s27\"; x29 = eval(e28); }var x31; if (b1) { x31 = x29; } else { x31 = s30; } return x31;");
fn32(input_B2, input_S3, input_B3, input_I2, input_S1, input_B1, input_I3);
