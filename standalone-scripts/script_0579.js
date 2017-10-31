// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (not(not(input_bool('B1'))) == bool(len(input_string('S1')))) then true else (false !== bool(str(((if bool(int(input_bool('B3'))) then input_int('I2') else int((bool(str(input_bool('B1'))) && (len(str(input_bool('B2'))) === input_int('I3'))))) in [1, 2, 1, 1, 6])))))

var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn37 = Function('x21', 'b11', 'b1', 's4', 'x14', 'b18', "var b15 = b1; var e5 = \"s4\";var b9; if (!(!(b1))) { b9 = !!(eval(\"(eval(e5)).length\")); } else { b9 = !!!(eval(\"(eval(e5)).length\")); }var e35 = \"var x12 = (b11) ? 1 : 0;var b13 = !!(x12);var x27; if (b13) {  x27 = x14; } else { var b24; if (((String(b18)).length === x21)) { b24 = !!('' + (b15)); } else { b24 = false; } x27 = +(b24); }var opts29 = [1, 2, 1, 1, 6];var s31 = String(opts29.indexOf(x27) > -1);var b33 = false; var b34 = Boolean(s31);b33 !== b34\";var x36; if (b9) {  x36 = true; } else { x36 = eval(e35); } return x36;");
fn37(input_I3, input_B3, input_B1, input_S1, input_I2, input_B2);
