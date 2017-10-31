// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if regex-test(input_string('S1'), /^Ts(\s|[A-Z]?wQ)+$/) then input_bool('B2') else bool(input_int('I2')))

var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");

var fn8 = Function('x5', 'b3', 's1', "var re2 = new RegExp(\"^Ts(\\\\s|[A-Z]?wQ)+$\"); return (re2.test(s1) ? eval(\"b3\") : Boolean(x5));");
fn8(input_I2, input_B2, input_S1);
