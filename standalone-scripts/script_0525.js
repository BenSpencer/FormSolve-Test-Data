// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(input_bool('B2')) then int((input_int('I3') >= input_int('I1'))) else 67)

var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);

var fn10 = Function('x5', 'x4', 'b1', "var e2 = \"b1\";var b3; if (eval(e2)) { b3 = false; } else { b3 = true; }var x9; if (b3) {  x9 = ~~((x4 >= x5)); } else {  x9 = 67; } return x9;");
fn10(input_I1, input_I3, input_B2);
