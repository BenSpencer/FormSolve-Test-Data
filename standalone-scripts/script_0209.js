// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((str(input_bool('B2')) <= "ze2Ld") && not((len(str((if (input_int('I1') != 0) then not((input_int('I2') >= input_int('I2'))) else input_bool('B1')))) in [0, 9, 0]))) then input_string('S3') else str(len(input_string('S3'))))

var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);

var fn29 = function (x5, b1, x8, s24, b14) {
    var s25 = s24;
    var s2 = '' + (b1);
    var b3 = s2;
    var b4 = "ze2Ld";
    var b6;
    if (x5 != 0) {
        b6 = true;
    } else {
        b6 = false;
    }
    var x9 = x8;
    var s16 = '' + ((b6 ? !((x8 >= eval("x9"))) : b14));
    var l17 = (s16).length;
    var opts19 = [0, 9, 0];
    var b18 = false;
    for (var idx20 = 0; idx20 < opts19.length; idx20++) {
        if (opts19[idx20] == l17) {
            b18 = true;
            break;
        }
    }
    var b21;
    if (b18) {
        b21 = false;
    } else {
        b21 = true;
    }
    var l26 = (s25).length;
    var s27 = '' + (l26);
    var x28;
    if ((b3 <= b4 && b21)) {
        x28 = s24;
    } else {
        x28 = s27;
    }
    return x28;
}
fn29(input_I1, input_B2, input_I2, input_S3, input_B1);
