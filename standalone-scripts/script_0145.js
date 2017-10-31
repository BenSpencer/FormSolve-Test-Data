// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str(input_int('I2')) <= str((not(bool(str(int(input_bool('B3'))))) || not((str(input_bool('B2')) > str(int(input_string('S1')))))))) then str(input_bool('B2')) else str(input_int('I1')))

var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");

var fn31 = Function('b3', 'b10', 'x1', 's13', 'x28', "var b25 = b10; var s2 = '' + (x1);var e11 = \"b10\";var s12 = String(eval(e11));var x14 = Number(s13);var s15 = (x14).toString();var e16 = \"s15\";var b17 = s12; var b18 = eval(e16);var b19 = !(b17 > b18);var b20; if (b19) { b20 = true; } else {  b20 = eval(\"var s6 = '' + (eval(\\\"var x4 = (b3) ? 1 : 0;x4\\\"));var b8 = !((s6) ? true : false);b8\"); }var x30; if ((s2 <= '' + (b20))) { x30 = eval(\"String(b25)\"); } else { var s29 = (x28).toString(); x30 = s29; } return x30;");
fn31(input_B3, input_B2, input_I2, input_S1, input_I1);
