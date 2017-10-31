// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((str((input_int('I1') / int((input_string('S3') == str(len(str(bool(input_int('I2'))))))))) < input_string('S3'))) then input_bool('B1') else not(not((bool(str((input_int('I2') < int(input_bool('B1'))))) != input_bool('B2')))))

var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);

var fn35 = function (x22, b29, x1, s16, b20) {
    var x5 = x22;
    var b23 = b20;
    var s3 = s16;
    var e4 = "s3";
    var b6 = !! (x5);
    var s7 = (b6).toString();
    var b10 = eval(e4) == String((s7).length);
    x13 = eval("x1");
    x14 = (b10) ? 1 : 0;
    var b17 = '' + (x13 / x14) < s16;
    var b19 = !(b17);
    var e21 = "b20";
    var b25;
    if (x22 < +(b23)) {
        b25 = true;
    } else {
        b25 = false;
    }
    var b30 = Boolean('' + (b25)) != b29;
    var b32;
    if (b30) {
        b32 = false;
    } else {
        b32 = true;
    }
    var b33;
    if (b32) {
        b33 = false;
    } else {
        b33 = true;
    }
    return (b19 ? eval(e21) : b33);
}
fn35(input_I2, input_B2, input_I1, input_S3, input_B1);
