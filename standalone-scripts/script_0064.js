// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then input_int('I1') else int(input_bool('B2')))

var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);

var fn7 = Function('x2', 'b1', "var b3 = b1; var x4 = (b3) ? 1 : 0; return (b1 ? x2 : eval(\"x4\"));");
fn7(input_I1, input_B2);
