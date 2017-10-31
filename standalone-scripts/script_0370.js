// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((str(bool(input_int('I2'))) > str(int(input_string('S3')))) !== not(input_bool('B3'))) then str(input_bool('B2')) else str(int(str(not(input_bool('B2'))))))

var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);

function fn22(x1, b9, b13, s4) {
    var b15 = b13;
    var b2 = (x1) ? true : false;
    var x5 = Number(s4);
    var b7 = String(b2) > (x5).toString();
    var b11 = b7;
    var b12 = !(b9);
    var s14 = String(b13);
    return (b11 !== b12 ? s14 : String(eval("var b16 = !(b15);parseInt('' + (b16), 10)")));
}
fn22(input_I2, input_B3, input_B2, input_S3);
