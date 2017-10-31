// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then (if not(not((int(not(bool((if bool(input_string('S3')) then len(input_string('S2')) else ((0 % input_int('I3')) / int(input_bool('B3'))))))) > len(input_string('S3'))))) then input_bool('B1') else bool(input_string('S2'))) else not(bool(input_string('S3'))))

var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn37 = function (b12, x7, s28, b1, s2) {
    var s33 = s2;
    var b27 = b1;
    var s5 = s28;
    var e25 = "var s20 = s2; var e3 = \"s2\";var b4 = (eval(e3)) ? true : false;var l6 = (s5).length;x10 = 0; x11 = eval(\"eval(\\\"x7\\\")\");x14 = x10 % x11 / ~~(b12);var x16; if (b4) { x16 = l6; } else { x16 = x14; }var b18; if (Boolean(x16)) { b18 = false; } else { b18 = true; }var l21 = (s20).length;var b22 = (b18) ? 1 : 0; var b23 = l21;!(b22 > b23)";
    var b35 = !((s33) ? true : false);
    return (b1 ? (!(eval(e25)) ? b27 : eval("var b29 = Boolean(s28);var e30 = \"b29\";eval(e30)")) : b35);
}
fn37(input_B3, input_I3, input_S2, input_B1, input_S3);
