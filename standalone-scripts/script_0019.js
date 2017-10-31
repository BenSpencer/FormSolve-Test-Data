// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if true then ((if input_bool('B3') then str(bool(len(input_string('S1')))) else str(input_bool('B1'))) in ['mN5K', 'VvX3K', 'yc', 'YgxIZ', 'Sm', 'l', 'Lr', 'y', 'bUY', 'oQSCj']) else not(input_bool('B3')))

var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);

var fn16 = Function('s2', 'b7', 'b1', "var b13 = b1; var l3 = (s2).length;var s6 = String((eval(\"l3\")) ? true : false);var x9; if (b1) { x9 = s6; } else {  x9 = (b7).toString(); }var opts11 = ['mN5K', 'VvX3K', 'yc', 'YgxIZ', 'Sm', 'l', 'Lr', 'y', 'bUY', 'oQSCj'];var b10 = false; for (var idx12 = 0; idx12 < opts11.length; idx12++) { if (opts11[idx12] == x9) { b10 = true; break; } }var b14; if (b13) { b14 = false; } else { b14 = true; } return (true ? b10 : b14);");
fn16(input_S1, input_B1, input_B3);
