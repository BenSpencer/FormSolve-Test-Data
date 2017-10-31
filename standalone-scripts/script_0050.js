// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((input_int('I2') > 0) || input_bool('B3')) then input_bool('B1') else (bool(input_string('S3')) && bool(len(input_string('S3')))))

var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);

function fn20(b4, b7, s10, x1) {
    var b5 = false;
    if ((x1 > 0) || b4) {
        b5 = true;
    }
    var s8 = s10;
    var b9 = (s8) ? true : false;
    var b17;
    if (b9) {
        var e16 = "var b15 = !!((eval(\"eval(\\\"eval(\\\\\\\"s10\\\\\\\")\\\")\")).length);b15";
        b17 = eval(e16);
    } else {
        b17 = false;
    }
    return (b5 ? b7 : b17);
}
fn20(input_B3, input_B1, input_S3, input_I2);
