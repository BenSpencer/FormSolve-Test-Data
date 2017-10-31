// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((input_bool('B3') == (if not(not(bool(input_int('I2')))) then input_bool('B3') else bool(replace(str((input_int('I2') < (((input_int('I1') - int(input_bool('B1'))) / input_int('I1')) - int((input_bool('B2') == bool(str(not((bool((len(input_string('S2')) - int(input_bool('B2')))) || not(((int(input_string('S2')) % int(input_string('S2'))) > input_int('I3')))))))))))), "Z4ALJ", "fO7"))))) then "SlM" else input_string('S2'))

var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);

var fn61 = Function('b16', 'x33', 's17', 'b1', 'x13', 'b9', 'x2', "var s59 = s17; var b6 = b1; var x7 = x2; var b3 = !!(x2);var b4; if (b3) { b4 = false; } else { b4 = true; }var b5 = !(b4);var x8 = x13; var x10 = (b9) ? 1 : 0;x14 = (x8 - x10) / x13;var e47 = \"var b20 = b16; var s25 = s17; var e19 = \\\"var l18 = (s17).length;l18\\\";x22 = eval(e19) - (b20) ? 1 : 0;var s28 = s25; var x26 = parseInt(s25, 10);var e32 = \\\"(eval(\\\\\\\"x26\\\\\\\") % parseInt(s28, 10))\\\";var b35 = eval(e32) > eval(\\\"x33\\\");var b37; if (b35) { b37 = false; } else { b37 = true; }var b38; if (b37) { b38 = true; } else { b38 = (x22) ? true : false; }var b40 = !(b38);var b44; if (b16) { b44 = ('' + (eval(\\\"b40\\\"))) ? true : false; } else { b44 = !('' + (eval(\\\"b40\\\"))) ? true : false; }Number(b44)\";x48 = x14; x49 = eval(e47);var s53 = (((x7 < x48 - x49)).toString()).replace(\"Z4ALJ\", \"fO7\");var b56 = false; if (b1 == (b5 ? b6 : Boolean(s53))) { b56 = true; }var b58 = !(b56);var x60; if (b58) { x60 = \"SlM\"; } else { x60 = s59; } return x60;");
fn61(input_B2, input_I3, input_S2, input_B3, input_I1, input_B1, input_I2);
