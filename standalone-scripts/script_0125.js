// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(input_bool('B3')) then str(input_bool('B2')) else str(int(not(bool(len(str(int(str((str(len(str(input_bool('B1')))) !== str(input_bool('B1'))))))))))))

var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);

var fn26 = Function('b1', 'b3', 'b10', "var b2; if (b1) { b2 = false; } else { b2 = true; }var b21 = !!(eval(\"var b6 = b10; var s7 = String(b6);var l8 = (s7).length;var s9 = (l8).toString();var s11 = '' + (b10);var s14 = String((s9 !== s11));var l18 = ((eval(\\\"Number(s14)\\\")).toString()).length;var e19 = \\\"l18\\\";eval(e19)\"));var b22; if (b21) { b22 = false; } else { b22 = true; }var s24 = '' + (~~(b22));var x25; if (b2) { var e4 = \"b3\";var s5 = '' + (eval(e4)); x25 = s5; } else { x25 = s24; } return x25;");
fn26(input_B3, input_B2, input_B1);
