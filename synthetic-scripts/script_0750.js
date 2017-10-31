// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(str(bool(str((input_int('I2') == int(str(len(str((input_string('S1') in ['', '', 'ktQs', 'iFHp', 'Xe', 'ueL1W'])))))))))) == int(input_bool('B1'))) then input_int('I3') else (if bool(input_int('I3')) then int(bool(int(input_bool('B3')))) else int(input_bool('B2'))))

var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn43 = Function('x30', 'b34', 'x1', 'b38', 'b26', 's4', "var x31 = x30; var x27 = (b26) ? 1 : 0;var b28 = false; if (eval(\"var e3 = \\\"eval(\\\\\\\"x1\\\\\\\")\\\";var s15 = String(eval(\\\"var l13 = (eval(\\\\\\\"var e8 = \\\\\\\\\\\\\\\"var opts6 = ['', '', 'ktQs', 'iFHp', 'Xe', 'ueL1W'];var b5 = false; for (var idx7 = 0; idx7 < opts6.length; idx7++) { if (opts6[idx7] == s4) { b5 = true; break; } }b5\\\\\\\\\\\\\\\";var e11 = \\\\\\\\\\\\\\\"eval(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"(eval(e8)).toString()\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")\\\\\\\\\\\\\\\";eval(e11)\\\\\\\")).length;l13\\\"));var s20 = String((eval(e3) == eval(\\\"parseInt(s15, 10)\\\")));var b21 = (s20) ? true : false;var s22 = (b21).toString();var e23 = \\\"s22\\\";var x24 = parseInt(eval(e23), 10);x24\") == x27) { b28 = true; }var x42; if (b28) { x42 = x30; } else { var b36 = Boolean(Number(b34));var x40; if (eval(\"!!(x31)\")) { x40 = ~~(b36); } else {  x40 = (b38) | 0; }var e41 = \"x40\"; x42 = eval(e41); } return x42;");
fn43(input_I3, input_B3, input_I2, input_B2, input_B1, input_S1);
