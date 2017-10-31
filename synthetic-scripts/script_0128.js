// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B2') == (if false then (if input_bool('B3') then not(input_bool('B2')) else (input_string('S1') < input_string('S1'))) else not(input_bool('B3')))) then regex-test(input_string('S3'), /^(\t|\r)?[a-z]mwa$/) else input_bool('B1'))

var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);

var fn20 = function (b10, b18, b1, s16, s5) {
    var b3 = b1;
    var b2 = b10;
    var b4;
    if (b3) {
        b4 = false;
    } else {
        b4 = true;
    }
    var s6 = s5;
    var b7 = false;
    if (s5 < s6) {
        b7 = true;
    }
    var x9;
    if (b2) {
        x9 = b4;
    } else {
        x9 = b7;
    }
    var b11;
    if (b10) {
        b11 = false;
    } else {
        b11 = true;
    }
    var b14 = b1;
    var b15 = (false ? x9 : eval("b11"));
    var x19;
    if (b14 == b15) {
        x19 = (s16).match(/^(\t|\r)?[a-z]mwa$/) !== null;
    } else {
        x19 = b18;
    }
    return x19;
}
fn20(input_B3, input_B1, input_B2, input_S3, input_S1);
