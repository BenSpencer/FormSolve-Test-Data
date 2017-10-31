// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I3') in [0, 1, 1, 1, 61, -66, 98, 44, 0, 0]) then (input_int('I1') > (if input_bool('B3') then int(input_string('S3')) else (input_int('I2') - (if bool(input_string('S1')) then int(input_string('S3')) else (int(str(input_bool('B2'))) * (if bool((input_int('I1') / int(input_string('S3')))) then (1 + input_int('I2')) else 1)))))) else bool(len(input_string('S2'))))

var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);

var fn45 = Function('s41', 'x21', 's14', 'x1', 's12', 'b17', 'b8', 'x11', "var e2 = \"x1\";var opts5 = [0, 1, 1, 1, 61, -66, 98, 44, 0, 0];var b4 = opts5.indexOf(eval(\"eval(e2)\")) > -1;var x44; if (b4) { x44 = eval(\"var x7 = x21; var s9 = s14; var x37; if (b8) { var x10 = Number(s9); x37 = x10; } else { var e36 = \\\"var x27 = x11; var s22 = s14; var x33; if ((s12) ? true : false) { var e16 = \\\\\\\"var x15 = Number(s14);x15\\\\\\\"; x33 = eval(e16); } else { var x23 = parseInt(s22, 10);var x30; if (!!((x21 / x23))) {  x30 = (1 + x27); } else { x30 = 1; }x31 = Number(eval(\\\\\\\"var s18 = (b17).toString();s18\\\\\\\")) * x30; x33 = x31; }(x11 - x33)\\\"; x37 = eval(e36); }var b38 = x7 > x37;b38\"); } else { x44 = Boolean((s41).length); } return x44;");
fn45(input_S2, input_I1, input_S3, input_I3, input_S1, input_B2, input_B3, input_I2);
