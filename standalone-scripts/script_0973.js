// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then input_string('S1') else str((int(input_bool('B3')) % int((if true then (int(input_bool('B2')) > int(((int(bool(str((input_int('I2') in [128, 106, 3, -100, -51, 47, -13, 75, 0])))) != input_int('I2')) !== not(input_bool('B1'))))) else not((input_int('I1') !== len(str((len(str(input_int('I3'))) in [37, 100, 89, 2, 0, 162, 37, 1]))))))))))

var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);

var fn43 = Function('b3', 'b5', 'b1', 's2', 'x14', 'x26', 'x25', "var b17 = b1; var x42; if (b1) { x42 = s2; } else { var x6 = +(b5);var x7 = x14; var opts9 = [128, 106, 3, -100, -51, 47, -13, 75, 0];var b8 = false; for (var idx10 = 0; idx10 < opts9.length; idx10++) { if (opts9[idx10] == x7) { b8 = true; break; } }var b12 = Boolean((b8).toString());var x13 = ~~(b12);var b15 = x13 != x14;var b18 = !(b17);var b20 = b15 !== eval(\"b18\");var x22 = (b20) ? 1 : 0;var b23; if (x6 > x22) { b23 = true; } else { b23 = false; }var l28 = (String(x26)).length;var opts30 = [37, 100, 89, 2, 0, 162, 37, 1];var b29 = false; for (var idx31 = 0; idx31 < opts30.length; idx31++) { if (opts30[idx31] == l28) { b29 = true; break; } }var l33 = (String(b29)).length;var b34 = x25 !== l33;var b36; if (b34) { b36 = false; } else { b36 = true; }var x37; if (true) { x37 = b23; } else { x37 = b36; }var x38 = Number(x37);x39 = Number(b3); x40 = x38; x42 = (x39 % x40).toString(); } return x42;");
fn43(input_B3, input_B2, input_B1, input_S1, input_I2, input_I3, input_I1);
