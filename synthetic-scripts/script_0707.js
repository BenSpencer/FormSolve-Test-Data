// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str(bool(input_string('S3'))) == input_string('S3')) then int((input_string('S3') < str(input_int('I3')))) else int(input_bool('B3')))

var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");

function fn16(x8, s1, b13) {
    var s7 = s1;
    var s4 = s1;
    var b5;
    if (String((s1) ? true : false) == s4) {
        b5 = true;
    } else {
        b5 = false;
    }
    var b10 = s7;
    var b11 = '' + (x8);
    var x12 = (b10 < b11) ? 1 : 0;
    var x14 = +(b13);
    return (b5 ? x12 : x14);
}
fn16(input_I3, input_S3, input_B3);
