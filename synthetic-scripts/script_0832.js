// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I3')) then bool(str((bool(input_string('S3')) != (str(input_bool('B3')) < input_string('S3'))))) else (input_bool('B1') === (input_int('I2') === len(input_string('S2')))))

var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);

function fn25(b16, x1, s4, s18, x17, b6) {
    var x24;
    if (Boolean(eval("x1"))) {
        x24 = ((eval("var s8 = s4; var b5 = Boolean(s4);var s7 = String(b6);var b9; if (s7 < s8) { b9 = true; } else { b9 = false; }var b11 = b5 != b9;b11")).toString()) ? true : false;
    } else {
        var b20 = x17 === (s18).length;
        var b22 = false;
        if (b16 === b20) {
            b22 = true;
        }
        x24 = b22;
    }
    return x24;
}
fn25(input_B1, input_I3, input_S3, input_S2, input_I2, input_B3);
