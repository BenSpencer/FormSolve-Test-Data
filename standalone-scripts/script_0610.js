// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then (if (input_string('S2') > str(input_int('I2'))) then input_string('S3') else input_string('S2')) else str((int(not((input_bool('B2') === (bool(len(input_string('S1'))) && input_bool('B2'))))) === (int((if bool(len(input_string('S3'))) then not((str(input_int('I2')) == input_string('S2'))) else false)) / input_int('I3')))))

var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");

var fn43 = function (s22, x35, s12, b1, s2, b11, x25) {
    var s8 = s22;
    var s27 = s2;
    var x3 = x25;
    var x42;
    if (b1) {
        var s9 = s2;
        var e4 = "x3";
        var b6;
        if (s2 > (eval(e4)).toString()) {
            b6 = true;
        } else {
            b6 = false;
        }
        var x10;
        if (b6) {
            x10 = s8;
        } else {
            x10 = s9;
        }
        x42 = x10;
    } else {
        var e41 = "var b15 = b11; var l13 = (s12).length;var b16; if (!!(l13)) {  b16 = b15; } else { b16 = false; }var b18 = false; if (b11 === b16) { b18 = true; }var b20; if (b18) { b20 = false; } else { b20 = true; }var x21 = (b20) ? 1 : 0;var x33; if (!!((s22).length)) { x33 = eval(\"var s26 = '' + (x25);var e28 = \\\"s27\\\";var b29; if (s26 == eval(e28)) { b29 = true; } else { b29 = false; }!(b29)\"); } else { x33 = false; }var x34 = ~~(x33);x36 = x34; x37 = x35;'' + ((x21 === x36 / x37))";
        x42 = eval(e41);
    }
    return x42;
}
fn43(input_S3, input_I3, input_S1, input_B3, input_S2, input_B2, input_I2);
