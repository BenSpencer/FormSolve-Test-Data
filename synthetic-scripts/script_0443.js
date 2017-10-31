// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((int(input_string('S1')) != int(input_bool('B3')))) then bool(input_int('I2')) else (if bool(input_string('S3')) then (bool(len(input_string('S2'))) == (input_int('I2') == int(input_bool('B1')))) else (int(not(bool(input_int('I3')))) in [9, 140, 1, -29])))

var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);

(function (s1, x34, b3, s35, s33, b37, x36) {
    var x8 = x34;
    var x2 = parseInt(s1, 10);
    var b5 = false;
    if (x2 != ~~(b3)) {
        b5 = true;
    }
    var b7 = !(b5);
    var fn32 = function (s10, x16, s12, x24, b18) {
        var b11 = (s10) ? true : false;
        var b25 = !! (x24);
        var opts29 = [9, 140, 1, -29];
        var b28 = false;
        for (var idx30 = 0; idx30 < opts29.length; idx30++) {
            if (opts29[idx30] == (!(b25)) | 0) {
                b28 = true;
            }
        }
        var x31;
        if (b11) {
            var e13 = "s12";
            var l14 = (eval(e13)).length;
            var e17 = "x16";
            var b20 = false;
            if (eval(e17) == Number(b18)) {
                b20 = true;
            }
            var b22;
            if (Boolean(l14) == b20) {
                b22 = true;
            } else {
                b22 = false;
            }
            x31 = b22;
        } else {
            x31 = b28;
        }
        return x31;
    }
    var x38;
    if (b7) {
        x38 = Boolean(x8);
    } else {
        x38 = fn32(s33, x34, s35, x36, b37);
    }
    return x38;
})(input_S1, input_I2, input_B3, input_S2, input_S3, input_B1, input_I3);
