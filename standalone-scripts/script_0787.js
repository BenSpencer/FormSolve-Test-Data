// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool((len(str(input_bool('B1'))) - int(input_bool('B3')))) then bool((if (if input_bool('B2') then bool(input_int('I2')) else input_bool('B3')) then int(bool(input_string('S1'))) else int(bool(input_string('S2'))))) else false)

var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);

function fn30(b14, s19, s22, b17, x15, b1) {
    var b9 = b17;
    x11 = eval("var e7 = \"var e6 = \\\"var e2 = \\\\\\\"b1\\\\\\\";var s3 = (eval(e2)).toString();var e5 = \\\\\\\"(s3).length\\\\\\\";eval(e5)\\\";eval(e6)\";eval(e7)") - +(b9);
    var x29;
    if ((x11) ? true : false) {
        var b16 = (x15) ? true : false;
        var x18;
        if (b14) {
            x18 = b16;
        } else {
            x18 = b17;
        }
        var b20 = !! (s19);
        var x21 = (b20) | 0;
        var x27;
        if (x18) {
            x27 = x21;
        } else {
            var e25 = "(eval(\"s22\")) ? true : false";
            var x26 = Number(eval(e25));
            x27 = x26;
        }
        x29 = !! (x27);
    } else {
        x29 = false;
    }
    return x29;
}
fn30(input_B2, input_S1, input_S2, input_B3, input_I2, input_B1);
