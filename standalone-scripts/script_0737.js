// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if false then bool(int(input_string('S3'))) else (not((input_int('I2') in [52, 4, 0, 3, 2, 6, 10, 58, 9, 84])) === bool((if input_bool('B2') then int(input_bool('B3')) else input_int('I3')))))

var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);

var fn20 = function (b12, x4, b11, s1, x14) {
    var x2 = Number(s1);
    var b3 = (x2) ? true : false;
    var b10 = !(eval("var e8 = \"var opts6 = [52, 4, 0, 3, 2, 6, 10, 58, 9, 84];opts6.indexOf(x4) > -1\";eval(e8)"));
    var x13 = Number(b12);
    var x15;
    if (b11) {
        x15 = x13;
    } else {
        x15 = x14;
    }
    var b17;
    if (b10 === (x15) ? true : false) {
        b17 = true;
    } else {
        b17 = false;
    }
    return (false ? b3 : b17);
}
fn20(input_B3, input_I2, input_B2, input_S3, input_I3);
