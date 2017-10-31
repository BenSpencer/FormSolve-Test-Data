// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if false then int(input_string('S3')) else int(bool((if not(bool(int(input_bool('B2')))) then input_int('I2') else len(str(bool(str(not(input_bool('B3'))))))))))

var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);

function fn19(s1, b9, x8, b3) {
    var x2 = Number(s1);
    var b5 = Boolean(~~(b3));
    var b6;
    if (b5) {
        b6 = false;
    } else {
        b6 = true;
    }
    var b10;
    if (b9) {
        b10 = false;
    } else {
        b10 = true;
    }
    var b12 = !! ('' + (b10));
    var x15;
    if (eval("b6")) {
        x15 = x8;
    } else {
        x15 = ('' + (b12)).length;
    }
    var x17 = ( !! (x15)) ? 1 : 0;
    var x18;
    if (false) {
        x18 = x2;
    } else {
        x18 = x17;
    }
    return x18;
}
fn19(input_S3, input_B3, input_I2, input_B2);
