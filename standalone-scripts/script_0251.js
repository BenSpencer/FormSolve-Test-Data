// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if input_bool('B1') then not(not(bool(input_string('S2')))) else bool(input_string('S3'))) then input_bool('B1') else (input_bool('B2') != not(not(bool(input_int('I1'))))))

var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);

(function (b1, x13, s3, b12, s7) {
    var b10 = b1;
    var e2 = "b1";
    var x9;
    if (eval(e2)) {
        var b4 = (s3) ? true : false;
        x9 = !(!(b4));
    } else {
        x9 = (s7) ? true : false;
    }
    var b14 = Boolean(x13);
    var b16;
    if (!(b14)) {
        b16 = false;
    } else {
        b16 = true;
    }
    var b17 = b12 != b16;
    var x19;
    if (x9) {
        var e11 = "b10";
        x19 = eval(e11);
    } else {
        x19 = b17;
    }
    return x19;
})(input_B1, input_I1, input_S2, input_B2, input_S3);
