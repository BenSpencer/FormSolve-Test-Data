// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if true then (if not((not(regex-test(input_string('S1'), /^([0-9]?|i)pNqCornQtO$/)) == not(bool(input_int('I3'))))) then not((not(input_bool('B3')) == input_bool('B2'))) else input_bool('B1')) else not(not(bool(input_string('S2')))))

var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn26 = Function('b14', 'b18', 's1', 'b10', 'x4', 's21', "var x25; if (true) {  x25 = eval(\"var re2 = /^([0-9]?|i)pNqCornQtO$/;var b6; if (Boolean(x4)) { b6 = false; } else { b6 = true; }var b7 = !(re2.test(s1)); var b8 = b6;var b9 = !(b7 == b8);var x19; if (b9) {  x19 = !((!(eval(\\\"var e11 = \\\\\\\"b10\\\\\\\";eval(e11)\\\")) == b14)); } else { x19 = b18; }x19\"); } else { var b22 = (s21) ? true : false; x25 = !(!(b22)); } return x25;");
fn26(input_B2, input_B1, input_S1, input_B3, input_I3, input_S2);
