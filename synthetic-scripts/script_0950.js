// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(input_bool('B3')) then (input_bool('B1') === ((input_string('S1') !== str((input_int('I2') <= input_int('I3')))) || input_bool('B2'))) else input_bool('B1'))

var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);

var fn19 = Function('s4', 'b17', 'b12', 'x5', 'b1', 'x6', "var b3 = b17; var b10 = s4 !== ((x5 <= x6)).toString();var b13 = false; if (b10 || b12) { b13 = true; }var b15 = b3 === b13;var x18; if (!(b1)) { x18 = b15; } else { x18 = b17; } return x18;");
fn19(input_S1, input_B1, input_B2, input_I2, input_B3, input_I3);
