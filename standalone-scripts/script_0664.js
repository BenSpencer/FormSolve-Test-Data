// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I3') >= 1) then (if bool(input_int('I1')) then (if input_bool('B2') then false else not((int(input_bool('B1')) <= (input_int('I2') / int(str(input_int('I1'))))))) else (input_int('I3') <= int(input_string('S2')))) else bool(input_string('S3')))

var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);

var fn41 = Function('b25', 'b26', 'x27', 's37', 'x1', 'x28', 's32', "var x29 = x1; var b2 = x1 >= 1;var x4 = x28; var b6 = !!(eval(\"x4\"));var x36; if (b6) { var fn24 = function(b8, b7, x11, x12) { var x23; if (b7) {  x23 = false; } else { x23 = eval(\"var e9 = \\\"b8\\\";var x10 = +(eval(e9));var e13 = \\\"x12\\\";var x15 = Number(String(eval(e13)));x16 = x11; x17 = x15;var e18 = \\\"x16 / x17\\\";var b19 = x10; var b20 = eval(e18);var b21; if (b19 <= b20) { b21 = false; } else { b21 = true; }b21\"); } return x23; }  x36 = fn24(b25, b26, x27, x28); } else { var b34 = eval(\"eval(\\\"x29\\\")\"); var b35 = parseInt(s32, 10); x36 = b34 <= b35; }var x40; if (b2) { x40 = x36; } else { var e38 = \"s37\"; x40 = (eval(e38)) ? true : false; } return x40;");
fn41(input_B1, input_B2, input_I2, input_S3, input_I3, input_I1, input_S2);
