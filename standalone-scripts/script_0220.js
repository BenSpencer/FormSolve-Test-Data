// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(str(input_bool('B2')))) then str(not(bool(input_string('S2')))) else str((input_int('I2') != int(str(int(str(input_int('I2'))))))))

var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");

var fn20 = Function('x11', 's5', 'b1', "var s2 = '' + (b1);var b3 = Boolean(s2);var x19; if (!(b3)) { var b6 = (s5) ? true : false;var b7; if (b6) { b7 = false; } else { b7 = true; }var s8 = (b7).toString(); x19 = s8; } else { var x9 = x11; var s12 = (x11).toString();var x13 = Number(s12);var b16 = eval(\"x9\") != parseInt(String(x13), 10); x19 = (b16).toString(); } return x19;");
fn20(input_I2, input_S2, input_B2);
