// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if true then bool(input_string('S2')) else (regex-test(input_string('S3'), /^(\w|[a-z])?$/) == (if input_bool('B2') then bool(input_string('S2')) else input_bool('B2'))))

var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);

var fn13 = Function('s1', 'b5', 's3', "var s6 = s1; var b2 = (s1) ? true : false;var b8 = b5; var x9; if (b5) { var b7 = (s6) ? true : false; x9 = b7; } else {  x9 = b8; }var b10; if ((s3).match(/^(\\w|[a-z])?$/) !== null) { if (x9) { b10 = true; } else { b10 = false; } } else { if (x9) { b10 = false; } else { b10 = true; } } return (true ? b2 : b10);");
fn13(input_S2, input_B2, input_S3);
