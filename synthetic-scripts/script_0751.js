// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S3')) then bool(str(input_int('I2'))) else bool((input_int('I1') * len(str(len(str(input_bool('B1'))))))))

var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");

function fn17(x3, b7, x6, s1) {
    var x16;
    if ( !! (s1)) {
        var b5 = !! ((x3).toString());
        x16 = b5;
    } else {
        var l10 = (eval("var s8 = String(b7);s8")).length;
        x13 = x6;
        x14 = ('' + (l10)).length;
        var b15 = !! (x13 * x14);
        x16 = b15;
    }
    return x16;
}
fn17(input_I2, input_B1, input_I1, input_S3);
