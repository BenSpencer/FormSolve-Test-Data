// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then (int(input_bool('B2')) !== int((len(str(not(bool(input_string('S1'))))) === len(str(not(input_bool('B2'))))))) else (bool(int(str(input_bool('B2')))) && (int((int(input_bool('B1')) >= input_int('I3'))) in [0, 0, 0, 8, 4, 74, -7, 12, 0])))

var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);

var fn39 = Function('b10', 'b26', 'b1', 'x28', 's5', "var b22 = b10; var s23 = '' + (b22);var b25 = (Number(s23)) ? true : false;var b29 = +(b26) >= x28;var x31 = +(b29);var e32 = \"x31\";var opts34 = [0, 0, 0, 8, 4, 74, -7, 12, 0];var b33 = opts34.indexOf(eval(e32)) > -1;var b36 = false; if (b25 && b33) { b36 = true; }var x38; if (b1) { var b2 = b10; var b6 = Boolean(s5);var s8 = (!(b6)).toString();var e16 = \"var l15 = (eval(\\\"eval(\\\\\\\"var b11; if (b10) { b11 = false; } else { b11 = true; }var s12 = '' + (b11);s12\\\\\\\")\\\")).length;l15\";var b20 = Number(eval(\"b2\")) !== +(((s8).length === eval(e16))); x38 = b20; } else { x38 = b36; } return x38;");
fn39(input_B2, input_B1, input_B3, input_I3, input_S1);
