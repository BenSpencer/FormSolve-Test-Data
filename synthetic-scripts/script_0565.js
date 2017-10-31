// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S1')) then bool(input_string('S3')) else (if bool((if input_bool('B1') then input_int('I1') else len(input_string('S3')))) then input_bool('B2') else (str(input_int('I1')) != str(bool(str(bool(int(bool(str(bool(input_string('S2'))))))))))))

var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);

var fn34 = function (x32, b30, s1, s28, s29, b31) {
    var s3 = s28;
    var b2 = Boolean(s1);

    function fn27(s7, s15, b12, b5, x13) {
        var x6 = x13;
        var x10;
        if (b5) {
            x10 = x6;
        } else {
            x10 = eval("(s7).length");
        }
        var b11 = (x10) ? true : false;
        var x26;
        if (b11) {
            x26 = b12;
        } else {
            var s17 = String((s15) ? true : false);
            var x19 = ( !! (s17)) | 0;
            var s21 = '' + ( !! (x19));
            var b24 = (x13).toString();
            var b25 = '' + (Boolean(s21));
            x26 = b24 != b25;
        }
        return x26;
    }
    var x33;
    if (b2) {
        var b4 = !! (s3);
        x33 = b4;
    } else {
        x33 = fn27(s28, s29, b30, b31, x32);
    }
    return x33;
}
fn34(input_I1, input_B2, input_S1, input_S3, input_S2, input_B1);
