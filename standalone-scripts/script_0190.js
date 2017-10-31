// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(input_bool('B2')) then not((input_string('S3') == str(input_int('I3')))) else (len(input_string('S3')) !== int(str(input_int('I2')))))

var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);

function fn22(x4, x14, b1, s10) {
    var s3 = s10;
    var b2;
    if (b1) {
        b2 = false;
    } else {
        b2 = true;
    }
    var b19 = false;
    if (eval("eval(\"(s10).length\")") !== eval("var s15 = String(x14);var x16 = parseInt(s15, 10);var e17 = \"x16\";eval(e17)")) {
        b19 = true;
    }
    var x21;
    if (b2) {
        var s5 = String(x4);
        var b6 = s3;
        var b7 = s5;
        var e8 = "b6 == b7";
        x21 = !(eval(e8));
    } else {
        x21 = b19;
    }
    return x21;
}
fn22(input_I3, input_I2, input_B2, input_S3);
