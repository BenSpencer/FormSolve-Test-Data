// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((if (0 >= int(input_string('S2'))) then input_int('I1') else input_int('I3')) >= len(str((regex-test(str(int(((if bool(input_string('S3')) then true else (if (input_string('S1') in ['', 'XTi1K', 'Pbf8', 'E', 'sl0', '', 'gKhtM', 'Xf1']) then bool(input_int('I1')) else (input_int('I3') > input_int('I1')))) == bool(input_string('S2'))))), /^n(KHHo|A)K[A-Za-z]G\w?\nLRwv$/) && input_bool('B2'))))) then bool(input_int('I3')) else not(bool(input_int('I2'))))

var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);

(function (s10, s8, x41, x14, x17, s1, b32) {
    var x39 = x17;
    var x5 = x14;
    var s24 = s1;
    var x6 = x17;
    var x2 = parseInt(s1, 10);
    var b3 = false;
    if (0 >= x2) {
        b3 = true;
    }
    var x7;
    if (b3) {
        x7 = x5;
    } else {
        x7 = x6;
    }
    var b9 = !! (s8);
    var x18 = x14;
    var opts12 = ['', 'XTi1K', 'Pbf8', 'E', 'sl0', '', 'gKhtM', 'Xf1'];
    var b11 = false;
    for (var idx13 = 0; idx13 < opts12.length; idx13++) {
        if (opts12[idx13] == s10) {
            b11 = true;
        }
    }
    var x22;
    if (b11) {
        x22 = eval("(x14) ? true : false");
    } else {
        x22 = eval("(x17 > x18)");
    }
    var x23;
    if (b9) {
        x23 = true;
    } else {
        x23 = x22;
    }
    var b25 = Boolean(s24);
    var b26 = x23 == b25;
    var e28 = "b26";
    var b33;
    if ((((eval(e28)) | 0).toString()).match(/^n(KHHo|A)K[A-Za-z]G\w?\nLRwv$/) !== null) {
        b33 = b32;
    } else {
        b33 = false;
    }
    var l36 = ('' + (b33)).length;
    var b37 = x7;
    var b38 = l36;
    var b43;
    if (Boolean(x41)) {
        b43 = false;
    } else {
        b43 = true;
    }
    var x44;
    if (b37 >= b38) {
        x44 = Boolean(x39);
    } else {
        x44 = b43;
    }
    return x44;
})(input_S1, input_S3, input_I2, input_I1, input_I3, input_S2, input_B2);
