// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not(not(input_bool('B1')))) then ((len(str(len(str((int((input_bool('B3') === (bool(int(input_bool('B1'))) !== bool(input_int('I1'))))) + input_int('I3')))))) / int(input_string('S3'))) != (input_int('I3') - len(str(bool(int(input_string('S1'))))))) else not((if input_bool('B1') then false else (len(input_string('S1')) !== len((if input_bool('B1') then input_string('S1') else input_string('S1')))))))

var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");

var fn61 = Function('x18', 's32', 's26', 'x11', 'b5', 'b1', "var b44 = b1; var b8 = b1; var s45 = s32; var b2; if (b1) { b2 = false; } else { b2 = true; }var b3 = !(b2);var b4 = !(b3);var x60; if (b4) { var x30 = x18; x28 = (eval(\"var e6 = \\\"b5\\\";var e7 = \\\"eval(e6)\\\";var b10 = ((b8) | 0) ? true : false;var b12 = (x11) ? true : false;var b13 = b10 !== b12;var x17 = Number((eval(e7) === b13));var s21 = String((x17 + x18));var s23 = ((s21).length).toString();s23\")).length / Number(s26);var e40 = \"var s36 = '' + (eval(\\\"var x33 = parseInt(s32, 10);var b34 = !!(x33);b34\\\"));var l37 = (s36).length;x38 = eval(\\\"x30\\\") - l37;x38\";var e41 = \"eval(e40)\";var b42 = x28; var b43 = eval(e41); x60 = b42 != b43; } else { var b47 = b44; var s48 = s45; var l46 = (s45).length;var e52 = \"var s50 = s48; (b47 ? eval(\\\"s48\\\") : s50)\";var l53 = (eval(e52)).length;var e54 = \"l53\";var b55 = false; if (l46 !== eval(e54)) { b55 = true; }var b59 = !((b44 ? false : eval(\"b55\"))); x60 = b59; } return x60;");
fn61(input_I3, input_S1, input_S3, input_I1, input_B3, input_B1);
