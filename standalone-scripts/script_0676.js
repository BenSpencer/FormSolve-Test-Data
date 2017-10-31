// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (not((bool(input_int('I3')) !== bool(int((input_bool('B1') != ((input_int('I3') % len(str(input_int('I3')))) !== (if input_bool('B2') then (93 - input_int('I3')) else int(input_bool('B2'))))))))) || ((input_bool('B1') == input_bool('B2')) && input_bool('B3'))) then (input_bool('B1') && input_bool('B3')) else input_bool('B1'))

var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn46 = Function('x1', 'b3', 'b11', 'b34', "var b40 = b34; var b39 = b3; var b44 = b3; var b31 = b11; var b30 = b3; var x13 = x1; var b27; if (!!(x1) !== (eval(\"var x4 = x13; var x5 = x4; var e7 = \\\"var s6 = String(x5);s6\\\";var l8 = (eval(e7)).length;x9 = x4; x10 = l8;var b20 = x9 % x10 !== eval(\\\"var b16 = b11; var e12 = \\\\\\\"b11\\\\\\\";var x18; if (eval(e12)) { x14 = 93; x15 = x13; x18 = x14 - x15; } else {  x18 = (b16) | 0; }x18\\\");var b22; if (b3) { b22 = !b20; } else { b22 = b20; }~~(b22)\")) ? true : false) { b27 = true; } else { b27 = false; }var b29; if (b27) { b29 = false; } else { b29 = true; }var b35; if (b34) { var b32 = b30 == b31; b35 = b32; } else { b35 = false; }var b37; if (b35) { b37 = true; } else { b37 = b29; }var x45; if (b37) { var b42; if (b39) { var e41 = \"b40\"; b42 = eval(e41); } else { b42 = false; } x45 = b42; } else {  x45 = b44; } return x45;");
fn46(input_I3, input_B1, input_B2, input_B3);
