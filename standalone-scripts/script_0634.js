// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if not((str(int(((false !== (input_bool('B3') !== true)) || bool(len(input_string('S1')))))) <= str((input_int('I2') != (input_int('I2') + 1))))) then input_bool('B1') else input_bool('B2')) then input_bool('B3') else not(bool(input_string('S2'))))

var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);

var fn37 = Function('b28', 'x14', 'b1', 's31', 's6', 'b25', "var b30 = b1; var x29; if (eval(\"var b10; if (eval(\\\"Boolean((s6).length)\\\")) { b10 = true; } else { var b4 = false; var b5 = (b1 !== true); b10 = b4 !== b5; }var x15 = x14; x16 = x15; x17 = 1;var b18 = x14 != x16 + x17;var s20 = String(b18);var b21 = false; if (String(+(b10)) <= s20) { b21 = true; }var b23 = !(b21);b23\")) { var e27 = \"eval(\\\"b25\\\")\"; x29 = eval(e27); } else {  x29 = b28; }var e34 = \"var b33; if (!!(s31)) { b33 = false; } else { b33 = true; }b33\";var e35 = \"eval(e34)\";var x36; if (x29) { x36 = b30; } else { x36 = eval(e35); } return x36;");
fn37(input_B2, input_I2, input_B3, input_S2, input_S1, input_B1);
