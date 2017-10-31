// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I3')) then not((if (true || bool((int(input_bool('B3')) * int((input_int('I1') in [75, 44, 49, 34, -87, 1]))))) then not((input_string('S1') !== input_string('S2'))) else (input_bool('B1') != (if (str(len(input_string('S3'))) != input_string('S1')) then not(input_bool('B1')) else (if ("N" <= input_string('S1')) then not(bool(input_int('I3'))) else not(not(input_bool('B1')))))))) else (int(not(bool(int(not(input_bool('B3')))))) != input_int('I3')))

var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");

var fn64 = Function('x1', 's16', 'x5', 's15', 's21', 'b20', 'b3', "var b52 = b3; var x45 = x1; var x60 = x1; var s25 = s15; var x4 = (b3) | 0;var opts7 = [75, 44, 49, 34, -87, 1];var x9 = +(opts7.indexOf(x5) > -1);x10 = x4; x11 = x9;var b12 = !!(x10 * x11);var b13 = false; if (true || b12) { b13 = true; }var b17 = s15 !== s16;var x50; if (b13) { x50 = !(b17); } else { var b30 = b20; var b46 = b30; var s44 = s25; var e29 = \"eval(\\\"var b26; if (eval(\\\\\\\"var s23 = String((s21).length);s23\\\\\\\") != s25) { b26 = true; } else { b26 = false; }b26\\\")\";var b31; if (b30) { b31 = false; } else { b31 = true; }var e32 = \"b31\";var x47; if (eval(e29)) { x47 = eval(e32); } else { var fn43 = function(s33, x36, b39) { var b34 = false; if (\"N\" <= s33) { b34 = true; }var b38 = !(Boolean(x36));var b41 = !(!(b39));var x42; if (b34) { x42 = b38; } else { x42 = b41; } return x42; }  x47 = fn43(s44, x45, b46); } x50 = (b20 != x47); }var b51; if (x50) { b51 = false; } else { b51 = true; }var b53; if (b52) { b53 = false; } else { b53 = true; }var e54 = \"b53\";var b56 = ((eval(e54)) | 0) ? true : false;var e57 = \"b56\";var x59 = (!(eval(e57))) ? 1 : 0;var b61; if (x59 != x60) { b61 = true; } else { b61 = false; } return (Boolean(x1) ? b51 : b61);");
fn64(input_I3, input_S2, input_I1, input_S1, input_S3, input_B1, input_B3);
