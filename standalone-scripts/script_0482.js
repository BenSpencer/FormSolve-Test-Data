// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then bool(len(input_string('S1'))) else not(not(bool(input_int('I1')))))

var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");

(function (x7, s3, b1) {
    var e9 = "(x7) ? true : false";
    var b10;
    if (eval(e9)) {
        b10 = false;
    } else {
        b10 = true;
    }
    var x12;
    if (eval("b1")) {
        x12 = eval("!!((s3).length)");
    } else {
        x12 = !(b10);
    }
    return x12;
})(input_I1, input_S1, input_B3);
