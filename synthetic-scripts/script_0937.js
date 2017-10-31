// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((input_bool('B1') == bool(input_int('I1')))) then (len(str(bool(str(input_int('I2'))))) + len(str(int(bool(input_int('I2')))))) else len(str(input_bool('B2'))))

var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);

var fn24 = Function('b1', 'x13', 'x2', 'b20', "var b4; if (b1) { b4 = (x2) ? true : false; } else { b4 = !(x2) ? true : false; }var b6; if (b4) { b6 = false; } else { b6 = true; }var x7 = x13; var s11 = (eval(\"((x7).toString()) ? true : false\")).toString();var b14 = Boolean(x13);var x15 = Number(b14);var s16 = (x15).toString();var s21 = String(b20); return (b6 ? ((s11).length + (s16).length) : (s21).length);");
fn24(input_B1, input_I2, input_I1, input_B2);
