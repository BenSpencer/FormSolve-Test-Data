// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(str((int(input_bool('B2')) <= int(bool(int(not(((false == (if (str((input_string('S3') === input_string('S2'))) >= input_string('S2')) then not(bool(input_int('I2'))) else input_bool('B2'))) != bool(input_string('S1'))))))))))) then str(((int(str(input_int('I1'))) + int(input_string('S3'))) >= input_int('I2'))) else input_string('S3'))

var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);

var fn47 = Function('s19', 's4', 'x33', 's3', 'x11', 'b1', "var s36 = s3; var s45 = s3; var x41 = x11; var b15 = b1; var s8 = s4; var b5 = false; if (s3 === s4) { b5 = true; }var s7 = String(b5);var b9 = s7; var b10 = s8;var x16; if (b9 >= b10) { var b13 = Boolean(eval(\"x11\"));var b14 = !(b13); x16 = b14; } else { x16 = b15; }var b17; if (false == x16) { b17 = true; } else { b17 = false; }var b22; if (b17) { if (Boolean(eval(\"s19\"))) { b22 = false; } else { b22 = true; } } else { if (Boolean(eval(\"s19\"))) { b22 = true; } else { b22 = false; } }var b24 = !(b22);var x27 = (Boolean(+(b24))) ? 1 : 0;var b31 = Boolean('' + ((Number(b1) <= x27)));var b32; if (b31) { b32 = false; } else { b32 = true; }var s34 = '' + (x33);var x35 = parseInt(s34, 10);var e37 = \"s36\";x39 = x35; x40 = parseInt(eval(e37), 10);var b42 = x39 + x40; var b43 = x41;var s44 = '' + (b42 >= b43);var x46; if (b32) { x46 = s44; } else {  x46 = s45; } return x46;");
fn47(input_S1, input_S2, input_I1, input_S3, input_I2, input_B2);
