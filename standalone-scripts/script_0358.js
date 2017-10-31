// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then (if input_bool('B3') then regex-test(input_string('S3'), /^(m|\D)T D[a-z]*tN$/) else input_bool('B1')) else (input_bool('B3') != (input_string('S1') in ['lWNC', 'h', 'pNO'])))

var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");

var fn16 = Function('b5', 's3', 'b2', 'b1', 's8', "var b7 = b2; var x15; if (b1) { var x6; if (b2) { x6 = (s3).match(/^(m|\\D)T D[a-z]*tN$/) !== null; } else { x6 = b5; } x15 = x6; } else { var b13 = b7 != eval(\"var opts10 = ['lWNC', 'h', 'pNO'];var b9 = false; for (var idx11 = 0; idx11 < opts10.length; idx11++) { if (opts10[idx11] == s8) { b9 = true; } }b9\"); x15 = b13; } return x15;");
fn16(input_B1, input_S3, input_B3, input_B2, input_S1);
