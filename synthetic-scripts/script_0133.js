// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if true then bool(len(str(bool(str((if input_bool('B3') then (len(input_string('S3')) == (int((int(not((input_int('I2') >= len(str(input_int('I2')))))) >= input_int('I3'))) / int(input_string('S3')))) else bool(str(bool(int((if (len(str(bool(input_string('S2')))) !== int((input_bool('B1') === input_bool('B3')))) then str(input_bool('B1')) else str(input_int('I1'))))))))))))) else (input_int('I3') != len(str(input_bool('B2')))))

var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);

var fn73 = Function('s2', 'x46', 'b1', 'b47', 'b66', 's48', 'x16', 'x5', "var x65 = x16; var b45 = b1; var s20 = s2; var x6 = x5; var e11 = \"var s8 = (eval(\\\"x6\\\")).toString();var e10 = \\\"(s8).length\\\";eval(e10)\";var b12 = x5 >= eval(e11);var b14 = !(b12);var b17; if ((b14) ? 1 : 0 >= x16) { b17 = true; } else { b17 = false; }x22 = ~~(b17); x23 = parseInt(s20, 10);var b57 = Boolean(eval(\"var e54 = \\\"var e51 = \\\\\\\"eval(\\\\\\\\\\\\\\\"var e49 = \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"var fn44 = function(b32, x41, b31, s26) { var b39 = b31; var e35 = \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"(b31 === b32)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";var x36 = (eval(e35)) ? 1 : 0;var b37; if (eval(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"var b27 = !!(s26);var l29 = ((b27).toString()).length;l29\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") !== x36) { b37 = true; } else { b37 = false; }var x43; if (b37) {  x43 = '' + (b39); } else { var s42 = (x41).toString(); x43 = s42; } return x43; } fn44(b45, x46, b47, s48)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";eval(e49)\\\\\\\\\\\\\\\")\\\\\\\";var x52 = parseInt(eval(e51), 10);Boolean(x52)\\\";String(eval(e54))\"));var s59 = '' + ((b1 ? (eval(\"var l3 = (s2).length;l3\") == x22 / x23) : b57));var b60 = (s59) ? true : false;var s62 = (eval(\"b60\")).toString();var l63 = (s62).length;var b64 = !!(l63);var x72; if (true) { x72 = b64; } else { var e67 = \"b66\";var l69 = ((eval(e67)).toString()).length;var b70 = x65 != l69; x72 = b70; } return x72;");
fn73(input_S3, input_I1, input_B3, input_B1, input_B2, input_S2, input_I3, input_I2);
