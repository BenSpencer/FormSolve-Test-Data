// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((input_string('S1') == (if bool((int((input_string('S1') in ['i', '3F', 'vu0HE', 'mItY3', 'A', 'aI', 'Kq9'])) - input_int('I1'))) then str(not(bool(input_int('I2')))) else input_string('S1')))) then str((len(str((if input_bool('B1') then input_int('I2') else int(input_bool('B1'))))) + int((true != input_bool('B1'))))) else str(not((bool(int(input_string('S2'))) && input_bool('B3')))))

var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn47 = Function('b23', 's37', 'b40', 'x13', 'x9', 's1', "var x24 = x13; var s18 = s1; var s2 = s18; var e8 = \"var opts5 = ['i', '3F', 'vu0HE', 'mItY3', 'A', 'aI', 'Kq9'];var x7 = (opts5.indexOf(eval(\\\"s2\\\")) > -1) ? 1 : 0;x7\";x10 = eval(e8); x11 = x9;var b12 = (x10 - x11) ? true : false;var b15 = Boolean(eval(\"x13\"));var b16; if (b15) { b16 = false; } else { b16 = true; }var x19; if (b12) { x19 = '' + (b16); } else {  x19 = s18; }var b20 = s1 == x19;var b22; if (b20) { b22 = false; } else { b22 = true; }var e44 = \"var b41; if (!!(Number(s37))) { b41 = b40; } else { b41 = false; }!(b41)\";var x46; if (b22) { var b30 = b23; var b25 = b23; var x27; if (b23) {  x27 = x24; } else { x27 = ~~(b25); }var l29 = ((x27).toString()).length;var x33 = ((true != b30)) ? 1 : 0;x34 = l29 + x33;var s36 = '' + (x34); x46 = s36; } else { x46 = String(eval(e44)); } return x46;");
fn47(input_B1, input_S2, input_B3, input_I2, input_I1, input_S1);
