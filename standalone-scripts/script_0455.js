// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int((input_bool('B2') != (int(str((len(input_string('S3')) < int(str(input_bool('B3')))))) != input_int('I2')))) < len(str(input_bool('B3')))) then input_int('I2') else int(str(input_int('I2'))))

var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);

var fn29 = function (x13, b1, s3, b19) {
    var x24 = x13;
    var x25 = x13;
    var b5 = b19;
    var l4 = (s3).length;
    var s7 = '' + (eval("b5"));
    var x8 = Number(s7);
    var b9 = l4;
    var b10 = x8;
    var b14 = Number('' + (b9 < b10));
    var b15 = x13;
    var x18 = ((eval("b1") != b14 != b15)) | 0;
    var s20 = String(b19);
    var l21 = (s20).length;
    var b22 = x18;
    var b23 = l21;
    var x28;
    if (b22 < b23) {
        x28 = x24;
    } else {
        var x27 = Number((x25).toString());
        x28 = x27;
    }
    return x28;
}
fn29(input_I2, input_B2, input_S3, input_B3);
