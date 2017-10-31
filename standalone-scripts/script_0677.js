// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B3') === input_bool('B1')) then (input_string('S1') !== str((if bool(input_int('I1')) then len(input_string('S3')) else int(str(not(((if bool(len(input_string('S2'))) then input_int('I2') else len(input_string('S2'))) in [1, 105, 28, 8, 3, 0, 0, 151, 34, 114]))))))) else input_bool('B2'))

var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");

var fn34 = Function('x16', 's11', 'b2', 's9', 'b1', 's5', 'x6', 'b32', "var b3 = false; if (b1 === b2) { b3 = true; }var x33; if (b3) { var e8 = \"Boolean(x6)\";var l10 = (s9).length;var s29 = ((eval(e8) ? l10 : eval(\"var s17 = s11; var e12 = \\\"s11\\\";var b15 = ((eval(\\\"eval(e12)\\\")).length) ? true : false;var l18 = (s17).length;var x19; if (b15) { x19 = x16; } else { x19 = l18; }var opts21 = [1, 105, 28, 8, 3, 0, 0, 151, 34, 114];var b23; if (opts21.indexOf(x19) > -1) { b23 = false; } else { b23 = true; }var s24 = (b23).toString();var e25 = \\\"s24\\\";parseInt(eval(e25), 10)\"))).toString();var b30 = s5; var b31 = s29; x33 = b30 !== b31; } else {  x33 = b32; } return x33;");
fn34(input_I2, input_S2, input_B1, input_S3, input_B3, input_S1, input_I1, input_B2);
