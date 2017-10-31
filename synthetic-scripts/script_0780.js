// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (bool(input_string('S3')) == not(input_bool('B2'))) then 1 else input_int('I2'))

var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);

function fn11(b4, s1, x9) {
    var e2 = "s1";
    var b3 = Boolean(eval(e2));
    var b5 = !(b4);
    var e6 = "b5";
    var b7 = false;
    if (b3 == eval(e6)) {
        b7 = true;
    }
    return (b7 ? 1 : x9);
}
fn11(input_B2, input_S3, input_I2);
