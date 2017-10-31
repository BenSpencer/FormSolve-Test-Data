// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str((if (input_int('I2') != input_int('I3')) then (if bool(str(int(input_bool('B1')))) then bool(input_string('S3')) else input_bool('B2')) else not(bool(len((if input_bool('B1') then input_string('S3') else str(input_int('I2')))))))) == str((input_string('S1') in ['7Syk', 'T', 'jX', 'S', 'fI', 'K', 'St', 'KQ', 'Su4WH', 'EelP']))) then not((input_bool('B3') == input_bool('B2'))) else not(input_bool('B1')))

var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);

var fn40 = function (x2, b12, x1, b14, b31, s24, s10) {
    var b37 = b14;
    var b32 = b12;
    var x16 = x1;
    var s15 = s10;
    var b5 = b14;
    var x6 = (b5) | 0;
    var s7 = (x6).toString();
    var e9 = "(s7) ? true : false";
    var x13;
    if (eval(e9)) {
        x13 = !! (s10);
    } else {
        x13 = b12;
    }
    var x22;
    if ((x1 != x2)) {
        x22 = x13;
    } else {
        var s17 = String(x16);
        var x18;
        if (b14) {
            x18 = s15;
        } else {
            x18 = s17;
        }
        var b20 = ((x18).length) ? true : false;
        var b21;
        if (b20) {
            b21 = false;
        } else {
            b21 = true;
        }
        x22 = b21;
    }
    var s23 = (x22).toString();
    var opts26 = ['7Syk', 'T', 'jX', 'S', 'fI', 'K', 'St', 'KQ', 'Su4WH', 'EelP'];
    var b25 = false;
    for (var idx27 = 0; idx27 < opts26.length; idx27++) {
        if (opts26[idx27] == s24) {
            b25 = true;
            break;
        }
    }
    var b29 = false;
    if (s23 == '' + (b25)) {
        b29 = true;
    }
    var b33;
    if (b31) {
        b33 = b32;
    } else {
        b33 = !b32;
    }
    var e35 = "b33";
    var b36 = !(eval(e35));
    var x39;
    if (b29) {
        x39 = b36;
    } else {
        x39 = !(b37);
    }
    return x39;
}
fn40(input_I3, input_B2, input_I2, input_B1, input_B3, input_S1, input_S3);
