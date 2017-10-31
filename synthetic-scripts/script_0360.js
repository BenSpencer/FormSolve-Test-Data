// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((if not(regex-test(input_string('S3'), /^(n|[-_ ]?)$/)) then int((not(bool(input_int('I1'))) != true)) else input_int('I2')) in [7, 107, 158, 0]) then str(((input_int('I3') !== 1) === input_bool('B2'))) else str(bool(str(input_bool('B3')))))

var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);

var fn28 = function (b22, b18, x15, s1, x4, x10) {
    var re2 = /^(n|[-_ ]?)$/;
    var x11;
    if (!(re2.test(s1))) {
        var b7 = !((x4) ? true : false);
        var b8 = true;
        var x9 = (b7 != b8) | 0;
        x11 = x9;
    } else {
        x11 = x10;
    }
    var opts13 = [7, 107, 158, 0];
    var b12 = false;
    for (var idx14 = 0; idx14 < opts13.length; idx14++) {
        if (opts13[idx14] == x11) {
            b12 = true;
        }
    }
    var b16 = x15;
    var b17 = 1;
    var s21 = ((b16 !== b17 === b18)).toString();
    var b25 = Boolean('' + (eval("b22")));
    return (b12 ? s21 : '' + (b25));
}
fn28(input_B3, input_B2, input_I3, input_S3, input_I1, input_I2);
