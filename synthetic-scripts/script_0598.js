// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I2')) then input_int('I1') else int((bool(regex-replace(str(input_bool('B3')), /([a-z]?|l)/, "IfjDT")) || (int((input_int('I2') > input_int('I1'))) == int(not((input_string('S1') <= input_string('S3'))))))))

var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn30 = Function('s18', 'x1', 's16', 'x12', 'b5', "var x4 = x12; var x11 = x1; var b2 = !!(x1);var e3 = \"b2\";var x29; if (eval(e3)) {  x29 = x4; } else { var x28 = +(eval(\"var s6 = '' + (b5);var e7 = \\\"s6\\\";var re9 = new RegExp(\\\"([a-z]?|l)\\\");var b19 = eval(\\\"s16\\\"); var b20 = s18;var x22 = +(!(b19 <= b20));var b23 = ((x11 > x12)) ? 1 : 0 == x22;var b25; if (b23) { b25 = true; } else { b25 = !!((eval(e7)).replace(re9, \\\"IfjDT\\\")); }b25\")); x29 = x28; } return x29;");
fn30(input_S3, input_I2, input_S1, input_I1, input_B3);
