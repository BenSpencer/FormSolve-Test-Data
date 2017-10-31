// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if input_bool('B1') then ((if bool(len(str((if not((input_int('I2') >= input_int('I1'))) then input_bool('B1') else not(bool(str(input_bool('B2')))))))) then input_string('S1') else input_string('S3')) >= str(input_bool('B3'))) else true) then len(str(input_int('I2'))) else len(str(int(input_bool('B2')))))

var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");

function fn34(b1, s18, b21, s19, b29, x2, x4) {
    var x26 = x2;
    var b9 = b29;
    var b8 = b1;
    var x25;
    if (b1) {
        var e14 = "var b7; if ((eval(\"x2\") >= x4)) { b7 = false; } else { b7 = true; }var x13; if (b7) { x13 = b8; } else { var b11 = Boolean((b9).toString());var b12; if (b11) { b12 = false; } else { b12 = true; } x13 = b12; }x13";
        var b17 = ((String(eval(e14))).length) ? true : false;
        var x20;
        if (b17) {
            x20 = s18;
        } else {
            x20 = s19;
        }
        var b23 = false;
        if (x20 >= String(b21)) {
            b23 = true;
        }
        x25 = b23;
    } else {
        x25 = true;
    }
    var s27 = String(x26);
    var l28 = (s27).length;
    var x33;
    if (x25) {
        x33 = l28;
    } else {
        var l32 = ((Number(b29)).toString()).length;
        x33 = l32;
    }
    return x33;
}
fn34(input_B1, input_S1, input_B3, input_S3, input_B2, input_I2, input_I1);
