// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(input_bool('B2'))) then "W" else str(not(not((input_int('I3') != int(str((len(str(bool(int((int(bool(input_string('S3'))) != len(str(input_int('I3')))))))) <= len(input_string('S1'))))))))))

var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);

var fn33 = Function('s20', 'b1', 's6', 'x5', "var e3 = \"(b1) ? 1 : 0\";var b4 = (eval(e3)) ? true : false;var x9 = x5; var b7 = !!(s6);var x8 = Number(b7);var e12 = \"('' + (x9)).length\";var b13 = false; if (x8 != eval(e12)) { b13 = true; }var s17 = String(Boolean((b13) | 0));var l18 = (s17).length;var l22 = (eval(\"s20\")).length;var s25 = ((eval(\"l18\") <= l22)).toString();var b27 = false; if (x5 != Number(s25)) { b27 = true; }var s31 = String(!(!(b27)));var x32; if (b4) {  x32 = \"W\"; } else { x32 = s31; } return x32;");
fn33(input_S1, input_B2, input_S3, input_I3);
