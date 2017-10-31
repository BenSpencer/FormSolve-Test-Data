// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if false then int(str((if input_bool('B3') then (if not(not((str(input_int('I2')) == input_string('S1')))) then input_bool('B2') else (int(str(input_int('I1'))) >= input_int('I2'))) else input_bool('B3')))) else (int(bool(input_string('S3'))) + len(str(input_int('I1')))))

var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");

function fn33(s4, x14, s22, b9, x11, b1) {
    var x25 = x11;
    var b18 = b1;
    var x19;
    if (b1) {
        var x2 = x14;
        var s3 = '' + (x2);
        var b7;
        if ((s3 == s4)) {
            b7 = false;
        } else {
            b7 = true;
        }
        var x17;
        if (!(b7)) {
            var e10 = "b9";
            x17 = eval(e10);
        } else {
            var s12 = (x11).toString();
            var b15;
            if (parseInt(s12, 10) >= x14) {
                b15 = true;
            } else {
                b15 = false;
            }
            x17 = b15;
        }
        x19 = x17;
    } else {
        x19 = b18;
    }
    var s20 = '' + (x19);
    var b23 = (s22) ? true : false;
    var x24 = Number(b23);
    var e27 = "'' + (x25)";
    var l28 = (eval(e27)).length;
    x29 = x24 + l28;
    var e31 = "x29";
    var x32;
    if (false) {
        x32 = Number(s20);
    } else {
        x32 = eval(e31);
    }
    return x32;
}
fn33(input_S1, input_I2, input_S3, input_B2, input_I1, input_B3);
