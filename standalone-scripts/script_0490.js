// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then int(input_string('S3')) else int(bool(input_string('S2'))))

var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");

var fn9 = function (s5, s3, b1) {
    var x8;
    if (eval("b1")) {
        x8 = parseInt(s3, 10);
    } else {
        x8 = Number( !! (s5));
    }
    return x8;
}
fn9(input_S2, input_S3, input_B3);
