// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if true then input_string('S3') else str((int((str(input_int('I1')) !== input_string('S1'))) > int(not(bool((if not(bool(str(input_int('I1')))) then input_string('S3') else input_string('S2'))))))))

var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");

var fn23 = Function('s14', 'x2', 's4', 's1', "var s13 = s1; var x9 = x2; var s3 = (x2).toString();var e5 = \"s4\";var b6 = s3 !== eval(e5);var x8 = +(b6);var b12; if (('' + (x9)) ? true : false) { b12 = false; } else { b12 = true; }var x15; if (b12) {  x15 = s13; } else {  x15 = s14; }var b17 = !((x15) ? true : false);var b19; if (x8 > (b17) ? 1 : 0) { b19 = true; } else { b19 = false; }var x22; if (true) {  x22 = s1; } else { x22 = (b19).toString(); } return x22;");
fn23(input_S2, input_I1, input_S1, input_S3);
