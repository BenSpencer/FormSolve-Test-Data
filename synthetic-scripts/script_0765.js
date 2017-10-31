// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then (((input_int('I3') == len(input_string('S1'))) == not((len(str(int(input_string('S2')))) !== input_int('I2')))) || (input_bool('B3') !== regex-test(input_string('S1'), /^Blt_(TtDm|[a-z]+Dj)d$/))) else bool((len(input_string('S2')) - input_int('I1'))))

var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn34 = Function('x2', 'b1', 'x12', 'x29', 's21', 's27', 'b20', "var s7 = s27; x30 = (s27).length - x29;var b32 = Boolean(x30);var x33; if (b1) { var s3 = s21; var b5 = x2 == (s3).length;var e8 = \"s7\";var x9 = Number(eval(e8));var s10 = '' + (x9);var b13 = (s10).length; var b14 = x12;var b16 = !(eval(\"b13 !== b14\"));var b17 = b5; var b18 = b16;var e19 = \"b17 == b18\";var re22 = new RegExp(\"^Blt_(TtDm|[a-z]+Dj)d$\");var b23 = false; if (b20 !== re22.test(s21)) { b23 = true; }var b25 = eval(e19); var b26 = b23; x33 = b25 || b26; } else { x33 = b32; } return x33;");
fn34(input_I3, input_B1, input_I2, input_I1, input_S1, input_S2, input_B3);
