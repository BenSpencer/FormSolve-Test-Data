// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(int(input_string('S1')))) then (if input_bool('B2') then (if not((if input_bool('B2') then input_bool('B1') else not(input_bool('B2')))) then bool(input_string('S2')) else input_bool('B2')) else bool(int(bool(len(str(bool(int(bool(int(input_string('S2'))))))))))) else not(input_bool('B3')))

var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);

var fn36 = Function('s16', 's1', 'b10', 'b11', 'b33', "var x35; if (eval(\"eval(\\\"var b4 = !((parseInt(s1, 10)) ? true : false);b4\\\")\")) { var s20 = s16; var b7 = b11; var b18 = b11; var b9 = b11; var x13; if (b9) { x13 = b10; } else {  x13 = !(b11); }var b15 = !(eval(\"x13\"));var b17 = (s16) ? true : false;var x19; if (b15) { x19 = b17; } else { x19 = b18; }var e29 = \"eval(\\\"var b22 = !!(parseInt(s20, 10));var l26 = (String(!!((b22) | 0))).length;var b27 = !!(l26);b27\\\")\";var x30 = Number(eval(e29));var x32; if (eval(\"b7\")) { x32 = x19; } else { x32 = !!(x30); } x35 = x32; } else { var b34; if (b33) { b34 = false; } else { b34 = true; } x35 = b34; } return x35;");
fn36(input_S2, input_S1, input_B1, input_B2, input_B3);
