// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then input_string('S3') else str((not(bool(input_string('S3'))) === ((int(bool(input_int('I1'))) != input_int('I3')) && not(not(bool((input_string('S2') + str(input_bool('B1'))))))))))

var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);

var fn31 = Function('x6', 'x11', 's2', 'b17', 'b1', 's15', "var s3 = s2; var b5 = !(!!(s3));var e7 = \"x6\";var e12 = \"x11\";var e16 = \"s15\";var x20 = eval(e16) + '' + (eval(\"b17\"));var b22 = (x20) ? true : false;var b23 = !(b22);var b24; if (b23) { b24 = false; } else { b24 = true; }var b25 = false; if ((eval(\"((eval(e7)) ? true : false) | 0\") != eval(e12)) && b24) { b25 = true; }var s29 = String((b5 === b25));var x30; if (b1) { x30 = s2; } else { x30 = s29; } return x30;");
fn31(input_I1, input_I3, input_S3, input_B1, input_B2, input_S2);
