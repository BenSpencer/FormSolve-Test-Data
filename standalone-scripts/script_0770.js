// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S1')) then input_int('I2') else input_int('I3'))

var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);

var fn7 = Function('x5', 's1', 'x3', "var b2 = (s1) ? true : false; return (b2 ? eval(\"x3\") : x5);");
fn7(input_I3, input_S1, input_I2);
