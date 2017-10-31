// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(input_bool('B2'))) then (((int(str((if input_bool('B2') then input_bool('B1') else regex-test(input_string('S1'), /^(t|dGv)[0-9]*$/)))) + input_int('I3')) != input_int('I2')) !== input_bool('B1')) else (len(input_string('S2')) != input_int('I3')))

var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn30 = Function('b1', 'x17', 'b21', 's6', 's24', 'x13', "var x26 = x13; var b4 = b1; var s2 = String(b1);var b5 = b21; var re7 = new RegExp(\"^(t|dGv)[0-9]*$\");var x9; if (b4) { x9 = b5; } else { x9 = eval(\"re7.test(s6)\"); }var e10 = \"x9\";var s11 = String(eval(e10));x14 = parseInt(s11, 10); x15 = x13;var e16 = \"x14 + x15\";var b19 = false; if (eval(e16) != eval(\"x17\")) { b19 = true; }var b22 = b19; var b23 = b21;var x29; if ((s2) ? true : false) { x29 = b22 !== b23; } else { x29 = ((s24).length != x26); } return x29;");
fn30(input_B2, input_I2, input_B1, input_S1, input_S2, input_I3);
