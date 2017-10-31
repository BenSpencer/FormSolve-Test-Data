// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not(not(input_bool('B3')))) then not((if (((input_string('S1') === str(input_int('I2'))) != false) == input_bool('B1')) then bool(int(str((if (input_int('I1') >= int(not((input_int('I1') > int(str(not(input_bool('B1')))))))) then not(not(input_bool('B2'))) else input_bool('B3'))))) else bool(str(input_bool('B3'))))) else false)

var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");

function fn48(x6, s5, b14, x18, b33, b1) {
    var b36 = b1;
    var b2 = !(b1);
    var b3 = !(b2);
    var b4;
    if (b3) {
        b4 = false;
    } else {
        b4 = true;
    }
    var e45 = "var b20 = b14; var b41 = b36; var e7 = \"x6\";var e8 = \"eval(e7)\";var b10 = s5; var b11 = String(eval(e8));var b16; if ((b10 === b11 != false)) { if (eval(\"b14\")) { b16 = true; } else { b16 = false; } } else { if (eval(\"b14\")) { b16 = false; } else { b16 = true; } }var e32 = \"var x19 = x18; var b26 = false; if (x19 > Number(eval(\\\"String(!(eval(\\\\\\\"b20\\\\\\\")))\\\"))) { b26 = true; }var b28; if (b26) { b28 = false; } else { b28 = true; }var b30 = x18 >= Number(b28);b30\";var x37; if (eval(e32)) { var b34 = !(b33);var b35 = !(b34); x37 = b35; } else { x37 = b36; }var s38 = String(x37);var x39 = Number(s38);var s42 = String(b41);var x44; if (b16) { x44 = Boolean(x39); } else { x44 = (s42) ? true : false; }x44";
    var b46 = !(eval(e45));
    var x47;
    if (b4) {
        x47 = b46;
    } else {
        x47 = false;
    }
    return x47;
}
fn48(input_I2, input_S1, input_B1, input_I1, input_B2, input_B3);
