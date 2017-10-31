// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool((int((str(input_int('I1')) in ['jAlO', 'el', 'aqdJy', '', 'sjf', 'WIGx7', '4Cbzf', 'hx', 'XfUpV'])) / len(str(input_int('I3')))))) then (if bool(input_string('S2')) then ((if not(bool(int(input_bool('B2')))) then (input_int('I3') in [1, 0, 6, -99, -74, 9, 1, 0]) else input_bool('B2')) === not(input_bool('B2'))) else input_bool('B1')) else not(not((input_int('I2') in [0, 1, 9, 1, -82, 1, 0, 82, 7, 1]))))

var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);

var fn42 = Function('s14', 'x35', 'b16', 'b33', 'x22', 'x1', "var x7 = x22; var s2 = (x1).toString();var opts4 = ['jAlO', 'el', 'aqdJy', '', 'sjf', 'WIGx7', '4Cbzf', 'hx', 'XfUpV'];var s8 = (x7).toString();var b13 = !((((opts4.indexOf(s2) > -1) | 0 / (s8).length)) ? true : false);var b15 = !!(s14);var x34; if (b15) {  x34 = eval(\"var b28 = b16; var b26 = b16; var e20 = \\\"!!(eval(\\\\\\\"var x17 = +(b16);x17\\\\\\\"))\\\";var b21; if (eval(e20)) { b21 = false; } else { b21 = true; }var x27; if (b21) { var opts24 = [1, 0, 6, -99, -74, 9, 1, 0]; x27 = opts24.indexOf(x22) > -1; } else {  x27 = b26; }var b29 = !(b28);var b30 = false; if (x27 === b29) { b30 = true; }b30\"); } else { x34 = b33; }var x41; if (b13) { x41 = x34; } else { var opts37 = [0, 1, 9, 1, -82, 1, 0, 82, 7, 1];var b39; if (opts37.indexOf(x35) > -1) { b39 = false; } else { b39 = true; }var b40; if (b39) { b40 = false; } else { b40 = true; } x41 = b40; } return x41;");
fn42(input_S2, input_I2, input_B2, input_B1, input_I3, input_I1);
