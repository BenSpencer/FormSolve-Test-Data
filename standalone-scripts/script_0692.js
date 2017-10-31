// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(input_bool('B2')) !== (input_int('I2') + int((len(input_string('S2')) == int(bool(input_int('I1'))))))) then int(not(bool(input_string('S1')))) else (input_int('I2') % input_int('I2')))

var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);

var fn28 = Function('s17', 'b1', 'x7', 's4', 'x23', "var x3 = x23; var e6 = \"(s4).length\";var x12 = ((eval(e6) == Number(Boolean(x7)))) | 0;x13 = x3; x14 = x12;var e18 = \"s17\";var b19 = Boolean(eval(e18));var b21; if (eval(\"b19\")) { b21 = false; } else { b21 = true; }var x22 = ~~(b21);var x24 = x23;  return (((b1) | 0 !== x13 + x14) ? x22 : (x23 % x24));");
fn28(input_S1, input_B2, input_I1, input_S2, input_I2);
