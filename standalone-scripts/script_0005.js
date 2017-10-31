// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((bool(input_int('I2')) && bool(int(bool(input_string('S2'))))) === bool(str(input_int('I1')))) then ((input_string('S3') <= str((bool(str(int(((str(input_int('I3')) == input_string('S2')) || ("" <= input_string('S2')))))) !== input_bool('B1')))) && not(bool(str(input_int('I3'))))) else bool(input_int('I3')))

var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");

(function (s14, x15, b29, x9, x1, s17) {
    var s3 = s17;
    var x41 = x15;
    var x5 = (Boolean(s3)) | 0;
    var b7 = false;
    if ((x1) ? true : false && (x5) ? true : false) {
        b7 = true;
    }
    var s10 = String(x9);
    var b11 = Boolean(s10);
    var b12 = b7 === b11;
    var x43;
    if (b12) {
        var x35 = x15;
        var s20 = s17;
        var b18 = String(x15) == s17;
        var b22;
        if ("" <= eval("s20")) {
            b22 = true;
        } else {
            b22 = false;
        }
        var b24 = b18 || b22;
        var s27 = '' + (Number(b24));
        var b28 = (s27) ? true : false;
        var s32 = String((b28 !== b29));
        var s36 = (x35).toString();
        var b37 = (s36) ? true : false;
        var b38;
        if (b37) {
            b38 = false;
        } else {
            b38 = true;
        }
        var b39;
        if (b38) {
            b39 = (s14 <= s32);
        } else {
            b39 = false;
        }
        x43 = b39;
    } else {
        var b42 = Boolean(x41);
        x43 = b42;
    }
    return x43;
})(input_S3, input_I3, input_B1, input_I1, input_I2, input_S2);
