// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then input_bool('B2') else not((input_bool('B2') != bool(len(str(((len(input_string('S3')) - input_int('I2')) + len(str((bool(input_int('I2')) || ((len(input_string('S3')) * int(bool(input_string('S1')))) === len(input_string('S1')))))))))))))

var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);

function fn39(x10, b1, s15, b2, s12) {
    var b4 = b2;
    var e3 = "b2";
    var x38;
    if (b1) {
        x38 = eval(e3);
    } else {
        var x7 = x10;
        var s5 = s12;
        var l6 = (s5).length;
        var b11 = (x10) ? true : false;
        var s21 = s15;
        var e13 = "s12";
        var l14 = (eval(e13)).length;
        var b16 = Boolean(s15);
        var e17 = "b16";
        var b23 = (l14 * (eval(e17)) | 0);
        var b24 = (s21).length;
        var b25 = b11;
        var b26 = b23 === b24;
        var e27 = "b25 || b26";
        var s28 = String(eval(e27));
        var s32 = (((l6 - x7) + (s28).length)).toString();
        var l33 = (s32).length;
        var b35 = false;
        if (b4 != Boolean(l33)) {
            b35 = true;
        }
        x38 = !(b35);
    }
    return x38;
}
fn39(input_I2, input_B1, input_S1, input_B2, input_S3);
