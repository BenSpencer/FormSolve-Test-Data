// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((if input_bool('B1') then (input_int('I1') == input_int('I3')) else not((int(input_string('S2')) == (if input_bool('B1') then len(str(input_bool('B3'))) else int(input_string('S1')))))) === regex-test(input_string('S1'), /^Ot[A-Z]\wl\nQgmI(B|Wk)\d*$/)) then input_bool('B2') else ((input_bool('B2') && (input_int('I1') !== len(str(input_int('I3'))))) !== input_bool('B2')))

var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);

var fn40 = Function('x2', 'b10', 's13', 'b1', 'x28', 'b24', 's6', "var x27 = x2; var x3 = x28; var b26 = b24; var s20 = s13; var b8 = b1; var b4 = false; if (x2 == x3) { b4 = true; }var x19; if (b1) { x19 = b4; } else { var x7 = parseInt(s6, 10);var e9 = \"b8\";var s11 = String(b10);var l12 = (s11).length;var x14 = parseInt(s13, 10);var x15; if (eval(e9)) { x15 = l12; } else { x15 = x14; }var b16; if (x7 == x15) { b16 = true; } else { b16 = false; }var b18 = !(b16); x19 = b18; }var re21 = /^Ot[A-Z]\\wl\\nQgmI(B|Wk)\\d*$/;var b22 = x19; var b23 = re21.test(s20);var e25 = \"b24\";var b36 = b26; var s29 = (x28).toString();var b31 = x27 !== (s29).length;var b33 = b26; var b34 = b31; return (b22 === b23 ? eval(e25) : (eval(\"b33 && b34\") !== b36));");
fn40(input_I1, input_B3, input_S1, input_B1, input_I3, input_B2, input_S2);
