// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not(input_bool('B1'))) then (input_bool('B2') != (not((if not(input_bool('B1')) then ((if input_bool('B1') then (bool(input_int('I3')) != input_bool('B3')) else bool(int((input_string('S1') in ['zirxn', 'z3', 'msx', 'GqE7N', 'aycvP', '', '0T3', 'W', '7zCZ', 'Rq'])))) !== (input_int('I3') < input_int('I2'))) else input_bool('B1'))) == not(not(bool(str(bool(input_string('S2')))))))) else bool(input_string('S3')))

var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);

var fn46 = Function('b12', 'b1', 'b4', 'x24', 's15', 's43', 's33', 'x23', "var b29 = b1; var b2; if (b1) { b2 = false; } else { b2 = true; }var b32; if (eval(\"var b5 = b29; var b8 = b29; var b7 = !(eval(\\\"b5\\\"));var x30; if (b7) { var x9 = x23; var opts17 = ['zirxn', 'z3', 'msx', 'GqE7N', 'aycvP', '', '0T3', 'W', '7zCZ', 'Rq'];var b16 = false; for (var idx18 = 0; idx18 < opts17.length; idx18++) { if (opts17[idx18] == s15) { b16 = true; } }var x19 = (b16) | 0;var e21 = \\\"!!(x19)\\\";var x22; if (b8) { var b13 = (eval(\\\"x9\\\")) ? true : false != b12; x22 = b13; } else { x22 = eval(e21); } x30 = (x22 !== (x23 < x24)); } else { x30 = b29; }x30\")) { b32 = false; } else { b32 = true; }var b34 = Boolean(s33);var b37; if (((b34).toString()) ? true : false) { b37 = false; } else { b37 = true; }var b39 = b32 == !(b37);var b41; if (b4) { b41 = !b39; } else { b41 = b39; }var x45; if (!(b2)) { x45 = b41; } else {  x45 = !!(s43); } return x45;");
fn46(input_B3, input_B1, input_B2, input_I2, input_S1, input_S3, input_S2, input_I3);
