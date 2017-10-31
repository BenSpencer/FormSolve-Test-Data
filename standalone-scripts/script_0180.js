// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if input_bool('B1') then input_bool('B3') else input_bool('B1')) then "a" else str(((regex-test(input_string('S1'), /^[a-z](JDyFMpJZCPEE\W+|S)?$/) || input_bool('B3')) != (input_string('S1') <= input_string('S3')))))

var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn21 = function (s13, b2, b1, s12) {
    var b9 = b2;
    var b5 = b1;
    var x6;
    if (b1) {
        var e3 = "b2";
        x6 = eval("eval(e3)");
    } else {
        x6 = b5;
    }
    var s7 = s12;
    var re8 = /^[a-z](JDyFMpJZCPEE\W+|S)?$/;
    var b10;
    if (re8.test(s7)) {
        b10 = true;
    } else {
        b10 = b9;
    }
    var e16 = "var b14 = s12 <= s13;b14";
    var b17 = b10 != eval(e16);
    var s19 = String(b17);
    return (x6 ? "a" : s19);
}
fn21(input_S3, input_B3, input_B1, input_S1);
