// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S1')) then (input_int('I3') in [2, 0, 0, 0, 122, 80, 1, 1, 4, 31]) else (bool(input_int('I2')) != (not(bool(str((input_string('S1') === str(bool(int(str(input_int('I1'))))))))) === (input_int('I3') > int(str(bool(int(not((input_int('I1') in [1, -31, 6]))))))))))

var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);

var fn44 = Function('x24', 's1', 'x9', 'x12', "var x4 = x24; var s11 = s1; var x25 = x12; var x15 = parseInt(eval(\"var s13 = String(x12);s13\"), 10);var b16 = Boolean(x15);var b19 = s11 === (eval(\"b16\")).toString();var b22 = Boolean((b19).toString());var b23; if (b22) { b23 = false; } else { b23 = true; }var e35 = \"var e26 = \\\"x25\\\";var opts28 = [1, -31, 6];var b27 = opts28.indexOf(eval(e26)) > -1;var e30 = \\\"b27\\\";var b31 = !(eval(e30));var s34 = String((Number(b31)) ? true : false);s34\";var x36 = Number(eval(e35));var b37; if (x24 > x36) { b37 = true; } else { b37 = false; }var b39 = false; if (b23 === b37) { b39 = true; }var x43; if (eval(\"var b2 = !!(s1);b2\")) { x43 = eval(\"var opts6 = [2, 0, 0, 0, 122, 80, 1, 1, 4, 31];var b5 = false; for (var idx7 = 0; idx7 < opts6.length; idx7++) { if (opts6[idx7] == x4) { b5 = true; } }b5\"); } else { x43 = ((x9) ? true : false != b39); } return x43;");
fn44(input_I3, input_S1, input_I2, input_I1);
