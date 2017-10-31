// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((not(bool(input_int('I2'))) == (input_bool('B1') && (if (str(bool(input_string('S1'))) in ['c', '8KE', '', 'ybt', '4m5I8']) then bool(str(input_bool('B1'))) else input_bool('B2')))) == input_bool('B1')) then input_int('I2') else 0)

var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");

var fn27 = Function('s5', 'x1', 'b11', 'b15', "var x25 = x1; var b22 = b11; var b23 = eval(\"var b2 = Boolean(x1);var b3; if (b2) { b3 = false; } else { b3 = true; }var b4 = b11; var b6 = !!(s5);var opts9 = ['c', '8KE', '', 'ybt', '4m5I8'];var b8 = false; for (var idx10 = 0; idx10 < opts9.length; idx10++) { if (opts9[idx10] == '' + (b6)) { b8 = true; } }var x16; if (b8) { var s12 = '' + (b11);var e13 = \\\"s12\\\"; x16 = (eval(e13)) ? true : false; } else { x16 = b15; }var b19 = false; if (b3 == (b4 && x16)) { b19 = true; }b19\"); var b24 = b22; return (b23 == b24 ? x25 : 0);");
fn27(input_S1, input_I2, input_B1, input_B2);
