// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(input_bool('B1')) then bool((if (input_int('I2') in [1, 7, 2, 1, 8, -25]) then int(input_string('S1')) else input_int('I3'))) else bool(str(not((len(str((input_bool('B3') !== (int((if input_bool('B2') then bool(input_int('I3')) else bool(input_int('I3')))) === input_int('I1'))))) === input_int('I1'))))))

var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);

var fn42 = Function('b15', 'b1', 'x3', 'x25', 'b13', 'x10', 's7', "var x16 = x10; var b2; if (b1) { b2 = false; } else { b2 = true; }var opts5 = [1, 7, 2, 1, 8, -25];var b4 = opts5.indexOf(x3) > -1;var x9 = Number(eval(\"s7\"));var x41; if (b2) { x41 = ((b4 ? x9 : x10)) ? true : false; } else { var x34 = x25; var e14 = \"b13\";var x19 = x16; var e22 = \"var e21 = \\\"!!(x19)\\\";eval(e21)\";var x23; if (b15) { var b17 = Boolean(x16); x23 = eval(\"b17\"); } else { x23 = eval(e22); }var x24 = (x23) | 0;var b26 = x24 === x25;var b28 = eval(e14); var b29 = b26;var e30 = \"b28 !== b29\";var s31 = String(eval(e30));var l32 = (s31).length;var e33 = \"l32\";var b35; if (eval(e33) === x34) { b35 = true; } else { b35 = false; }var s38 = '' + (!(b35)); x41 = Boolean(eval(\"s38\")); } return x41;");
fn42(input_B2, input_B1, input_I2, input_I1, input_B3, input_I3, input_S1);
