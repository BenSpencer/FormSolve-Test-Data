// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str((len(input_string('S1')) > input_int('I3'))) >= "14v") then (input_int('I1') in [55, 166, 4, -91, 0, 91, 1]) else not(input_bool('B3')))

var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");

var fn17 = Function('x3', 'x10', 's1', 'b14', "var l2 = (s1).length;var b4 = false; if (l2 > x3) { b4 = true; }var s6 = '' + (b4);var b8 = false; if (eval(\"s6\") >= \"14v\") { b8 = true; }var x16; if (b8) { var opts12 = [55, 166, 4, -91, 0, 91, 1];var b11 = opts12.indexOf(x10) > -1; x16 = b11; } else { var b15; if (b14) { b15 = false; } else { b15 = true; } x16 = b15; } return x16;");
fn17(input_I3, input_I1, input_S1, input_B3);
