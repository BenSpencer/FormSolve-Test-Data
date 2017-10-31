// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((input_string('S2') >= (if not(input_bool('B1')) then input_string('S3') else input_string('S1')))) then (int(input_bool('B3')) <= int(input_bool('B3'))) else not(((if bool(input_string('S3')) then bool(str(input_int('I3'))) else regex-test(str((0 == int(input_bool('B1')))), /^[a-z]+eDjTB(G|m)Xxb-H$/)) != bool(input_string('S3')))))

var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);

var fn42 = Function('s1', 's19', 'b12', 'b2', 's6', 'x21', "var s4 = s19; var b25 = b2; var e11 = \"var b3; if (b2) { b3 = false; } else { b3 = true; }var x7; if (b3) {  x7 = eval(\\\"s4\\\"); } else { x7 = s6; }var b8 = s1 >= x7;!(b8)\";var b14 = b12; var x13 = (b12) ? 1 : 0;var b17 = x13; var b18 = eval(\"var x15 = +(b14);x15\");var x41; if (eval(e11)) { x41 = b17 <= b18; } else { var s35 = s19; var x34; if ((s19) ? true : false) { var s22 = (x21).toString(); x34 = Boolean(eval(\"s22\")); } else { var e29 = \"~~(eval(\\\"var e26 = \\\\\\\"b25\\\\\\\";eval(e26)\\\"))\";var b30; if (0 == eval(e29)) { b30 = true; } else { b30 = false; }var s32 = '' + (b30);var re33 = /^[a-z]+eDjTB(G|m)Xxb-H$/; x34 = re33.test(s32); }var e37 = \"!!(s35)\"; x41 = !((x34 != eval(e37))); } return x41;");
fn42(input_S2, input_S3, input_B3, input_B1, input_S1, input_I3);
