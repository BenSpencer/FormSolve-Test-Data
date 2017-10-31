// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((input_int('I2') > input_int('I1')) != input_bool('B3')) then input_int('I2') else len((input_string('S2') + input_string('S3'))))

var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");

(function (b5, s10, s11, x2, x1) {
    var x9 = x1;
    var e6 = "b5";
    var b7 = (x1 > x2) != eval(e6);
    var x15;
    if (b7) {
        x15 = x9;
    } else {
        var x12 = s10 + s11;
        var l14 = (x12).length;
        x15 = l14;
    }
    return x15;
})(input_B3, input_S2, input_S3, input_I1, input_I2);
