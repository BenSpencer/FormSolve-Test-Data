// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (len(input_string('S3')) === int(bool(int(bool(input_string('S2')))))) then int(bool((input_int('I2') / input_int('I2')))) else len(replace(str((input_bool('B3') != (if bool(input_string('S1')) then not(input_bool('B1')) else input_bool('B2')))), "", "bN")))

var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);

var fn33 = Function('s20', 'b19', 'x13', 's1', 's4', 'b22', 'b24', "var e3 = \"(s1).length\";var e5 = \"s4\";var x7 = +(!!(eval(e5)));var x10 = Number(!!(eval(\"x7\")));var b11 = eval(e3) === x10;var x32; if (b11) { var x14 = x13; x15 = x13 / x14;var b17 = !!(x15); x32 = (b17) ? 1 : 0; } else { var b21 = (s20) ? true : false;var x25; if (b21) { x25 = !(b22); } else { x25 = b24; }var b26 = b19 != x25;var s30 = (eval(\"String(b26)\")).replace(\"\", \"bN\"); x32 = (s30).length; } return x32;");
fn33(input_S1, input_B3, input_I2, input_S3, input_S2, input_B1, input_B2);
