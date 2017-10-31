// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if not((input_int('I3') >= int(str(len(input_string('S3')))))) then input_bool('B1') else bool(input_int('I1'))) then str(input_bool('B1')) else str((input_string('S2') <= str(int(not(bool(str(not(input_bool('B2'))))))))))

var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");

var fn28 = Function('s16', 's2', 'x11', 'b10', 'x1', 'b17', "var b14 = b10; var x13; if (eval(\"var s4 = '' + ((s2).length);var x5 = Number(s4);var b6 = x1 >= x5;var b8 = !(b6);b8\")) {  x13 = b10; } else { var b12 = !!(x11); x13 = b12; }var b18 = !(b17);var s19 = '' + (b18);var b21; if (!!(s19)) { b21 = false; } else { b21 = true; }var x22 = (b21) ? 1 : 0;var s23 = (x22).toString();var b24 = false; if (s16 <= s23) { b24 = true; }var x27; if (x13) {  x27 = (b14).toString(); } else { x27 = String(b24); } return x27;");
fn28(input_S2, input_S3, input_I1, input_B1, input_I3, input_B2);
